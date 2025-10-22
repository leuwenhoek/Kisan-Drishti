<script>
  export let team = [
    { name: 'Ayush Kumar', role: 'Team Leader, AI lead. and IOT lead' },
    { name: 'Priyanshu Mahala', role: 'Frontend and Backend lead. and, Devops' },
    { name: 'Anjani Krisha', role: 'Backend developer and Frontend lead.' },
    { name: 'Ayush Singh', role: 'Frontend developer' },
    { name: 'Suttapa Das', role: 'UI/UX Designer'}
  ];
</script>

<section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-8 " >
  <div class="max-w-5xl w-full">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">Our Team</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {#each team as member}
        <div class="relative p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-xl transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-1">
          <div class="absolute -inset-10 blur-3xl opacity-40 bg-gradient-to-tr from-green-100 to-green-50 -z-10"></div>
          <div class="text-center">
            <h3 class="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p class="text-gray-600 mt-1">{member.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes blob {
    0% { transform: scale(1) translate(0,0); }
    33% { transform: scale(1.05) translate(5px,-5px); }
    66% { transform: scale(0.97) translate(-5px,5px); }
    100% { transform: scale(1) translate(0,0); }
  }
  .blur-3xl { filter: blur(40px); }
  .backdrop-blur-md { -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); }
</style>