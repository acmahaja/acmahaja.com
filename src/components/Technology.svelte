<script lang="ts">
  import Icon from '@iconify/svelte';
  import anime from 'animejs/lib/anime';

  import type { TechnologyType } from '../types/Technologies';
  export let tech: TechnologyType;

  function onHoverEnter() {
    anime({
      targets: `#tech-${tech.name}`,
      translateX: 4,
      translateY: -4,
      autoplay: true,
      color: '#fff',
      background: `${tech.color}`,
      easing: 'linear',
      duration: 200,
      boxShadow: '-5px 5px black',
    });
    anime({
      targets: `#tech-${tech.name} > svg`,
      filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.8)) brightness(1.25)",
      easing: 'linear',
      duration: 200,
    });
  }

  function onHoverExit() {
    anime({
      targets: `#tech-${tech.name}`,
      translateX: 0,
      translateY: 0,
      color: '#000',
      autoplay: true,
      background: '#fff',
      easing: 'linear',
      duration: 200,
      boxShadow: '0px 0px black',
    });
    anime({
      targets: `#tech-${tech.name} > svg`,
      filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.8)) brightness(1)",
      easing: 'linear',
      duration: 200,
    });
  }
</script>

<div
  id={`tech-${tech.name}`}
  class="p-2 px-4 flex flex-row gap-2 items-center bg-white rounded-full border-solid border-black border-2"
  on:mouseenter={onHoverEnter}
  on:mouseleave={onHoverExit}
>
  <Icon class="size-7" icon="devicon:{tech.iconifyLogo}" />
  {`${tech.name.slice(0, 1).toUpperCase()}${tech.name.slice(1)}`}
</div>
