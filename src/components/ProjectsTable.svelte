<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ProjectType } from '../types/Project';
	import Technology from './Technology.svelte';
	export let data: ProjectType[];
	console.log(data);
</script>

<div
	class="w-full h-auto grid grid-cols-12 text-base text-left font-sans-serif items-center md:text-lg"
>
	<div class="p-2 col-span-3 font-semibold border-b border-solid border-black md:col-span-2">
		Date
	</div>
	<div class="p-2 col-span-7 font-semibold border-b border-solid border-black md:col-span-3">
		Name
	</div>
	<div class="p-2 hidden font-semibold border-b border-solid border-black md:block md:col-span-5">
		Built with
	</div>
	<div class="p-2 col-span-2 font-semibold border-b border-solid border-black md:col-span-2">
		Link
	</div>

	{#each data as project}
		<div class="p-3 col-span-3 border-b border-solid border-black border-opacity-30 md:col-span-2">
			{project.date?.getFullYear()}
		</div>
		<div class="p-3 col-span-7 border-b border-solid border-black border-opacity-30 md:col-span-3">
			{project.name}
		</div>
		<div
			class="p-[0.6rem] hidden border-b border-solid border-black border-opacity-30 md:flex md:col-span-5 md:flex-row md:flex-wrap md:gap-2"
		>
			{#each project.technologies as tech}
				<Technology {tech} size={'small'} />
			{/each}
		</div>
		<div
			class="p-2 md:p-[0.85rem] col-span-2 border-b border-solid border-black border-opacity-30 md:col-span-2"
		>
			<a class="text-sm" href={project.githubLink}>
				<Icon class="size-6" icon="devicon:github" />
			</a>
		</div>
	{/each}
</div>
