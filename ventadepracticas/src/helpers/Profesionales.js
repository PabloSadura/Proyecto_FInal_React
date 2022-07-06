const profesionales = [
  {
    id: 1,
    nombre: "Carlos Perez",
    img: "../../src/img/men.jpg",
    localidad: "Ciudad de Buenos Aires, Argentina",
    rate: 3,
    especialidad: "Médico Clinico",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 2,
    nombre: "Ana Juarez",
    localidad: "Santa Fe, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clinica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 3,
    nombre: "Luis Gays",
    img: "../../src/img/men1.jpg",
    localidad: "Mendoza, Argentina",
    rate: 4,
    especialidad: "Médico Clinico",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 4,
    nombre: "Jose Gonzalez",
    localidad: "Cordoba, Argentina",
    img: "../../src/img/men.jpg",
    rate: 3,
    especialidad: "Médico Clinico",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 5,
    nombre: "Pedro Lopez",
    localidad: "Mendoza, Argentina",
    img: "../../src/img/men1.jpg",
    rate: 4,
    especialidad: "Médico Clinico",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 6,
    nombre: "Mariana Gimenez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clinica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 7,
    nombre: "Juan Castro",
    localidad: "Santa Fe, Argentina",
    img: "../../src/img/men.jpg",
    rate: 3,
    especialidad: "Especialista en Otorrino",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 8,
    nombre: "Ana Casco",
    localidad: "Rosario, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Especilista en Otorrino",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 9,
    nombre: "Luciano Alvarez",
    localidad: "Pcia de Buenos Aires, Argentina",
    img: "../../src/img/men.jpg",
    rate: 3,
    especialidad: "Cardiologo",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "cardiologia",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 10,
    nombre: "Pablo Hernandez",
    localidad: "Bahia Blanca, Argentina",
    img: "../../src/img/men1.jpg",
    rate: 4,
    especialidad: "Oftalmologo",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "oftalmologia",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 11,
    nombre: "Instituto Allende",
    localidad: "MDQ, Argentina",
    img: "../../src/img/allende.jpg",
    rate: 4,
    especialidad: "Imagenes",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "resonancia",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 12,
    nombre: "Mariana Gimenez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clinica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "laboratorio",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 13,
    nombre: "Claudia Costa",
    localidad: "Cordoba, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clinica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "sesionesPsico",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 14,
    nombre: "Esteban Reyes",
    localidad: "Rosario, Argentina",
    img: "../../src/img/men.jpg",
    rate: 4,
    especialidad: "Médica Clinica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "sesionesFkt",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 15,
    nombre: "Laboratorio Avenida",
    localidad: "Rosario, Argentina",
    img: "../../src/img/laboratorios.jpg",
    rate: 4,
    especialidad: "Médica Clinica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "laboratorio",
    cantidad: 1,
    precio: 4200,
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
