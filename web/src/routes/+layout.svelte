<script lang="ts">
	import '../app.css'
    import favicon from '$lib/assets/favicon.png';

    let { children } = $props();
    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function closeMenu() {
        isOpen = false;
    }
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="stylesheet" href="app.css" />
</svelte:head>

<!-- Hamburger Button -->
<button
    onclick={toggleMenu}
    class="fixed top-4 right-4 z-50 flex flex-col gap-[7px] h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-white shadow-lg transition-colors hover:bg-slate-700"
    aria-label="Toggle menu"
    aria-expanded={isOpen}
>
    <span class="sr-only">Menu</span>

    <!-- Top line -->
    <span
        class="block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out"
        style:transform={isOpen ? 'translateY(8.6px) rotate(45deg)' : 'none'}
    ></span>

    <!-- Middle line -->
    <span
        class="block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out"
        style:opacity={isOpen ? '0' : '1'}
    ></span>

    <!-- Bottom line -->
    <span
        class="block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out"
        style:transform={isOpen ? 'translateY(-8.6px) rotate(-45deg)' : 'none'}
    ></span>
</button>

<!-- Full screen menu overlay -->
{#if isOpen}
    <div
        onclick={closeMenu}
        onkeydown={(e) => {
            if (['Enter', ' ', 'Escape'].includes(e.key)) {
                e.preventDefault();
                closeMenu();
            }
        }}
        role="button"
        tabindex="0"
        aria-label="Close menu"
        class="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-300"
    >
        <div class="flex min-h-screen items-center justify-center p-4">
            <nav class="flex flex-col space-y-8 text-center" aria-label="Main navigation">
                <a
                    href="/"
                    onclick={closeMenu}
                    class="text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400 hover:scale-110"
                    >Home</a
                >
                <a
                    href="/about"
                    onclick={closeMenu}
                    class="text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400 hover:scale-110"
                    >About</a
                >
                <a
                    href="/chat"
                    onclick={closeMenu}
                    class="text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400 hover:scale-110"
                    >AI</a
                >
                <a
                    href="/library"
                    onclick={closeMenu}
                    class="text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400 hover:scale-110"
                    >Library</a
                >
                <a
                    href="/history"
                    onclick={closeMenu}
                    class="text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400 hover:scale-110"
                    >History</a
                >
            </nav>
        </div>
    </div>
{/if}

<!-- Main content -->
{@render children?.()}
