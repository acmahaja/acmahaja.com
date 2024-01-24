<script lang="ts">
    import anime  from "animejs/lib/anime";

    let toggleViewSideBar:boolean = false;

    function toggleSideBar() {
        anime({
            targets: '#toggleSideBarButton',
            rotate: toggleViewSideBar ? "0.5turn" : "0",
            autoplay: true,
        })
        toggleViewSideBar = !toggleViewSideBar;
    }
</script>

<nav class="flex flex-row justify-between items-center sm:hidden p-5 bg-black">
    <p class="font-mono font-semibold text-white leading-[0px] hover:underline hover:cursor-pointer hover:underline-offset-4">@acmahaja</p>
    <button id="toggleSideBarButton" class="bg-[url('/double_arrow.svg')] w-4 h-4 bg-no-repeat bg-center" on:click={toggleSideBar}></button>
</nav>