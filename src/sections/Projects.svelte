<script lang="ts">
	import Icon from '@iconify/svelte';
	import anime from 'animejs/lib/anime';
	import { ProjectsList } from '../data/Projects';
	import type { ProjectType } from '../types/Project';
	import Project from '../components/Project.svelte';

	const projects: ProjectType[] = ProjectsList.slice(0, 3);

	function animateProjectLinkHoverEnter() {
		anime({
			targets: '.projects-link-hover',
			translateX: 0,
			marginRight: 16
		});
		anime({
			targets: '#projects'
		});
	}

	function animateProjectLinkHoverExit() {
		anime({
			targets: '.projects-link-hover',
			marginRight: 0
		});
		anime({
			targets: '#projects'
		});
	}
</script>

<section id="projects" class="w-full min-h-fit h-fit p-8 py-4 flex flex-col gap-4">
	<hr class="w-full h-[1.5px] border-none bg-gradient-to-r from-background to-[#76726e]" />

	<h3 class="font-flex font-semibold text-2xl md:text-4xl md:font-semibold">Projects</h3>
	{#each projects.slice(0, 3) as project, index}
		<Project {project} {index} />
	{/each}

	<a
		on:mouseenter={animateProjectLinkHoverEnter}
		on:mouseleave={animateProjectLinkHoverExit}
		class="w-fit flex flex-row items-center font-flex text-black text-xl font-semibold gap-2 my-4"
		href="/projects"
	>
		<p class="projects-link-hover">View Full Project Backlog</p>
		<Icon
			id="projects-arrow"
			icon="mingcute:arrow-up-fill"
			rotate={1}
			class="projects-link-hover"
		/>
	</a>
</section>
