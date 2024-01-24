<script lang="ts">
  import anime from "animejs";
import NavBar from "./components/NavBar.svelte";
  import Sidebar from "./components/Sidebar.svelte";

  let pushDown:boolean = false;

  function togglePushDown() {
    pushDown = !pushDown

    console.log("toggle push down " + pushDown);

    anime({
      targets : '#main',
      paddingTop: pushDown ? "8.75rem" : "0rem",
      autoplay: true,
    })
  }
</script>

<NavBar />
<Sidebar on:change={togglePushDown} />
<main id="main" class="bg-primary h-screen">
    <h1 class="text-black font-roboto text-4xl font-bold">
      acmahaja.com
    </h1>
</main>