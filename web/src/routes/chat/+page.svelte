<script lang="ts">
    import { enhance } from "$app/forms";
    import { marked } from "marked";
    import { HighlightSpanKind } from "typescript";

    let animate = $state(false);
    let input = $state("");
    let reply = $state("");
    let loading = $state(false);
    let formattedReply = $derived(reply ? marked(reply) : '');

    function handleKeyDown(e: KeyboardEvent){
      if (e.key === 'Enter'){
        animate = true;
        setTimeout(() => (animate = false), 600);
      }
    }
</script>

<h1 class="text-center text-4xl font-bold my-8 text-gray-800">AI Chatbot</h1>

<form
  method="POST"
  class="max-w-xl mx-auto flex gap-4"
  use:enhance={() => {
    return async ({ result, update }) => {
      await update();
      if (result.type === "success" && result.data) {
        reply = String(result.data.reply);
        input = "";
      }
      await update();
    };
  }}
>
  <input
    type="text"
    name="message"
    bind:value={input}
    placeholder="Ask something..."
    class="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 {animate ? 'animate-pulse-once border-blue-400 shadow-lg': ''}"
    onkeydown={handleKeyDown}
    autocomplete="off"
    aria-label="Message input"
  />
  
  <button
    type="submit"
    class="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
    disabled={loading}
  >
    Send
  </button>
</form>

{#if formattedReply}
  <div class="max-w-xl mx-auto mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
    <h2 class="text-xl font-semibold mb-4 text-gray-700">Response:</h2>
    <div class="prose max-w-full text-gray-800 markdown" >{@html formattedReply}</div>
  </div>
{/if}

<style>
  @keyframes pulse-once {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,99,235,0.5); }
    50% { transform: scale(1.05); box-shadow: 0 0 15px 2px rgba(37,99,235,0.3); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,99,235,0.0); }
  }

  .animate-pulse-once {
    animation: pulse-once 0.6s ease-in-out forwards;
  }
</style>