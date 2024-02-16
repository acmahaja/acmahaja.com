<script>
	import { page } from '$app/stores';
	import Error404 from '$lib/Error404.svg';
</script>

<div class="h-screen flex flex-col items-center justify-center gap-5 p-5">
	<img class="w-3/4" src={Error404} alt="404 Error message" />
	<h1 class=" text-4xl font-bold m-4">{$page.error.message}</h1>
	<p class="text-lg font-medium text-center">
		This page does not exist. Please make sure the address is correct, or try to refresh the page.
	</p>
	<a
		class="p-3 px-5 bg-primary border-2 border-solid border-black rounded-md text-black hover:underline"
		href="/">Home</a
	>
</div>
