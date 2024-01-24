<script lang="ts">
    import anime  from "animejs/lib/anime";

    let toggleViewSideBar:boolean = true;

    function toggleSideBar() {
        anime({
            targets: '#toggleSideBarButton',
            rotate: toggleViewSideBar ? "0.5turn" : "0",
            autoplay: true,
        })
        toggleViewSideBar = !toggleViewSideBar;
    }
</script>

<nav class="flex flex-row justify-between align-center sm:hidden p-5 bg-black">
    <p class="font-mono font-semibold text-white hover:underline hover:cursor-pointer hover:underline-offset-4">@acmahaja</p>
    <img id="toggleSideBarButton" src="/double_arrow.svg" on:click={toggleSideBar} alt="sidebar-toggle" />
</nav>