<div>Fetch Data</div>




<!-- Notes_______

Create AJAX spinner code

END NOTEs -->



<script>
	import { onMount } from 'svelte';
	import TodoList  from './TodoList.svelte';
	import Form from './form.svelte';
	import {fetchData} from './GetData.svelte';
  

    let apiData = [];
    $:reactiveApiData = apiData;

   
   	async function getData(){
   	   let result = await fetchData("https://api.github.com/users/wktdev");
   	   apiData = Object.values(result);
   	}
   
  
</script>

<div>
    <div on:click={getData}>Click me</div>

    {#each reactiveApiData as item}
     <li>{item}</li>
    {/each}

</div>

 
