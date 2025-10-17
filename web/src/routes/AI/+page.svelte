<script lang="ts">
    import { onMount } from "svelte";
    import { getFacts } from "./components/MyComponent";

    let info =  $state("loading");

    onMount(async () => {
        info = await getFacts();
        console.log(info);
    });
    
</script>

<p>{JSON.stringify(info, null, 2)}</p>
<p class="text-2xl text-center">AI prediction page.</p>
<p class="text-2xl text-center">The python API is fetched here</p>