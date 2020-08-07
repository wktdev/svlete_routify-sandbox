

<script>
	import { todoStore } from "./todo_store";

	let name = "";
    function handleInput(event){
    	name = event.target.value;
    	console.log(name)
    }

    function addTodo(event){
        event.preventDefault();
        todoStore.update(todos => [...todos, name]);
        name = "";
    }

</script>


<form on:submit = {addTodo}>
	<input type="text" name="todo" on:change={handleInput} value = {name}>
	<input type="submit" name="submit-todo">
</form>

