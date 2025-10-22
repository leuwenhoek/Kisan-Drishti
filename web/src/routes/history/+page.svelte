<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Query History - Kisan Drishti</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-8 sm:py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6">
		<div
			class="group bg-white rounded-xl shadow-md p-6 sm:p-8 mb-8 border-t-4 border-green-600 hover:shadow-2xl hover:shadow-green-600/30 hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-top-4 duration-700"
		>
			<h1
				class="text-3xl sm:text-4xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors duration-300"
			>
				Query History
			</h1>
			<p class="text-gray-600 text-sm sm:text-base flex items-center gap-2">
				<span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
				Database integrated with Prisma and PostgreSQL
			</p>
		</div>

		{#if data.users && data.users.length > 0}
			<div class="space-y-4">
				{#each data.users as user, index}
					<div
						class="group bg-white rounded-lg shadow-md p-6 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-500 border-l-4 border-yellow-500 hover:border-l-8 animate-in fade-in slide-in-from-left-4 duration-700"
						style="animation-delay: {index * 0.1}s;"
					>
						<div class="flex items-start justify-between mb-3">
							<h2
								class="text-xl font-semibold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300"
							>
								{user.name || `User ${index + 1}`}
							</h2>
							<span
								class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all duration-300 group-hover:scale-110"
							>
								Query #{index + 1}
							</span>
						</div>
						<div
							class="relative bg-gray-50 rounded-lg p-4 border border-gray-200 group-hover:bg-yellow-50 group-hover:border-yellow-300 transition-all duration-300 overflow-hidden"
						>
							<div
								class="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"
								style="transition: transform 1s ease-in-out;"
							></div>
							<p
								class="relative text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
							>
								{user.question}
							</p>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-50 duration-700"
			>
				<div class="text-6xl mb-4 animate-bounce">📭</div>
				<p class="text-gray-600 text-lg">No queries found yet</p>
			</div>
		{/if}
	</div>
</div>
