export enum Visibility {
  Cloudy = 'Cloudy',
  Snowy = 'Snowy',
  Clear = 'Clear',
  Foggy = 'Foggy',
  Rainy = 'Rainy'
}

export enum Weather {
  // Tambien nos crea una constante, que podemos usar en tiempo de ejecucion "Runtime", y poder validar datos o usarlo en utils, etc. Con esto nos aseguramos de poder agregar datos en el futuro y no romper codigo, es decir, no crear codigo dependiente de otras partes.
  Sunny = 'sunny',
  Rainy = 'rainy',
  Snow = 'snow',
  Cloudy = 'cloudy',
  Snowy = 'snowy',
  Windy = 'windy'
}
