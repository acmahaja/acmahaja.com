<script lang="ts">
    import Education from "../data/Education";
    import moment from 'moment';

</script>

<section id="background" class="w-full min-h-fit h-fit p-8 py-4  flex flex-col gap-4">
    <h3 class="font-flex font-semibold text-2xl">Education</h3>
    {#each Education as Ed}
        <div class="bg-white p-2 flex flex-row justify-start items-start gap-2 border-black border-2 rounded-lg">
            <img src={Ed.logoImg} alt={`${Ed.name} logo`} style={`background-color: ${Ed.brandColour};`}  class="p-3 mt-1 size-[25%] aspect-square rounded-md">
            <div class=" ">
                <p class="text-md font-medium">{Ed.name}</p>
                <p class="text-sm italic">{Ed.degree}</p>
                <p class="row-span-1 col-span-3 text-sm font-light italic opacity-80">{moment(Ed.startDate).format("MMM YYYY")} - {moment(Ed.endDate).format("MMM YYYY")}</p>
            </div>
        </div>
    {/each}
</section>