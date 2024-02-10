<script lang="ts">
    import Links from "../data/Links";
    import Icon from '@iconify/svelte';

</script>

<footer class="w-full h-auto px-5 p-5 bg-black flex flex-col gap-2">
    <p class="text-md text-primary font-mono font-bold">@acmahaja</p>
    <p class="text-md text-white font-mono font-semibold">I'd love some feedback!</p>
    <div class="flex flex-row gap-3 items-center">
        {#each Links as Link}
            <a href="{Link.URL}" id={Link.name} class="size-5">
                <Icon class="size-5" icon="{Link.icon}" color="white"/>
            </a>
        {/each}
    </div>
    <p class="text-sm text-white opacity-50 font-mono font-semibold">Designed in Figma and developed using Neovim. Built with Svelte and Tailwind CSS, deployed to Google App Engine. Design inspired by <a href="https://brittanychiang.com/" class=" underline underline-offset-2">Brittany Chiang</a></p>
</footer>