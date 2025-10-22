<script lang="ts">
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Kisan Drishti - AI-Powered Crop Disease Detection</title>
</svelte:head>

<!-- Header / Hero Section -->
<header
	class="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white"
>
	<!-- Animated background elements -->
	<div class="absolute inset-0 opacity-20">
		<div
			class="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"
		></div>
		<div
			class="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"
			style="animation-delay: 1s;"
		></div>
	</div>

	<div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
		<h1
			class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
		>
			Kisan Drishti
		</h1>
		<p
			class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-green-50 animate-in fade-in slide-in-from-bottom-8 duration-700"
			style="animation-delay: 0.2s;"
		>
			Transforming Crop Health with AI & Technology
		</p>
		<a
			href="#solution"
			class="group relative inline-block bg-yellow-400 text-green-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-8 duration-700"
			style="animation-delay: 0.4s;"
		>
			<span class="relative z-10">Learn More</span>
			<span
				class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
			></span>
		</a>
	</div>
</header>

<!-- Problem Section -->
<section id="problem" class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
	<div
		class="group bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-red-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-500 hover:border-l-8"
	>
		<h2
			class="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6 group-hover:text-red-600 transition-colors duration-300"
		>
			The Problem
		</h2>
		<p
			class="text-gray-700 leading-relaxed text-base sm:text-lg group-hover:text-gray-900 transition-colors duration-300"
		>
			Millions of farmers lose crops every year to diseases. Small patches can spread quickly, and
			identifying the problem is often slow, inaccurate, and requires unavailable experts. This
			leads to major losses, especially for small farmers, and reduces yield and income.
		</p>
	</div>
</section>

<!-- Solution Section -->
<section id="solution" class="bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-16">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<div
			class="group bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-green-600 hover:shadow-2xl hover:shadow-green-600/20 hover:-translate-y-2 transition-all duration-500 hover:border-l-8"
		>
			<h2
				class="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 inline-block"
			>
				Our Solution
			</h2>
			<p
				class="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg group-hover:text-gray-900 transition-colors duration-300"
			>
				Kisan Drishti lets farmers identify crop diseases instantly. By taking a photo of an
				affected leaf and uploading it to our website, farmers can see what's wrong and get simple
				steps to treat it.
			</p>
			<p
				class="text-gray-700 leading-relaxed text-base sm:text-lg group-hover:text-gray-900 transition-colors duration-300"
			>
				Machine learning detects the disease, and the platform provides instructions in the farmer's
				own language. For more details, an AI chat offers in-depth guidance, while a dedicated
				section ensures verified information is always available.
			</p>
		</div>
	</div>
</section>

<!-- Key Features Section -->
<section id="features" class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
	<h2 class="text-2xl sm:text-3xl font-bold text-green-800 mb-8 sm:mb-12 text-center">
		Key Features
	</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
		<div
			class="group relative bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-green-600/30 hover:-translate-y-3 transition-all duration-500 border-t-4 border-green-600 overflow-hidden"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>
			<div class="relative z-10">
				<div
					class="text-4xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300"
				>
					📸
				</div>
				<h3
					class="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-green-700 transition-colors duration-300"
				>
					Instant Disease Detection
				</h3>
			</div>
		</div>
		<div
			class="group relative bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-3 transition-all duration-500 border-t-4 border-yellow-500 overflow-hidden"
			style="animation-delay: 0.1s;"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>
			<div class="relative z-10">
				<div
					class="text-4xl mb-4 animate-pulse group-hover:scale-125 transition-transform duration-300"
				>
					📋
				</div>
				<h3
					class="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-yellow-700 transition-colors duration-300"
				>
					Step-by-Step Treatment
				</h3>
			</div>
		</div>
		<div
			class="group relative bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-3 transition-all duration-500 border-t-4 border-blue-600 overflow-hidden"
			style="animation-delay: 0.2s;"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>
			<div class="relative z-10">
				<div
					class="text-4xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300"
					style="animation-delay: 0.2s;"
				>
					🌐
				</div>
				<h3
					class="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300"
				>
					Multilingual AI Guidance
				</h3>
			</div>
		</div>
		<div
			class="group relative bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-purple-600/30 hover:-translate-y-3 transition-all duration-500 border-t-4 border-purple-600 overflow-hidden"
			style="animation-delay: 0.3s;"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>
			<div class="relative z-10">
				<div
					class="text-4xl mb-4 animate-pulse group-hover:scale-125 transition-transform duration-300"
					style="animation-delay: 0.3s;"
				>
					✅
				</div>
				<h3
					class="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-purple-700 transition-colors duration-300"
				>
					Verified Information
				</h3>
			</div>
		</div>
		<div
			class="group relative bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-3 transition-all duration-500 border-t-4 border-red-600 overflow-hidden"
			style="animation-delay: 0.4s;"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>
			<div class="relative z-10">
				<div
					class="text-4xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300"
					style="animation-delay: 0.4s;"
				>
					⚡
				</div>
				<h3
					class="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-red-700 transition-colors duration-300"
				>
					Early Detection System
				</h3>
			</div>
		</div>
	</div>
</section>

<!-- Applications Section -->
<section id="applications" class="bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-16">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<h2 class="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-10 text-center">
			Applications
		</h2>
		<div
			class="group bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-500"
		>
			<ul class="space-y-3 sm:space-y-4">
				<li
					class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
				>
					<span
						class="text-green-600 font-bold text-xl mr-3 group-hover/item:scale-125 transition-transform duration-300"
						>✓</span
					>
					<span
						class="text-gray-700 text-base sm:text-lg group-hover/item:text-green-700 transition-colors duration-300"
						>Quick crop disease identification</span
					>
				</li>
				<li
					class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
				>
					<span
						class="text-green-600 font-bold text-xl mr-3 group-hover/item:scale-125 transition-transform duration-300"
						>✓</span
					>
					<span
						class="text-gray-700 text-base sm:text-lg group-hover/item:text-green-700 transition-colors duration-300"
						>Reduced losses due to delayed diagnosis</span
					>
				</li>
				<li
					class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
				>
					<span
						class="text-green-600 font-bold text-xl mr-3 group-hover/item:scale-125 transition-transform duration-300"
						>✓</span
					>
					<span
						class="text-gray-700 text-base sm:text-lg group-hover/item:text-green-700 transition-colors duration-300"
						>Access to agricultural knowledge in local languages</span
					>
				</li>
				<li
					class="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
				>
					<span
						class="text-green-600 font-bold text-xl mr-3 group-hover/item:scale-125 transition-transform duration-300"
						>✓</span
					>
					<span
						class="text-gray-700 text-base sm:text-lg group-hover/item:text-green-700 transition-colors duration-300"
						>Support for proactive disease management</span
					>
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- Footer -->
<footer
	class="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-8 text-center"
>
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"
		></div>
	</div>
	<p class="relative text-green-100 hover:text-white transition-colors duration-300">
		© 2025 Kisan Drishti. Empowering farmers with AI technology.
	</p>
</footer>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
