const profesionales = [
  {
    id: 1,
    nombre: "Carlos Perez",
    rate: 3,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 2,
    nombre: "Ana Juarez",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 3,
    nombre: "Carlos Perez",
    rate: 3,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 4,
    nombre: "Jose Gonzalez",
    rate: 4.5,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 5,
    nombre: "Pedro Lopez",
    rate: 4.5,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 6,
    nombre: "Mariana Gimenez",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 7,
    nombre: "Juan Castro",
    rate: 3,
    especialidad: "Especialista en Otorrino",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 8,
    nombre: "Ana Casco",
    rate: 4.5,
    especialidad: "Especilista en Otorrino",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 9,
    nombre: "Luciano Alvarez",
    rate: 3,
    especialidad: "Cardiologo",
    categoria: "cardiologia",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 10,
    nombre: "Pablo Hernandez",
    rate: 4.5,
    especialidad: "Oftalmologo",
    categoria: "oftalmologia",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 11,
    nombre: "Instituto Allende",
    rate: 4.5,
    especialidad: "Imagenes",
    categoria: "resonancia",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 12,
    nombre: "Mariana Gimenez",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "laboratorio",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 12,
    nombre: "Claudia Costa",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "sesionesPsico",
    cantidad: 1,
    precio: 1200,
  },
];
export const gFetchProfesional = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(profesionales);
    } else {
      rej("Error");
    }
  }, 3000);
});
