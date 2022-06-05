const { performance } = require("perf_hooks");

function contar(n){
  for(let iteration = 0; iteration < n; iteration++){
    console.log(iteration);
  }
}

// let inicio = performance.now();
// contar(5);
// let final = performance.now();
// let tiempo = final - inicio;
// console.log(`Tiempo de ejecución: ${tiempo}`);


function medir(fn){
  return (n)=> {
    let inicio = performance.now();
    fn(n);
    let final = performance.now();
    let tiempo = final - inicio;
    console.log(`Tiempo de ejecución: ${tiempo}\n`);
    return tiempo;
  }
}

const test1 = medir(contar);
test1(4);

const test2 = medir(contar);
test2(8);
