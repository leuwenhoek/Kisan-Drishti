import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "$env/static/private";
import type { Actions, RequestEvent } from "./$types";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export const actions: Actions = {
    default: async (req: RequestEvent) => {

        const formData = await req.request.formData();
        const message = formData.get('message') as string;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message
        })
        return{
            reply: response.text
        };

    }

}satisfies Actions;
