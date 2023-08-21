import { menu } from '$lib/utils/menu';

export function load() {
	return {
		platillos: menu.map((platillo) => ({
			nombre: platillo.nombre,
			image: platillo.image,
			precio: platillo.precio,
			ingredientes: platillo.precio
		}))
	};
}
