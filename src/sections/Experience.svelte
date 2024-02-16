<script lang="ts">
  import Experience from '../data/Experience';
  import moment from 'moment';
  import Icon from '@iconify/svelte';
</script>

<section
  id="expierience"
  class="w-full min-h-fit h-fit p-8 py-4 flex flex-col gap-4"
>
<hr
class="w-full h-[1.5px] border-none bg-gradient-to-r from-background  to-[#76726e]"
/>
  <h3 class="font-flex font-semibold text-2xl md:text-4xl md:font-semibold">
    Experience
  </h3>
  {#each Experience as Ex}
    <div
      class="max-w-xl bg-white p-2 flex flex-col gap-2 border-black border-2 rounded-lg"
    >
      <div class=" row-span-2 col-span-2">
        <p class="text-md font-medium">{`${Ex.role} · ${Ex.company}`}</p>
        <p class="text-sm font-light italic opacity-80">
          {moment(Ex.startDate).format('MMM YYYY')} - {moment(
            Ex.endDate
          ).format('MMM YYYY')}
        </p>
      </div>
      <p class="text-sm">
        {Ex.description}
      </p>
      {#if Ex.technologies.length > 0}
        <hr class="" />
        <div class="flex flex-row flex-wrap gap-2 py-1">
          {#each Ex.technologies as tech}
            <Icon class="size-8" icon="devicon:{tech}" />
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</section>
