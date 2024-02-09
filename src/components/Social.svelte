<script lang="ts">
    import type { Link } from "../types/Link";
    import anime  from "animejs/lib/anime";

    import Icon from '@iconify/svelte';
    export let socialLink:Link;

    function onHoverEnter() {
        anime({
            targets: `#${socialLink.name}`,
            translateX: 4,
            translateY: -4,
            autoplay: true,
            color: '#fff',
            background: `${socialLink.socialColor}`,
            easing: 'linear',
            duration: 200,
            boxShadow: '-5px 5px black'

        })
    }

    function onHoverExit() {
        anime({
            targets: '.Social',
            translateX: 0,
            translateY: 0,
            color: '#000',
            autoplay: true,
            background: '#fff',
            easing: 'linear',
            duration: 200,
            boxShadow: '0px 0px black'
        })
    }
</script>

<a href="{socialLink.URL}" id={socialLink.name} on:mouseenter={onHoverEnter} on:mouseleave={onHoverExit} class="Social size-14 aspect-square border-black border-solid border-2 rounded-md bg-white grid place-items-center">
    <Icon class="size-7" icon="{socialLink.icon}" />
</a>
