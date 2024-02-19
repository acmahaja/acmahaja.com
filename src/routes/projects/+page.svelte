<script lang="ts">
	import { ProjectsList } from '../../data/Projects';
	import ProjectsTable from '../../components/ProjectsTable.svelte';
	console.log(ProjectsList);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="w-full p-8 flex flex-row justify-center items-start">
	<div class="w-full max-w-[100rem] flex flex-col gap-4">
		<h1 class="text-4xl font-bold">All Projects</h1>
		<h2 class="text-xl font-medium">A list of things I've worked on</h2>
		<p class="text-base font-mono">Stay tuned as I continue to update and showcase my projects!</p>
		<ProjectsTable data={ProjectsList} />
	</div>
</section>
