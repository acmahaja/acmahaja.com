<script lang="ts">
  import Icon from '@iconify/svelte';
  import Technologies from "../data/Technologies";
  import Technology from '../components/Technology.svelte';
</script>

<section id="technologies" class="w-full min-h-fit h-fit p-8 py-4  flex flex-col gap-4">
  <h3 class="font-flex font-semibold text-2xl">Technologies</h3>
  <p>The following are technologies I am currently or have previously worked with.</p>
  <div class="flex flex-row flex-wrap gap-2 py-1">
    {#each Technologies as tech}
      <Technology tech={tech} />
    {/each}
  </div>
</section>
