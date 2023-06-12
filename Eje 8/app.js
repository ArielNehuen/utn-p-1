function sumaEnteros() {
    let acumulador=0;
    for (let index=1; index <=100;index++){ acumulador += index;}
    return `La suma total del 1 al 100 es ${acumulador}`;
}
console.log(sumaEnteros());