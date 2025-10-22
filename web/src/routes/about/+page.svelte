<script>
	export let team = [
		{ name: 'Ayush Kumar', role: 'Team Leader and AI Lead', color: 'from-green-500 to-green-700' },
		{
			name: 'Priyanshu Mahala',
			role: 'Frontend and Backend Lead, DevOps',
			color: 'from-blue-500 to-blue-700'
		},
		{ name: 'Anjani Krisha', role: 'Backend Engineer', color: 'from-purple-500 to-purple-700' },
		{ name: 'Ayush Singh', role: 'Frontend Engineer', color: 'from-yellow-500 to-yellow-700' },
		{ name: 'Suttapa Das', role: 'UI/UX Designer', color: 'from-pink-500 to-pink-700' }
	];
</script>

<svelte:head>
	<title>Our Team - Kisan Drishti</title>
</svelte:head>

<section
	class="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-16 sm:py-20 px-4 sm:px-8"
>
	<!-- Animated background blobs -->
	<div class="absolute inset-0 pointer-events-none opacity-30">
		<div
			class="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full blur-3xl animate-pulse"
		></div>
		<div
			class="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"
			style="animation-delay: 1s;"
		></div>
		<div
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse"
			style="animation-delay: 2s;"
		></div>
	</div>

	<div class="relative max-w-7xl mx-auto w-full">
		<!-- Header Section -->
		<div class="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
			<h1
				class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-900"
			>
				Our Team
			</h1>

			<div class="mt-6 flex items-center justify-center gap-2">
				<span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
				<span
					class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"
					style="animation-delay: 0.2s;"
				></span>
				<span
					class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"
					style="animation-delay: 0.4s;"
				></span>
			</div>
		</div>

		<!-- Team Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
			{#each team as member, index}
				<div
					class="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
					style="animation-delay: {index * 0.1}s;"
				>
					<!-- Glassmorphism Card -->
					<div
						class="relative p-6 sm:p-8 rounded-2xl backdrop-blur-md bg-white/40 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
					>
						<!-- Animated gradient background blob -->
						<div
							class="absolute -inset-10 blur-3xl opacity-0 group-hover:opacity-60 bg-gradient-to-br {member.color} transition-all duration-700 -z-10 group-hover:animate-pulse"
						></div>

						<!-- Colored top border that expands on hover -->
						<div
							class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r {member.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
						></div>

						<!-- Avatar placeholder with gradient -->
						<div class="relative mb-6">
							<div
								class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br {member.color} shadow-lg group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6"
							>
								<span class="text-white text-3xl font-bold">
									{member.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</span>
							</div>
							<!-- Animated ring around avatar -->
							<div
								class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"
								style="color: currentColor;"
							></div>
						</div>

						<!-- Content -->
						<div class="text-center relative z-10">
							<h3
								class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300 relative inline-block"
							>
								{member.name}
								<span
									class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r {member.color} group-hover:w-full transition-all duration-500"
								></span>
							</h3>
							<p
								class="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed"
							>
								{member.role}
							</p>
						</div>

						<!-- Decorative corner elements -->
						<div
							class="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
						></div>
						<div
							class="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
						></div>

						<!-- Shimmer effect on hover -->
						<div
							class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"
							style="transition: transform 1s ease-in-out;"
						></div>
					</div>

					<!-- Shadow element for depth -->
					<div
						class="absolute inset-0 bg-gradient-to-br {member.color} opacity-0 group-hover:opacity-20 blur-xl -z-20 transition-all duration-500 group-hover:scale-110 rounded-2xl"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
