<script lang="ts">
    import Links from "../data/Links";
    import Icon from '@iconify/svelte';

</script>


<footer class="w-full h-auto text-md px-7 p-5 bg-black flex flex-col gap-2 lg:text-lg justify-left items-center lg:flex-row lg:justify-center lg:items-center lg:gap-0">
    <div class="w-full flex flex-col gap-2 lg:w-1/2 lg:max-w-[49rem]">
        <p class="text-md text-primary font-mono font-bold">@acmahaja</p>
        <p class="text-md text-white font-mono font-semibold">I'd love some feedback!</p>
        <div class="flex flex-row gap-3 items-center">
            {#each Links as Link}
                <a href="{Link.URL}" id={Link.name} class="size-6">
                    <Icon class="size-6" icon="{Link.icon}" color="white"/>
                </a>
            {/each}
        </div>
    </div>
    <p class="text-left text-white opacity-50 font-mono font-medium lg:text-right lg:w-1/2 lg:max-w-[49rem]">Designed in Figma and developed using Neovim. Built with Svelte and Tailwind CSS, deployed to Google App Engine. Design inspired by <a href="https://brittanychiang.com/" class=" underline underline-offset-2 block">Brittany Chiang</a></p>
</footer>
