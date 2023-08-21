<script>
	import { paraLlevar, decreaseQuantity, removeProduct, addToBag } from '$lib/utils/store.js';

	let total = [];
	let checkoutPrice = 0;

	paraLlevar.subscribe((value) => {
		total = value;
	});
	console.log(total);
	$: {
		let value = 0;
		for (const item of total) {
			value += item.precio * item.quantity;
		}
		checkoutPrice = Math.round(value * 100) / 100;
	}

	/* total.forEach((x) => {
		let subSum = x.price * x.quantity;
		bigSum += subSum;
	}); */
</script>

<div>
	<h2 class="font-bold text-xl">Pedido</h2>
	<span class="font-bold text-lg">{$paraLlevar.length}</span>
	<span class="text-info">Subtotal: $999</span>
	<div class="card-actions">
		<button class="btn btn-primary btn-block">View cart</button>
	</div>

	{#if $paraLlevar.length === 0}
		<p>Your shopping bag is empty</p>
	{:else}
		<ul>
			{#each $paraLlevar as bagItem}
				<div class="flex mt-16 gap-2 border-b">
					<img class="w-16" src={bagItem.image} alt={bagItem.nombre} />
					<div>
						<p class="font-bold">{bagItem.nombre}</p>

						<button on:click={addToBag(bagItem)} class="bg-black text-white px-1.5">+</button>
						<button on:click={decreaseQuantity(bagItem)} class="bg-black text-white px-1.5"
							>-</button
						>
						<button
							on:click={removeProduct(bagItem)}
							class="text-[#767676] underline decoration-[#767676]">Remove</button
						>
						<div class="flex justify-between">
							<p class="text-[#767676]">Qty {bagItem.quantity}</p>
							<p class="font-bold ml-28 text-[#333333]">${bagItem.price}</p>
						</div>
					</div>
				</div>
			{/each}
		</ul>
		<p>TOTAL: {checkoutPrice}</p>
		<div class="flex justify-center">
			<button class="mt-16 py-2 px-14 bg-black text-white">Checkout</button>
		</div>
	{/if}
</div>
