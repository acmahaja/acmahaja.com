<script lang="ts">
    import Carousel from 'svelte-carousel';
    import images from '../data/Images';
</script>

<div id="PhotoCarousel" class="w-full min-h-fit bg-background font-flex font-medium border-solid border-black border-[1px] rounded-md flex flex-col 2xl:w-[55%]">
    <div id="PhotoCarousel" class=" h-fit border-solid size-8 p-2 w-full border-black border-b-[1px] px-3 bg-[#D3FF5C] flex items-center">
        <p class="font-mono bg-black text-white p-1 px-4 rounded-xl">Images</p>
    </div>
    <div class="m-2">

        <Carousel
        autoplay
        autoplayDuration={2000}
        let:loaded        >
            {#each images as src, imageIndex (src)}
                <div class="img-container z-10">
                {#if loaded.includes(imageIndex)}
                    <img {src} crossorigin="anonymous" class="z-10 aspect-square object-cover" alt="nature" />
                {/if}
                </div>
            {/each}
        </Carousel>

    </div>
</div>