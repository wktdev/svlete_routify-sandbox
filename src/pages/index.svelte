<script>
	import { onMount } from 'svelte';
	import TodoList  from './todo_list.svelte';
	import Form from './Form.svelte';
	import {fetchData} from './GetData.svelte';
  import Navigation from './_components/Navigation.svelte';
     
  // import Button from '@smui/button';

   let apiData = [];
   $:reactiveApiData = apiData;

   onMount(async () => {
   	let result = await fetchData("https://api.github.com/users/wktdev");
   	apiData = Object.values(result);

   })
  
</script>

<div>
  <Navigation/>
	  <Form/>
    <TodoList/>

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
