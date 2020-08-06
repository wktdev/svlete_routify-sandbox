<script context="module">
	



	export async function fetchData(apiEndpoint){
		const res = await fetch(apiEndpoint);
		const data = await res.json();
		return data

	}


</script>



