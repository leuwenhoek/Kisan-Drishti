import { GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY } from '$env/static/private';
import type { Actions, RequestEvent } from './$types';

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const actions: Actions = {
	default: async (req: RequestEvent) => {
		const formData = await req.request.formData();
		const message = formData.get('message') as string;
		const images = formData.getAll('files') as File[];

		const contents: any[] = [{ role: 'user', parts: [] }];

		if (message) {
			contents[0].parts.push({ text: message });
		}

		if (images.length > 0 && images[0].size > 0) {
			for (const img of images) {
				const buffer = Buffer.from(await img.arrayBuffer());
				contents[0].parts.push({
					inlineData: {
						mimeType: img.type,
						data: buffer.toString('base64')
					}
				});
			}
		}

		const response = await ai.models.generateContent({
			model: 'gemini-2.5-flash',
			contents
		});

		return { reply: response.text };
	}
} satisfies Actions;
