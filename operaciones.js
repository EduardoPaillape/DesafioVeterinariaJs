const fs = require("fs");

// Ruta al archivo JSON
const ruta = "./citas.json";

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  // Leer citas existentes
  const citas = JSON.parse(fs.readFileSync(ruta, "utf8"));
  citas.push(nuevaCita);

  // Guardar en el archivo
  fs.writeFileSync(ruta, JSON.stringify(citas, null, 2));
  console.log("✅ Cita registrada con éxito.");
};

// Función para leer todas las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync(ruta, "utf8"));
  console.log("📋 Citas registradas:");
  console.log(citas);
};

// Exportar funciones
module.exports = { registrar, leer };
