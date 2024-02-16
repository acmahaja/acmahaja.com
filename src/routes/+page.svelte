<script lang="ts">
	import Header from '../sections/Header.svelte';
	import About from '../sections/About.svelte';
	import Education from '../sections/Education.svelte';
	import Experience from '../sections/Experience.svelte';
	import Technologies from '../sections/Technologies.svelte';
	import Projects from '../sections/Projects.svelte';
</script>

<Header />
<div class="z-0 w-full h-fit flex flex-col gap-2 lg:w-8/12 lg:max-w-[66rem]">
	<About />
	<Education />
	<Experience />
	<Technologies />
	<Projects />
</div>
