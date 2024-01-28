<script lang="ts">
  import Arrow from "../components/Arrow.svelte";
  import Social from "../components/Social.svelte";
  import Links from "../data/Links";
  import Icon from '@iconify/svelte';
  import anime  from "animejs/lib/anime";

  function animateCVLinkHoverEnter() {
    anime({
            targets: '.CV-hover',
            translateX: 0,
            marginRight: 16,
        })
    anime({
      targets: '#CV-arrow',
            opacity: "100%",

    })
  }

  function animateCVLinkHoverExit() {
    anime({
            targets: '.CV-hover',
            translateX: -24,
            marginRight: 0,

        })
        anime({
      targets: '#CV-arrow',
            opacity: "0%",

    })  }
</script>

<header class="relative flex flex-col gap-5 w-full p-8 pb-14">
    <h1 class="font-flex text-black text-3xl font-bold">
        Hi, I'm Anjaney Mahajan
      </h1>
      <h2 class="font-flex text-black text-2xl font-medium">
        Graduate Software Engineer currently based in Melbourne, Australia.
      </h2>
      <p class="font-flex text-black text-2xl font-normal">Contact me!</p>
      <div class="contact-list flex flex-row justify-start items-center gap-4">
        {#each Links as Link}
          <Social socialLink={Link} />
        {/each}
      </div>
      <a on:mouseenter={animateCVLinkHoverEnter} on:mouseleave={animateCVLinkHoverExit} class="w-fit flex flex-row items-center font-flex text-black text-2xl font-semibold" href="/CV_Anjaney C Mahajan.pdf">
        <Icon id="CV-arrow"
          icon="mingcute:arrow-up-fill"
          rotate={1}
          class="CV-hover translate-x-[-24px] opacity-0" />

        <a href="/CV/CV_Anjaney_C_Mahajan.pdf" class="CV-hover translate-x-[-24px] underline underline-offset-2">
          Download my CV
        </a>
      </a>
      <Arrow />
</header>
