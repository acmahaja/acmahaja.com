<script lang="ts">
	import anime from 'animejs';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../sections/Footer.svelte';
	import NavBar from '../components/NavBar.svelte';
	import './styles.css';

	let pushDown: boolean = false;

	function togglePushDown() {
		pushDown = !pushDown;

		console.log('toggle push down ' + pushDown);

		anime({
			targets: '#main',
			paddingTop: pushDown ? '12.75rem' : '4rem',
			autoplay: true
		});
	}
</script>
<NavBar />
<Sidebar on:change={togglePushDown} />
<main id="main" 	class="z-0 bg-background w-full min-h-screen h-full flex flex-col pt-16 lg:flex-row lg:items-start lg:justify-center"
>
	<slot />
</main>

<Footer />
