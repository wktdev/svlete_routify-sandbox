<script>
	
	import { todoStore } from './_todo_store';

    
    let todos = undefined;
    todoStore.subscribe((data)=>{
     todos = data;

     console.log(todos)
    })


	
</script>


<ul>

	{#each todos as todo}
	<li>{todo}</li>
	{/each}
	
</ul>