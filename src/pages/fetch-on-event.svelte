<script>
	import { onMount } from 'svelte';

	import {fetchData} from './_get_data.svelte';

  // import Button from '@smui/button';
   let apiData = [];
   $:reactiveApiData = apiData;


   async function getData(){
      let result = await fetchData("https://api.github.com/users/wktdev");
      apiData = Object.values(result);
   } 
  
</script>

<div>

    <button on:click = {getData}>CLICK ME </button>

    {#each reactiveApiData as item}
     <li>{item}</li>
    {/each}

</div>