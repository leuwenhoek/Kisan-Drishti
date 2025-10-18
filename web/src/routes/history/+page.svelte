<script lang="ts">
    let { data }= $props();
</script>

<h1>Database Integrated with prisma and postgres</h1>

{#each data.users as user}
    <h2>{user.name}</h2>
    <h2>{user.question}</h2>   
{/each}