<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.png';
    import { page } from '$app/stores';

    let { children } = $props();
    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function closeMenu() {
        isOpen = false;
    }

	function handleKeyDown(e : KeyboardEvent){
		if(e.key === 'enter' || e.key === 'esc' || e.key === ' '){
			e.preventDefault();
			closeMenu();
		}
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
        style:transform={isOpen ? 'translateY(7.5px) rotate(45deg)' : 'none'}
    ></span>

    <!-- Middle line -->
    <span
        class="block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out"
        style:opacity={isOpen ? '0' : '1'}
    ></span>

    <!-- Bottom line -->
    <span
        class="block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out"
        style:transform={isOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none'}
    ></span>
</button>

<!-- Overlay backdrop -->
{#if isOpen}
    <div
        onclick={closeMenu}
		onkeydown={handleKeyDown}
		role="button"
		tabindex=0
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        aria-label="Close menu overlay"
    ></div>
{/if}

<!-- Side menu panel -->
<div
    class="fixed top-0 right-0 h-full w-80 max-w-full z-50 bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out"
    style:transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
>
    <div class="flex flex-col h-full p-8 pt-20">
        <nav class="flex flex-col space-y-6" aria-label="Main navigation">
            <a
                href="/"
                onclick={closeMenu}
                class="text-3xl font-bold transition-all duration-200 hover:translate-x-2"
                class:text-blue-400={$page.url.pathname === '/'}
                class:text-white={$page.url.pathname !== '/'}
                aria-current={$page.url.pathname === '/' ? 'page' : undefined}
                >Home</a
            >
            <a
                href="/about"
                onclick={closeMenu}
                class="text-3xl font-bold transition-all duration-200 hover:translate-x-2"
                class:text-blue-400={$page.url.pathname === '/about'}
                class:text-white={$page.url.pathname !== '/about'}
                aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
                >About</a
            >
            <a
                href="/chat"
                onclick={closeMenu}
                class="text-3xl font-bold transition-all duration-200 hover:translate-x-2"
                class:text-blue-400={$page.url.pathname === '/chat'}
                class:text-white={$page.url.pathname !== '/chat'}
                aria-current={$page.url.pathname === '/chat' ? 'page' : undefined}
                >AI</a
            >
            <a
                href="/library"
                onclick={closeMenu}
                class="text-3xl font-bold transition-all duration-200 hover:translate-x-2"
                class:text-blue-400={$page.url.pathname === '/library'}
                class:text-white={$page.url.pathname !== '/library'}
                aria-current={$page.url.pathname === '/library' ? 'page' : undefined}
                >Library</a
            >
            <a
                href="/history"
                onclick={closeMenu}
                class="text-3xl font-bold transition-all duration-200 hover:translate-x-2"
                class:text-blue-400={$page.url.pathname === '/history'}
                class:text-white={$page.url.pathname !== '/history'}
                aria-current={$page.url.pathname === '/history' ? 'page' : undefined}
                >History</a
            >
        </nav>
    </div>
</div>

<!-- Main content -->
{@render children?.()}
