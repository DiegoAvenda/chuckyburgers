<script>
	import diego from '$lib/images/diego.jpg';
	import Bag from '$lib/components/Bag.svelte';
	import { paraLlevar } from '$lib/utils/store';

	let bagItemsValue = [];
	let checkoutPrice = 0;

	$: {
		let value = 0;
		for (const item of bagItemsValue) {
			if (item.price === 0) {
				value += item.price * item.quantity;
			} else {
				value += item.salePrice * item.quantity;
			}
		}
		checkoutPrice = Math.round(value * 100) / 100;
	}

	const unsubscribe = paraLlevar.subscribe((value) => {
		bagItemsValue = value;
	});
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">CHUCKY BURGERS</a>
	</div>
	<div class="flex-1">
		<a href="/menu" class="btn btn-ghost normal-case text-xl">MENU</a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" for="indicator" class="btn btn-ghost btn-circle">
				<div id="indicator" class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/></svg
					>
					<span class="badge badge-sm indicator-item">{$paraLlevar.length}</span>
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				tabindex="0"
				class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
			>
				<div class="card-body">
					<Bag />
				</div>
			</div>
		</div>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" for="image" class="btn btn-ghost btn-circle avatar">
				<div id="image" class="w-10 rounded-full">
					<img alt="profile" src={diego} />
				</div>
			</label>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a href="/profile" class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a href="/settings">Settings</a></li>
				<li><a href="/logout">Logout</a></li>
			</ul>
		</div>
	</div>
</div>
