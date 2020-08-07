<script>
	import { onMount } from 'svelte';

	import {fetchData} from './_get_data.svelte';

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

<!--  <script>
  import Navigation from './_components/Navigation.svelte';
</script>
<div>
  <Navigation/>
</div> -->