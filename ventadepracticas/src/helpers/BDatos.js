const productos = [
  {
    id: 1,
    tipo: "Consulta",
    nombre: "Consulta Clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 2,
    tipo: "Consulta",
    nombre: "Consulta Cardiologia",
    cantidad: 1,
    precio: 2000,
  },
  {
    id: 3,
    tipo: "Consulta",
    nombre: "Consulta Gastroenterologia",
    cantidad: 1,
    precio: 2000,
  },
  {
    id: 4,
    tipo: "Consulta",
    nombre: "Consulta Neurologia",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 5,
    tipo: "Consulta",
    nombre: "Consulta Oftalmologia",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 6,
    tipo: "Imagenes",
    nombre: "Resonancia de Hombros",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 7,
    tipo: "Imagenes",
    nombre: "Resonancia de Cadera",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 8,
    tipo: "Imagenes",
    nombre: "Resonancia de Manos",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 9,
    tipo: "Imagenes",
    nombre: "Resonancia de Rodilla",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 10,
    tipo: "Imagenes",
    nombre: "Resonancia de Pie",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 11,
    tipo: "Imagenes",
    nombre: "Ecografia de Partes Blandas",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 12,
    tipo: "Imagenes",
    nombre: "Ecografia de Abdomen",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 13,
    tipo: "Imagenes",
    nombre: "Radiografias",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 14,
    tipo: "Imagenes",
    nombre: "Ecodopler Color",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 15,
    tipo: "Laboratorio",
    nombre: "Estudios de Rutina (hasta 10)",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 16,
    tipo: "Laboratorio",
    nombre: "Vitamina D",
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 17,
    tipo: "Sesiones",
    nombre: "Fisiokinesioterapia",
    cantidad: 1,
    precio: 700,
  },
  {
    id: 18,
    tipo: "Sesiones",
    nombre: "Psicología",
    cantidad: 1,
    precio: 700,
  },
];

export const gFetch = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(productos);
    } else {
      rej("Error");
    }
  }, 3000);
});
