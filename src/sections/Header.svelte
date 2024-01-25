<script lang="ts">
  import Social from "../components/Social.svelte";
  import Links from "../data/Links";
</script>

<header class="flex flex-col gap-5 w-full px-8 pt-8">
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
</header>