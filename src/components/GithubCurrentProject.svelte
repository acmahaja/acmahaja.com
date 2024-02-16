<script lang="ts">
  import Icon from '@iconify/svelte';
  import anime  from "animejs/lib/anime";

  import type { GitHubEvent, Repo, Repository } from "../types/githubTypes";
  import { getLatestCommit, getLanguagesList, getRepoDetails} from "../utils/githubHelpers";
    let repo:Repository;
    let languages:string[];
    let topics:string[];

    getLatestCommit().then(async (result: GitHubEvent) => {
        await getRepoDetails(result.repo.name)
        .then((result:Repository) => {
            repo = result;
        });

        await getLanguagesList(result.repo.name).then((result:string[]) => {
            languages = result;
        });
    });

    function onHoverEnter() {
        anime({
            targets: `#currentProject`,
            translateX: 4,
            translateY: -4,
            autoplay: true,
            boxShadow: '-5px 5px black'

        })
    }

    function onHoverExit() {
        anime({
            targets: '#currentProject',
            translateX: 0,
            translateY: 0,
            color: '#000',
            autoplay: true,
            boxShadow: '0px 0px black'
        })
    }


</script>


{#if repo}
    <a href={`https://www.github.com/${repo.full_name}`} id="currentProject" on:mouseenter={onHoverEnter} on:mouseleave={onHoverExit} class="w-full min-h-fit bg-white p-3 font-flex font-medium border-solid border-black border-[1px] rounded-md flex flex-col gap-2 2xl:w-[43%]">
        <div class="flex flex-row justify-between items-center">
            <p class="">What am I currently working on?</p>
            <Icon class="size-8" icon="devicon:github" />
        </div>
        <hr class="">
        <p class="text-xl font-medium">{repo.name}</p>
        <p class=" line-clamp-3">{repo.description}</p>
        <hr class="">
        <div class="flex flex-row flex-wrap gap-2 py-1">
            {#each repo.topics as topic}
              <Icon class="size-8" icon="devicon:{topic}"/>
            {/each}
        </div>
    </a>
{:else}
    <img src="/loader.svg" alt="" srcset="">
{/if}
