<script>
	
	import { todoStore } from './todo_store';

    
    let todos = undefined;
    todoStore.subscribe((data)=>{
      todos = data;


    })


	
</script>


<ul>

	{#each todos as todo}
	<li>{todo}</li>
	{/each}
	
</ul>