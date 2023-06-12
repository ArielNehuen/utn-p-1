function calcularTotalCaracteres(palabras) {
    let totalCaracteres = 0;
  
    for (let i = 0; i < palabras.length; i++) {
      totalCaracteres += palabras[i].length;
    }
  
    return totalCaracteres;
  }
  
  const palabras = ["Hola", "mundo", "JavaScript"];
  const total = calcularTotalCaracteres(palabras);
  
  console.log("Cantidad total de caracteres:", total);