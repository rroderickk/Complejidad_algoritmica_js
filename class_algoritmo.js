const performance = require("perf_hooks");

/**
 * The function printer takes any number of arguments and prints them to the console.
 * @params p - The parameters passed to the function.
 * @p 1 -> The first parameter or void.
 * @p 2 -> The first parameter or void.
 */
const Printer = (...p) => console.log("\t", p?.[0] ?? "", "\t", p?.[1] ?? "");

/** It creates a class called Algoritmo.
 * @nombre nombre del algoritmo
 * @description nombre del algoritmo
 * @codigo nombre del algoritmo
 * */
class Algoritmo {
	constructor({ nombre, descripcion, codigo }) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.codigo = codigo;
	}

	/**
	 * A function that returns the
	 * @name, description and code of the algorithm. */
	getAlgoritmo = function () {
		return `
    \n----------------------------------\n
    \rName: ${this.nombre}
    \rDescription: ${this.descripcion}
    \n----------------------------------\n
    \rCode:--->\n${this.codigo}\n<---
    `;
	};

	/** A function that takes a
	 * @parameter @n and returns the
	 * @result of the * execution of the code.
	 * */
	execute_code = function (n) {
		console.log("[!] WARNING [!] Executing code 3..2..1..\n");
		if (!n) {
			const n = this.codigo ?? this.codigo();
			if (typeof n === "function") {
				return n();
			}
			return eval(n);
		}
		const execution = eval(this.codigo(n));
		return execution;
	};

	/**
	 * A function that takes a @function as a
	 * @parameter and returns the
	 * @time it takes to execute it.
	 **/
	time_execution = function (fn) {
		let inicio_tiempo = performance.performance.now();
		if (!fn) {
			const fn = () => this.execute_code(this.codigo);
			const final_tiempo = performance.performance.now();
			fn();
			const final = final_tiempo - inicio_tiempo;
			return `[t] TIME EXECUTION: ${final}ms!`;
		}
		fn;
		const final_tiempo = performance.performance.now();
		const final = final_tiempo - inicio_tiempo;
		return `[t] TIME EXECUTION: ${final}ms+`;
	};

	Get_full_info = function () {
		Printer(this.getAlgoritmo());
		Printer(this.execute_code());
		Printer(this.time_execution());
	};
}

module.exports = {
	Algoritmo,
	Printer,
};
