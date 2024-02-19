<script lang="ts">
	import Icon from '@iconify/svelte';
	import anime from 'animejs/lib/anime';

	import type { TechnologyType } from '../types/Technologies';
	export let tech: TechnologyType;
	export let size: String = 'large';

	function onHoverEnter() {
		anime({
			targets: `#tech-${tech.iconifyLogo}`,
			translateX: 4,
			translateY: -4,
			autoplay: true,
			color: '#fff',
			background: `${tech.color}`,
			easing: 'linear',
			duration: 200,
			boxShadow: '-5px 5px black'
		});
		anime({
			targets: `#tech-${tech.iconifyLogo} > svg`,
			filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.8)) brightness(1.25)',
			easing: 'linear',
			duration: 200
		});
	}

	function onHoverExit() {
		anime({
			targets: `#tech-${tech.iconifyLogo}`,
			translateX: 0,
			translateY: 0,
			color: '#000',
			autoplay: true,
			background: '#fff',
			easing: 'linear',
			duration: 200,
			boxShadow: '0px 0px black'
		});
		anime({
			targets: `#tech-${tech.iconifyLogo} > svg`,
			filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0.8)) brightness(1)',
			easing: 'linear',
			duration: 200
		});
	}
</script>

<div
	id={`tech-${tech.iconifyLogo}`}
	class={size === 'large'
		? 'p-2 px-4 w-fit flex flex-row gap-2 items-center bg-white rounded-full border-solid border-black border-2 cursor-alias'
		: 'p-1 px-2 text-sm bg-green w-fit flex flex-row gap-2 items-center bg-white rounded-full border-solid border-black border-2 cursor-alias'}
	on:mouseenter={onHoverEnter}
	on:mouseleave={onHoverExit}
>
	<Icon class={size === 'large' ? 'size-7' : 'size-4'} icon="devicon:{tech.iconifyLogo}" />
	{`${tech.name.slice(0, 1).toUpperCase()}${tech.name.slice(1)}`}
</div>
