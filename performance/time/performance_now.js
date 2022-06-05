const { Printer, Algoritmo } = require("../../class_algoritmo");

/* -------------- function to test ------------------------------------------------- */

const contar = function (n = 10000) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
};

const tangente = function (n = 1) {
	return Math.tan(n);
};


const performance_now_contar = new Algoritmo({
	nombre: "contar",
	descripcion: "numeros_de_1_a_n",
	codigo: contar,
});
// Printer(performance_now_contar.getAlgoritmo());
// Printer(performance_now_contar.execute_code());
// Printer(performance_now_contar.time_execution());

const performance_now_tangente = new Algoritmo({
	nombre: "tangente",
	descripcion: "tangente_de_n",
	codigo: tangente,
});
// Printer(performance_now_tangente.getAlgoritmo());
// Printer(performance_now_tangente.execute_code());
// Printer(performance_now_tangente.time_execution());

//|$|---------------------------------------------------------------------
// performance_now_contar.Get_full_info()
performance_now_tangente.Get_full_info()
