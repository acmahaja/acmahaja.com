<script lang="ts">
    import Icon from '@iconify/svelte';
    import anime from "animejs/lib/anime"
    import type {ProjectType} from "../types/Project";
  import Technologies from '../sections/Technologies.svelte';

    export let project:ProjectType;

</script>

<div class="w-full h-auto p-2 bg-white flex flex-col items-center gap-2 rounded-lg border-2 border-black border-solid">
    <div class=" w-full h-auto flex flex-row align-middle justify-between">
        <p class="text-md font-medium">{project.name}</p>
        <Icon class="size-6" icon="devicon:github" />
    </div>
    <img src={project.image} alt="project screenshot" class="object-cover aspect-square w-[95%] h-auto rounded-md" />
    <p class="w-full text-start">{project.description}</p>
    <div class="w-full h-auto flex flex-row flex-wrap items-start justify-start gap-2 py-1">
        {#each project.technologies as technology}
          <Icon class="size-8" icon="devicon:{technology}"/>
        {/each}
    </div>
</div>