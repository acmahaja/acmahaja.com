<script lang="ts">
  import Education from '../data/Education';
  import moment from 'moment';
</script>

<section
  id="background"
  class="w-full max-w-[85%] min-h-fit h-fit p-8 py-4 flex flex-col gap-4"
>
  <hr
    class="w-full max-w-4xl h-[1.5px] border-none bg-gradient-to-r from-background  to-[#76726e]"
  />

  <h3 class="font-flex font-semibold text-2xl md:text-4xl md:font-semibold">
    Education
  </h3>
  {#each Education as Ed}
    <div
      class="w-full bg-white max-w-xl p-2 flex flex-row justify-start items-center gap-3 border-black border-2 rounded-lg"
    >
      <img
        src={Ed.logoImg}
        alt={`${Ed.name} logo`}
        style={`background-color: ${Ed.brandColour};`}
        class="p-3 mt-1 size-[25%] rounded-md aspect-square max-w-24 max-h-24"
      />
      <div
        class="flex flex-col items-start justify-start md:flex-row md:w-full md:justify-between md:items-center"
      >
        <div class="flex flex-col w-fit">
          <p class="text-md font-medium md:text-lg">{Ed.name}</p>
          <p class="text-sm italic md:text-md">{Ed.degree}</p>
        </div>
        <p
          class="w-fit text-sm font-light italic opacity-80 md:text-right md:pr-2"
        >
          {moment(Ed.startDate).format('MMM YYYY')} - {moment(
            Ed.endDate
          ).format('MMM YYYY')}
        </p>
      </div>
    </div>
  {/each}
</section>
