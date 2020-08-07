


<script>
	import { onMount } from 'svelte';
	import {fetchData} from './GetData.svelte';

  // import Button from '@smui/button';

   let apiData = [];
   $:reactiveApiData = apiData;

   onMount(async () => {
   	let result = await fetchData("https://api.github.com/users/wktdev");
   	apiData = Object.values(result);

   })
  
</script>

<div>

    {#each reactiveApiData as item}
     <li>{item}</li>
    {/each}

</div>

 

