<script lang="ts">
	  import anime from "animejs";
	  import Sidebar from "./components/Sidebar.svelte";

	  import Header from "./sections/Header.svelte";
	  import Footer from "./sections/Footer.svelte";
	  import NavBar from "./components/NavBar.svelte";
	  let pushDown:boolean = false;

function togglePushDown() {
  pushDown = !pushDown

  console.log("toggle push down " + pushDown);

  anime({
	targets : '#main',
	paddingTop: pushDown ? "12.75rem" : "4rem",
	autoplay: true,
  })
}


</script>
<main id="main" class="app z-0 bg-background w-full min-h-screen h-full flex flex-col pt-16 lg:flex-row lg:items-start lg:justify-center">
	<Header />

	<NavBar />
	<Sidebar on:change={togglePushDown} />
	<main>
		<slot />
	</main>
	<Footer />

</main>

