/** @type {import('@sveltejs/kit').RequestHandler;} */

export async function getFacts(): Promise<string> {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!response.ok) {
			throw new Error("Network response was not OK!");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching facts:", error);
		return "Failed to fetch API";
	}
}
