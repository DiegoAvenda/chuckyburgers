import { menu } from '$lib/utils/menu';

export function load() {
	return {
		platillos: menu.map((platillo) => ({
			nombre: platillo.nombre,
			imagen: platillo.imagen,
			precio: platillo.precio,
			ingredientes: platillo.precio
		}))
	};
}
