<script lang="ts">
    import Experience from "../data/Experience";
    import moment from 'moment';
    console.log(Experience);
</script>

<section id="expierience" class="w-full min-h-fit h-fit p-8 py-4  flex flex-col gap-4">
    <h3 class="font-flex font-semibold text-3xl">Experience</h3>
    {#each Experience as Ex}
        <div class="bg-white p-2 flex flex-col border-black border-2 rounded-lg">
            <div class=" row-span-2 col-span-2">
                <p class="text-md font-medium">{`${Ex.role} · ${Ex.company}`}</p>
                <p class="text-sm font-light italic opacity-80">{moment(Ex.startDate).format("MMM YYYY")} - {moment(Ex.endDate).format("MMM YYYY")}</p>
            </div>
            <p>
                {Ex.description}
            </p>
        </div>
    {/each}
</section>
