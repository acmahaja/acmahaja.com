<script lang="ts">
	import Icon from '@iconify/svelte';
	import anime from 'animejs/lib/anime';
	import type { ProjectType } from '../types/Project';

	export let project: ProjectType;
	export let index: number;

	function onHoverEnter() {
		anime({
			targets: `#project-${index}`,
			translateX: 4,
			translateY: -4,
			autoplay: true,
			boxShadow: '-5px 5px black'
		});
	}

	function onHoverExit() {
		anime({
			targets: `#project-${index}`,
			translateX: 0,
			translateY: 0,
			color: '#000',
			autoplay: true,
			boxShadow: '0px 0px black'
		});
	}
</script>

<a
	href={project.githubLink}
	id={`project-${index}`}
	class="max-w-xl dw-full h-auto p-2 bg-white flex flex-col items-center gap-2 rounded-lg border-2 border-black border-solid"
	on:mouseenter={onHoverEnter}
	on:mouseleave={onHoverExit}
>
	<div class=" w-full h-auto px-3 flex flex-row align-middle justify-between">
		<p class="text-md font-medium md:text-2xl">{project.name}</p>
		<Icon class="size-6" icon="devicon:github" />
	</div>
	<img
		src={project.image}
		alt="project screenshot"
		class="object-cover aspect-square w-[95%] h-auto rounded-md"
	/>
	<p class="w-full h-auto px-3 line-clamp-4">{project.description}</p>
	<div class="w-full h-auto px-3 flex flex-row flex-wrap items-start justify-start gap-2 py-1">
		{#each project.technologies as tech}
			<Icon class="size-7" icon={`devicon:${tech.iconifyLogo}`} />
		{/each}
	</div>
</a>
