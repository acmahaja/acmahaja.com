<script lang="ts">
    import anime  from "animejs/lib/anime";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let toggleViewSideBar:boolean = true;

    function toggleSideBar() {
        anime({
            targets: '#toggleSideBarButton',
            rotate: toggleViewSideBar ? "0.5turn" : "0",
            autoplay: true,
        })

        anime({
            targets: '#sidebar',
            autoplay: true,
            height: !toggleViewSideBar ? "0" : "8.75rem",
        })

        toggleViewSideBar = !toggleViewSideBar;
        dispatch('change');
    }
</script>

<nav class="flex flex-row justify-between items-center fixed w-screen h-16 px-5 bg-black sm:hidden">
    <p class="font-mono font-semibold text-white leading-[0px] hover:underline hover:cursor-pointer hover:underline-offset-4">@acmahaja</p>
    <button id="toggleSideBarButton" class="bg-[url('/double_arrow.svg')] w-4 h-4 bg-no-repeat bg-center" on:click={toggleSideBar}></button>
</nav>

<div id="sidebar" class="bg-black h-0 w-dvw fixed top-16 overflow-hidden">
    <ul class="w-full max-w-[70rem] flex flex-col align-middle text-right p-4 gap-4 border-t-[1px] border-t-white">
        <li class="font-mono font-medium text-primary hover:underline hover:cursor-pointer hover:underline-offset-4">About</li>
        <li class="font-mono font-medium text-primary hover:underline hover:cursor-pointer hover:underline-offset-4">Background</li>
        <li class="font-mono font-medium text-primary hover:underline hover:cursor-pointer hover:underline-offset-4">Projects</li>
    </ul>
</div>