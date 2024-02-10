<script lang="ts">
  import AboutMe from "../components/AboutMe.svelte";
  import GithubCurrentProject from "../components/GithubCurrentProject.svelte";
    import PhotoCarousel from "../components/PhotoCarousel.svelte";
</script>

<section id="about" class="green-gradient w-full min-h-80 h-fit px-8 pt-14 gap-3 lg:pt-8">
    <div id="browser" class="w-full h-fit border-solid border-black border-[1px] rounded-lg bg-green">
        <div id="AboutTitlebar" class="border-solid size-10 w-full border-black border-b-[1px] px-3 flex flex-row justify-start items-center gap-x-3">
            <div class="circleButton size-4 opacity-30 bg-black rounded-full"></div>
            <div class="circleButton size-4 opacity-30 bg-black rounded-full"></div>
            <div class="circleButton size-4 opacity-30 bg-black rounded-full"></div>
        </div>
        <div id="descriptionList" class="p-3 flex flex-col gap-4 lg:h-[35.5rem] lg:flex lg:flex-col lg:flex-wrap lg:gap-x-0">
            <GithubCurrentProject />
            <AboutMe />
            <PhotoCarousel />
        </div>
    </div>
</section>