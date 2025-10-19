<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<div class="top-0 left-0 w-screen h-12 m-0
			flex flex-row space-x-3
			bg-gray-500 text-white shadow-lg">
		<a href="/" class="text-lg font-medium  text-white px-3 py-2 rounded-4xl hover:bg-gray-600 active:scale-95 transition-all duration-200">Home</a>
		<a href="/AI" class="text-lg font-medium  text-white px-3 py-2 rounded-4xl hover:bg-gray-600 active:scale-95 transition-all duration-200">Predict</a>
		<a href="/library" class="text-lg font-medium  text-white px-3 py-2 rounded-4xl hover:bg-gray-600 active:scale-95 transition-all duration-200">Library</a>
		<a href="/about" class="text-lg font-medium  text-white px-3 py-2 rounded-4xl hover:bg-gray-600 active:scale-95 transition-all duration-200">About</a>
		<a href="/history" class="text-lg font-medium  text-white px-3 py-2 rounded-4xl hover:bg-gray-600 active:scale-95 transition-all duration-200">History</a>
		<a href="/chat" class="text-lg font-medium  text-white px-3 py-2 rounded-4xl hover:bg-gray-600 active:scale-95 transition-all duration-200">Chat</a>
		
		</div>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
