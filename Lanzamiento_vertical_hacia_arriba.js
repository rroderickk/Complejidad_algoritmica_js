const { Lanzamiento_vertical_hacia_abajo, printer } = require("./_.js");

/**
 * It's a subclass of Lanzamiento_vertical_hacia_abajo that has a
 * different @getMax() method and a different x() method
 *  */
class Lanzamiento_vertical_hacia_arriba extends Lanzamiento_vertical_hacia_abajo {
	constructor(...props) {
		super(...props);
	}

	getMax = function () {
		return { tMax: yMax, yMax: tMax };
	};

	x = () => `${this.full_data()}  Tiempo máximo: ${this.getMax().tMax}`;
}

const lanzamiento4 = new Lanzamiento_vertical_hacia_arriba(
	(vf = 0),
	(vo = 30.5),
	(g = 9.8),
	(t = 10),
	(y = 5),
	(yMax = 8),
	(tMax = 9)
);

console.log("__LANZAMIENTO VERTICAL HACIA ARRIBA__\n");

printer("Vfinal", lanzamiento4.velocidad_final());

printer("sqrt[Vfinal]", lanzamiento4.cuadrado_de_la_velocidad_final());

printer("R", lanzamiento4.rapidez());

printer("getMAX", lanzamiento4.getMax());

printer("FullData:", lanzamiento4.x());
