function regresar_puntos(coords, distanciamin) {
    let resultado = [];
    let origen = { x: 0, y: 0 };
    for (let i = 0; i < coords.length; i++) {
      let xf = coords[i][0] - origen.x;
      let yf = coords[i][1] - origen.y;
      let distancia = Math.sqrt(xf * xf + yf * yf);
  
      if (distancia <= distanciamin) {
        resultado.push(coords[i]);
      }
    }
    return resultado;
  }
  
  let coordenadas = [[2, 4], [1, -1], [-10, 5], [-10, -2], [3, 3], [10, 0]];
  let distanciamin = 5;
  let result = regresar_puntos(coordenadas, distanciamin);
  console.log(`las coordenadas con distancia igual o menor a ${distanciamin}: `, result);