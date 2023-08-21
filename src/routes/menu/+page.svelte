<script>
	import { addToBag } from '$lib/utils/store';

	export let data;
</script>

<div class="flex justify-center my-3">
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.platillos as platillo}
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure class="px-10 pt-10">
					<img src={platillo.image} alt={platillo.nombre} class="rounded-xl h-40" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">{platillo.nombre}</h2>
					<p>${platillo.precio}</p>
					<div class="card-actions">
						<button on:click={addToBag(platillo)} class="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
