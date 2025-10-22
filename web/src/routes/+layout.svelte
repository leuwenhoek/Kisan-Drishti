<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';
    
    // State variable to track if the mobile menu is open
    // svelte-ignore non_reactive_update
        let isMenuOpen = false;		//ignore error

    // Function to toggle the menu state
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    let { children } = $props();
</script>

<style>
    /* ... (Your existing @keyframes and CSS for .navbar, .nav-logo, .nav-link, etc.) ... */
    
    /* Keyframe Animations */
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Navbar Container */
    .navbar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding: 0 30px;
        /* Updated background for better minimal blur effect */
        background: rgba(17, 24, 39, 0.95);
        backdrop-filter: blur(8px); /* Reduced blur for subtle effect */
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        border-bottom: 2px solid rgba(34, 197, 94, 0.3);
        z-index: 1000;
        animation: slideDown 0.5s ease-out;
        position: relative;
        overflow: hidden;
    }

    .navbar::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #84cc16, #22c55e, #84cc16, transparent);
        background-size: 200% 100%;
        animation: gradientShift 3s linear infinite;
    }

    /* Logo Styling */
    .nav-logo {
        margin-right: auto;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 12px;
        border-radius: 12px;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .nav-logo:hover {
        background: rgba(34, 197, 94, 0.1);
    }

    .logo-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #84cc16, #22c55e);
        border-radius: 8px;
        padding: 6px;
    }

    .logo-text {
        font-size: 1.4em;
        font-weight: 700;
        background: linear-gradient(135deg, #a3e635, #84cc16, #22c55e);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Desktop Links Styling */
    .nav-link {
        position: relative;
        font-size: 1em;
        font-weight: 600;
        color: #d1d5db;
        padding: 10px 20px;
        border-radius: 10px;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid transparent;
    }

    .nav-link::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #84cc16, #22c55e);
        transform: translateX(-50%);
        transition: width 0.3s ease;
    }

    .nav-link:hover {
        color: #a3e635;
        background: rgba(34, 197, 94, 0.1);
        border-color: rgba(132, 204, 22, 0.3);
        transform: translateY(-2px);
    }

    .nav-link:hover::before {
        width: 80%;
    }

    .nav-link:active {
        transform: translateY(0) scale(0.95);
    }

    /* Active state (Global modifier is kept for easy routing integration) */
    :global(.nav-link.active) {
        color: #0f172a;
        background: linear-gradient(135deg, #84cc16, #22c55e);
        border-color: #a3e635;
        box-shadow: 0 4px 15px rgba(132, 204, 22, 0.4);
    }

    :global(.nav-link.active)::before {
        display: none;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: none;
        margin-left: auto;
        padding: 8px;
        background: rgba(34, 197, 94, 0.2);
        border: 1px solid rgba(132, 204, 22, 0.3);
        border-radius: 8px;
        color: #a3e635;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .mobile-menu-btn:hover {
        background: rgba(34, 197, 94, 0.3);
        transform: scale(1.05);
    }

    .mobile-menu-btn:active {
        transform: scale(0.95);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .navbar {
            padding: 0 15px;
            height: 60px;
            /* Flex-wrap needed when menu opens to push links to a new line */
            flex-wrap: wrap; 
            align-items: flex-start;
        }

        .mobile-menu-btn {
            display: block;
        }

        /* Nav Links Container */
        .nav-links {
            /* Initially hidden and full width */
            display: none; 
            width: 100%;
            flex-direction: column;
            gap: 5px;
            padding: 15px 0;
            border-top: 1px solid rgba(34, 197, 94, 0.2);
            /* Minimal animation on open */
            animation: slideDown 0.3s ease-out; 
            /* To hide links when not open */
            max-height: 0; 
            overflow: hidden; 
            transition: max-height 0.3s ease-in-out;
        }

        .nav-links.open {
            display: flex;
            max-height: 500px; /* Large enough value to show all links */
        }

        .nav-link {
            width: 100%;
            text-align: center;
        }
        
        /* ... (other mobile CSS) ... */
    }

    /* ... (rest of your media queries) ... */
</style>

<nav class="navbar">
    <a href="/" class="nav-logo">
        <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 100%; height: 100%; color: #0f172a;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </div>
        <span class="logo-text">Kisan Dhristi</span>
    </a>
    
    <button class="mobile-menu-btn" onclick={toggleMenu} aria-expanded={isMenuOpen}>
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if isMenuOpen}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            {/if}
        </svg>
    </button>

    <div class="nav-links" class:open={isMenuOpen}>
        <a href="/" class="nav-link">Home</a>
        <a href="/AI" class="nav-link">Predict</a>
        <a href="/library" class="nav-link">Library</a>
        <a href="/history" class="nav-link">History</a>
        <a href="/chat" class="nav-link">Chat</a>
        <a href="/about" class="nav-link">About</a>
    </div>
</nav>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}