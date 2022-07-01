const productos = [
  {
    id: 1,
    tipo: "Consulta",
    img: "./src/img/consultaMedica.jpg",
    nombre: "Consulta Clinica",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 2,
    tipo: "Consulta",
    img: "./src/img/consultaMedica.jpg",
    nombre: "Consulta Cardiologia",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 3,
    tipo: "Consulta",
    img: "./src/img/consultaMedica.jpg",
    nombre: "Consulta Gastroenterologia",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 4,
    tipo: "Consulta",
    img: "./src/img/consultaMedica.jpg",
    nombre: "Consulta Neurologia",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 5,
    tipo: "Consulta",
    img: "./src/img/consultaMedica.jpg",
    nombre: "Consulta Oftalmologia",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 6,
    tipo: "Imagenes",
    img: "./src/img/resonancia.jpg",
    nombre: "Resonancia de Hombros",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 7,
    tipo: "Imagenes",
    img: "./src/img/resonancia.jpg",
    nombre: "Resonancia de Cadera",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 8,
    tipo: "Imagenes",
    img: "./src/img/resonancia.jpg",
    nombre: "Resonancia de Manos",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 9,
    tipo: "Imagenes",
    img: "./src/img/resonancia.jpg",
    nombre: "Resonancia de Rodilla",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 10,
    tipo: "Imagenes",
    img: "./src/img/resonancia.jpg",
    nombre: "Resonancia de Pie",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 11,
    tipo: "Imagenes",
    img: "./src/img/doppler.jpg",
    nombre: "Ecografia de Partes Blandas",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 12,
    tipo: "Imagenes",
    img: "./src/img/doppler.jpg",
    nombre: "Ecografia de Abdomen",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 13,
    tipo: "Imagenes",
    img: "./src/img/radiografias.jpg",
    nombre: "Radiografias",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 14,
    tipo: "Imagenes",
    img: "./src/img/doppler.jpg",
    nombre: "Ecodopler Color",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 15,
    tipo: "Laboratorio",
    img: "./src/img/laboratorio.jpg",
    nombre: "Estudios de Rutina (hasta 10)",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 16,
    tipo: "Laboratorio",
    img: "./src/img/laboratorio.jpg",
    nombre: "Vitamina D",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 17,
    tipo: "Sesiones",
    img: "./src/img/fkt.jpg",
    nombre: "Fisiokinesioterapia",
    cantidad: 1,
    precio: "$1000 - $1500",
  },
  {
    id: 18,
    tipo: "Sesiones",
    img: "./src/img/sesionPsico.jpg",
    nombre: "Psicología",
    cantidad: 1,
    precio: "$1000 - $1500",
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
