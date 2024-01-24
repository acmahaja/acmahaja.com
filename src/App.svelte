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
<main id="main" class="flex items-center justify-center h-screen bg-green">
    <h1 class="font-roboto text-4xl font-bold text-green-300">
      acmahaja.com
    </h1>
</main>