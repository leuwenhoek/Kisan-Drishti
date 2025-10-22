<script lang="ts">
	import { enhance } from '$app/forms';
	import { marked } from 'marked';

	let animate = $state(false);
	let input = $state('');
	let reply = $state('');
	let loading = $state(false);
	let formattedReply = $derived(reply ? marked(reply) : '');

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			animate = true;
			setTimeout(() => (animate = false), 600);
		}
	}
</script>

<svelte:head>
	<title>AI Chat Assistant - Kisan Drishti</title>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-8 sm:py-12 relative overflow-hidden"
>
	<!-- Animated background elements -->
	<div class="absolute inset-0 opacity-10 pointer-events-none">
		<div
			class="absolute top-20 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse"
		></div>
		<div
			class="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"
			style="animation-delay: 1.5s;"
		></div>
	</div>

	<div class="relative max-w-4xl mx-auto px-4 sm:px-6">
		<!-- Header -->
		<div
			class="group bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6 sm:mb-8 text-center border-t-4 border-green-600 hover:shadow-2xl hover:shadow-green-600/30 hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-top-4 duration-700"
		>
			<div class="flex items-center justify-center gap-3 mb-2">
				<span class="text-4xl animate-bounce">🤖</span>
				<h1
					class="text-3xl sm:text-4xl font-bold text-green-800 group-hover:text-green-600 transition-colors duration-300"
				>
					AI Chat Assistant
				</h1>
			</div>
			<p class="text-gray-600 text-sm sm:text-base flex items-center justify-center gap-2">
				<span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
				Ask questions about crop diseases and get instant answers
			</p>
		</div>

		<!-- Chat Form -->
		<form
			method="POST"
			enctype="multipart/form-data"
			class="group bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-700"
			style="animation-delay: 0.2s;"
			use:enhance={() => {
				loading = true;
				return async ({ result, update }) => {
					if (result.type === 'success' && result.data) {
						reply = String(result.data.reply);
						input = '';
					}
					loading = false;
					await update();
				};
			}}
		>
			<div class="space-y-4">
				<!-- Text Input -->
				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
						Your Question
					</label>
					<textarea
						id="message"
						name="message"
						bind:value={input}
						placeholder="e.g., How do I treat rice leaf blast disease?"
						rows="3"
						class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-400 {animate
							? 'ring-2 ring-green-400 border-green-400 shadow-lg shadow-green-400/30'
							: ''}"
						onkeydown={handleKeyDown}
						autocomplete="off"
						aria-label="Message input"
					></textarea>
				</div>

				<!-- File Upload -->
				<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
					<div class="flex-grow w-full">
						<label for="files" class="block text-sm font-medium text-gray-700 mb-2">
							Upload Image (Optional)
						</label>
						<div class="relative group/upload">
							<input
								type="file"
								id="files"
								name="files"
								accept="image/*"
								class="block w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200 file:transition-all file:duration-300 file:cursor-pointer file:hover:scale-105 border-2 border-dashed border-gray-300 rounded-lg p-2 hover:border-green-400 transition-all duration-300"
							/>
						</div>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						disabled={loading || !input.trim()}
						class="group/btn relative w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 active:scale-95 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-green-600/50 overflow-hidden"
					>
						<span class="relative z-10 flex items-center justify-center gap-2">
							{#if loading}
								<span
									class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
								></span>
								Sending...
							{:else}
								Send Message
								<span class="group-hover/btn:translate-x-1 transition-transform duration-300"
									>→</span
								>
							{/if}
						</span>
						<span
							class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
						></span>
					</button>
				</div>
			</div>
		</form>

		<!-- Response Display -->
		{#if formattedReply}
			<div
				class="group bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700"
			>
				<div class="flex items-center mb-4">
					<div class="text-2xl mr-3 animate-pulse">🤖</div>
					<h2
						class="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300"
					>
						AI Response
					</h2>
				</div>
				<div
					class="prose prose-sm sm:prose max-w-none text-gray-700
                    [&>ul]:space-y-2 [&>ol]:space-y-2 [&>p]:mb-4
                    [&>h1]:text-2xl [&>h2]:text-xl [&>h3]:text-lg
                    [&>pre]:bg-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg
                    [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded
                    [&>ul>li]:hover:translate-x-1 [&>ul>li]:transition-transform [&>ul>li]:duration-300
                    [&>ol>li]:hover:translate-x-1 [&>ol>li]:transition-transform [&>ol>li]:duration-300"
				>
					{@html formattedReply}
				</div>
			</div>
		{/if}

		<!-- Helper Text -->
		{#if !reply}
			<div
				class="group bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 border-l-4 border-green-600 hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-700"
				style="animation-delay: 0.4s;"
			>
				<h3 class="font-semibold text-green-800 mb-3 text-base sm:text-lg flex items-center gap-2">
					<span class="animate-pulse">💡</span>
					Try asking:
				</h3>
				<ul class="space-y-2 text-sm sm:text-base text-green-700">
					<li
						class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
					>
						<span class="mr-2 group-hover/item:scale-125 transition-transform duration-300">•</span>
						<span class="group-hover/item:text-green-900 transition-colors duration-300"
							>What causes potato late blight?</span
						>
					</li>
					<li
						class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
					>
						<span class="mr-2 group-hover/item:scale-125 transition-transform duration-300">•</span>
						<span class="group-hover/item:text-green-900 transition-colors duration-300"
							>How to prevent cassava mosaic disease?</span
						>
					</li>
					<li
						class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
					>
						<span class="mr-2 group-hover/item:scale-125 transition-transform duration-300">•</span>
						<span class="group-hover/item:text-green-900 transition-colors duration-300"
							>Best fungicide for grape powdery mildew</span
						>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
