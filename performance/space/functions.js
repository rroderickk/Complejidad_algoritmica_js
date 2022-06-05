/**
 * Complejidad @Temporal -> O( n + 3 ) ->   R-> O( n )
 * Complejidad @Espacial -> O( n + 1 ) ->   R-> O( n )
 * @Espacio Auxiliar = @Espacial - @Espacio de entrada -> O( n ) - O( 1 ) 
 * Descartando la complejidad espacial:     R -> O( 1 )
 */
function linearSearch(array, key) {
	for (let index = 0; index < array.length; index++) { //!-> O(n)
		if (array[index] === key) {                        //-> O(1)
			return index;                                    //-> O(1)
		}
	}
	return -1; //-> O(1)
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));




/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
function factorial(numero) {
  let resultado = 1;

  for (let i = 2; i <= numero; i += 1) {
    resultado *= i;
  }

  return resultado;
}




/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function fibonacci(numero) {
  const secuenciaFibonacci = [1];

  let valorPrevio = 0;
  let valorActual = 1;

  if (numero === 1) {
    return secuenciaFibonacci;
  }

  let i = numero - 1;

  while (i) {
    valorActual += valorPrevio;
    valorPrevio = valorActual - valorPrevio;
    secuenciaFibonacci.push(valorActual);
    i -= 1;
  }

  return secuenciaFibonacci;
}




/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  let numeroDividido = n;
  while (numeroDividido !== 1) {
    if (numeroDividido % 2 !== 0) {
      return false;
    }
    numeroDividido = numeroDividido / 2;
  }

  return true;
}




/**
 * Complejidad @Temporal -> O( 1 + n * n + 1 + 1 + 1 + 1 + 1 )
 *                     R-> O( n * n + 6 ) ->           R-> O( n^2 )
 * 
 * Complejidad @Espacial -> O( n + 4 ) ->              R-> O( n )
 * Espacio Auxiliar -> O( n + 4 ) ->  R-> O( 4 ) ->    R-> O( 1 )
 */
function bubbleSort(arreglo) {
  let longitud = arreglo.length;            //-> O(1)
  for (let i = 0; i < longitud; i++) {      //!-> O(n)
    for (let j = 0; j < longitud; j++) {    //!-> O(n)
      if (arreglo[j] > arreglo[j + 1]) {    //-> O(1)
        let temporal = arreglo[j];          //-> O(1)
        arreglo[j] = arreglo[j + 1];        //-> O(1)
        arreglo[j + 1] = temporal;          //-> O(1)
      }
    }
  }
  return arreglo;                           //-> O(1)
}



/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function primalidadTest(numero) {

  if (numero <= 3) {
    return true;
  }

  if (numero % 1 !== 0) {
    return false;
  }

  if (numero <= 1) {
    return false;
  }

  if (numero % 2 === 0) {
    return false;
  }

  const limiteDivisor = Math.sqrt(numero);
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}


/**
 * Complejidad Temporal                   R-> O( n^2 )
 * Complejidad Espacial -> O( n + 5 ) ->  R-> O( n )
 * Espacio Auxiliar -> O( 5 ) ->          R-> O( 1 )
 */
function selectionSort(arreglo) {
  let longitud = arreglo.length;                //-> O(1)

  for (let i = 0; i < longitud; i++) {          //!-> O(n)
    let minimo = i;                             //-> O(1)
    for (let j = i + 1; j < longitud; j++) {    //!-> O(n)
      if (arreglo[j] < arreglo[minimo]) {       //-> O(1)
        minimo = j;                             //-> O(1)
      }
    }
    if (minimo != i) {                          //-> O(1)
      let temporal = arreglo[i];                //-> O(1)
      arreglo[i] = arreglo[minimo];             //-> O(1)
      arreglo[minimo] = temporal;               //-> O(1)
    }
  }
  return arreglo;                                //-> O(1)
}