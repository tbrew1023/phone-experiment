<script>
	export let name; //prop

	import { fireFetch, firePost } from '../firebase';

	//let db = firebase.firestore();
	let people = []; //component state <data() { return { rando: null  }>

	function fetchTestData() {
		fireFetch('test-data', (docs) => {
			docs.forEach((doc) => {
				//people.push(doc.data());
				people = [...people, doc.data()];
			});
		});
	}
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={fetchTestData}>Fetch test data</button>
	<h3>{people}</h3>
	{#each people as person}
		<h4>{person.name}</h4>
	{/each}
</main>

<style type="text/scss">
	$color: blue;

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: $color;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>