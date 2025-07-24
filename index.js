const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("❌ Faltan argumentos para registrar una cita.");
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log("❌ Operación no válida. Usa 'registrar' o 'leer'.");
}
