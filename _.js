/**
 * The function @printer takes any number of arguments and prints them to the console.
 * @param p - The parameters passed to the function.
 */
const printer =(...p)=> console.log("\t",p[0],"\t",p[1]);
/* ----------------------------------------------------------------------------------- */


/**
 * This class is used to calculate the * @final velocity, the
 * @square of the final velocity, and the
 * @speed of an object that is thrown 
 * @vertically downwards.
 **/
class Lanzamiento_vertical_hacia_abajo {
  constructor(vf=0, vo=0, g=0, t=0, y=0) {
    this.vf = vf;                                         //? velocidad final
    this.vo = vo;                                         //? velocidad inicial
    this.g = g;                                           //? gravedad
    this.t = t;                                           //? tiempo
    this.y = y;                                           //? altura

    /* A function that calculates the final velocity. */
    this.velocidad_final = function(){
      return this.vf = this.vo + (this.g * this.t)
    }

    /* Calculating the square of the final velocity. */
    this.cuadrado_de_la_velocidad_final = function(){
      return Math.sqrt((this.vo**2) + (2 * this.g * this.y))
    }

    /* Calculating the speed of the object. */
    this.rapidez = function(){
      return (this.vo * this.t) + (1/2 * this.g * this.t**2)
    }
  }
  full_data(){
    return `
      Velocidad inicial: ${this.vo}
      Velocidad final: ${this.vf}
      Gravedad: ${this.g}
      Tiempo: ${this.t}
      Altura: ${this.y}
      Rapidez: ${this.rapidez()}
      Velocidad final: ${this.cuadrado_de_la_velocidad_final()}
    `
  }
};



/** Example1:
 * Creating a new instance of the class * @Lanzamiento vertical hacia abajo. and printing 
 * @velocidad final
 * @cuadrado de la velocidad final
 * @rapidez
 * */
const lanzamiento1 = new Lanzamiento_vertical_hacia_abajo(vf=0, vo=30.5, g=9.8, t=3);

console.log("__LANZAMIENTO VERTICAL HACIA ABAJO__");
console.log("EXAMPLE[1]:");

printer("Vfinal", lanzamiento1.velocidad_final());                       ////-> 59.9

printer("sqrt[Vfinal]", lanzamiento1.cuadrado_de_la_velocidad_final());  ////-> 59.9

printer("R", lanzamiento1.rapidez());                                    ////-> 135.6

printer("FULL DATA:", lanzamiento1.full_data());                                    ////-> 135.6




/* Creating a new instance of the class `Lanzamiento_vertical_hacia_abajo` and assigning it to the
variable `lanzamiento2`. */
const lanzamiento2 = new Lanzamiento_vertical_hacia_abajo(vf=0, vo=30.5, g=9.8, t=10);

console.log("EXAMPLE[2]:");

printer("Vfinal", lanzamiento2.velocidad_final());

printer("sqrt[Vfinal]", lanzamiento2.cuadrado_de_la_velocidad_final());

printer("R", lanzamiento2.rapidez());




/* Creating a new instance of the class `Lanzamiento_vertical_hacia_abajo` and assigning it to the
variable `lanzamiento3`. */
const lanzamiento3 = new Lanzamiento_vertical_hacia_abajo(vf=0, vo=30.5, g=9.8, t=10, y=5);

console.log("EXAMPLE[3]:");

printer("Vfinal", lanzamiento3.velocidad_final());

printer("sqrt[Vfinal]", lanzamiento3.cuadrado_de_la_velocidad_final());

printer("R", lanzamiento3.rapidez());




/* Exporting the class `Lanzamiento_vertical_hacia_abajo` and the function `printer` to the file
`index.js`. */
module.exports = {
  Lanzamiento_vertical_hacia_abajo,
  printer,
}