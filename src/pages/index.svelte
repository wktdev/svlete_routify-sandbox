<script>
	import { onMount } from 'svelte';
	import TodoList  from './todo_list.svelte';
	import Form from './Form.svelte';
	import {fetchData} from './GetData.svelte';
     

   let apiData = [];
   $:reactiveApiData = apiData;

   onMount(async () => {
   	let result = await fetchData("https://api.github.com/users/wktdev");
   	apiData = Object.values(result);

   })
  
</script>

<div>
	<Form/>
    <TodoList/>

    {#each reactiveApiData as item}
     <li>{item}</li>
    {/each}

</div>
