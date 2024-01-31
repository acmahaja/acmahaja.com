<script lang="ts">
    import Education from "../data/Education";
    import moment from 'moment';
    console.log(Education);

</script>

<section id="background" class="w-full min-h-fit h-fit p-8 py-4  flex flex-col gap-4">
    <h3 class="font-flex font-semibold text-3xl">Education</h3>
    {#each Education as Ed}
        <div class="bg-white p-2 grid grid-rows-3 gap-x-3 grid-flow-col items-center border-black border-2 rounded-lg">
            <img src={Ed.logoImg} alt={`${Ed.name} logo`} style={`background-color: ${Ed.brandColour};`}  class="p-3 row-span-3 rounded-lg aspect-square">
            <div class=" row-span-2 col-span-2">
                <p class="text-md font-medium">{Ed.name}</p>
                <p class="text-sm italic">{Ed.degree}</p>
            </div>
            <p class="row-span-1 col-span-2 text-sm font-light italic opacity-80">{moment(Ed.startDate).format("MMM YYYY")} - {moment(Ed.endDate).format("MMM YYYY")}</p>
        </div>
    {/each}
</section>