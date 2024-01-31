<script lang="ts">
  import anime from "animejs";
  import NavBar from "./components/NavBar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Header from "./sections/Header.svelte";
  import About from "./sections/About.svelte";
  import Education from "./sections/Education.svelte";
  import Experience from "./sections/Experience.svelte";

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

<NavBar />
<Sidebar on:change={togglePushDown} />
<main id="main" class="z-0 bg-background min-h-screen h-full flex flex-col pt-16 sm:bg-black scroll-smooth focus:scroll-auto">
    <Header />
    <div class="z-0 w-full h-fit flex flex-col gap-4">
      <About />
      <Education />
      <Experience />
    </div>
</main>