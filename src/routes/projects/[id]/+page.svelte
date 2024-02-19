<script lang="ts">
	import { marked } from 'marked';

	import { ProjectsList } from '../../../data/Projects.js';
	import type { ProjectType } from '../../../types/Project.js';
	import type { FileCommit } from '../../../types/githubTypes.js';
	import { getRepoREADME } from '../../../utils/githubHelpers';
	export let data;
	let projectDescription: any = '';
	const currentProject: ProjectType = ProjectsList[Number(data.params.id)];
	getRepoREADME(currentProject.owner, currentProject.name).then((result: FileCommit) => {
		projectDescription = result;
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">{@html marked(projectDescription)}</div>
