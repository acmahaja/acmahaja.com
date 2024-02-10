<script lang="ts">
  import Icon from '@iconify/svelte';
  import anime  from "animejs/lib/anime";
  import { ProjectsList } from '../data/Projects';
  import type { ProjectType } from '../types/Project';
  import Project from '../components/Project.svelte';

  const projects:ProjectType[] = ProjectsList.slice(0,3)

  function animateProjectLinkHoverEnter() {
    anime({
            targets: '.projects-link-hover',
            translateX: 0,
            marginRight: 16,
        })
    anime({
      targets: '#projects',
            opacity: "100%",

    })
  }

  function animateProjectLinkHoverExit() {
    anime({
            targets: '.projects-link-hover',
            marginRight: 0,

        })
        anime({
      targets: '#projects',
            opacity: "0%",

    })  }

</script>

<section id="Projects" class="w-full min-h-fit h-fit p-8 py-4  flex flex-col gap-4">
    <h3 class="font-flex font-semibold text-2xl">Projects</h3>
    {#each projects as project}
      <Project {project} />
    {/each}

    <a on:mouseenter={animateProjectLinkHoverEnter} on:mouseleave={animateProjectLinkHoverExit} class="w-fit flex flex-row items-center font-flex text-black text-xl font-semibold gap-2" href="/projects">
        <p class="projects-link-hover">
            View Full Project Backlog
            </p>
        <Icon id="projects-arrow"
          icon="mingcute:arrow-up-fill"
          rotate={1}
          class="projects-link-hover" />
      </a>


</section>