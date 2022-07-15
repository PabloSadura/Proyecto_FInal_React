const profesionales = [
  {
    id: 1,
    nombre: "Carlos Perez",
    img: "../../src/img/men.jpg",
    localidad: "Ciudad de Buenos Aires, Argentina",
    rate: 3,
    especialidad: "Médico Clínico",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
    practica1: { practica: "Consultas en Consultorio", precio: 1000 },
    practica2: { practica: "Consultas en Pediatrica", precio: 1500 },
  },
  {
    id: 2,
    nombre: "Ana Juarez",
    localidad: "Santa Fe, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clínica",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
    practica1: { practica: "Consultas en Consultorio", precio: 1200 },
  },
  {
    id: 3,
    nombre: "Luis Gays",
    img: "../../src/img/men1.jpg",
    localidad: "Mendoza, Argentina",
    rate: 4,
    especialidad: "Médico Clínico",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
    practica1: { practica: "Consultas en Consultorio", precio: 1000 },
    practica2: { practica: "Consultas en General", precio: 1500 },
  },
  {
    id: 4,
    nombre: "Jose Gonzalez",
    localidad: "Cordoba, Argentina",
    img: "../../src/img/men.jpg",
    rate: 3,
    especialidad: "Médico Clínico",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
    practica1: { practica: "Consultas en Consultorio", precio: 1200 },
    practica2: { practica: "Consultas en Pediatrica", precio: 1500 },
  },
  {
    id: 5,
    nombre: "Pedro Lopez",
    localidad: "Mendoza, Argentina",
    img: "../../src/img/men1.jpg",
    rate: 4,
    especialidad: "Médico Oftalmologo",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "oftalmologia",
    cantidad: 1,
    precio: 1200,
    practica1: { practica: "Consultas en Consultorio", precio: 1200 },
    practica2: { practica: "Fondo de Ojo", precio: 2500 },
  },
  {
    id: 6,
    nombre: "Mariana Gimenez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clínica",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
    practica1: { practica: "Consultas en Consultorio", precio: 1200 },
    practica2: { practica: "Consultas en Pediatrica", precio: 1500 },
  },
  {
    id: 7,
    nombre: "Juan Castro",
    localidad: "Santa Fe, Argentina",
    img: "../../src/img/men.jpg",
    rate: 3,
    especialidad: "Otorrinolaringologo",
    descripcion:
      "El Otorrinolaringólogo es el médico especialista en el diagnóstico y tratamiento de las enfermedades que afectan al oído, nariz y garganta, incluyendo la voz, las glándulas salivales y el cuello. En este sentido el especialista en Otorrinolaringología y Patología de Cabeza y Cuello se encarga de llevar a término, entre otras, las pruebas de audición y exploraciones endoscópicas necesarias. Una vez establecido el diagnóstico el especialista recomienda el tratamiento médico correspondiente a la patología o, si el caso lo requiere, la intervención necesaria para su corrección.",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1000,
    practica1: { practica: "Consultas en Consultorio", precio: 1000 },
    practica2: { practica: "Otoscopia", precio: 3500 },
  },
  {
    id: 8,
    nombre: "Ana Casco",
    localidad: "Rosario, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Otorrinolaringologo",
    descripcion:
      "El Otorrinolaringólogo es el médico especialista en el diagnóstico y tratamiento de las enfermedades que afectan al oído, nariz y garganta, incluyendo la voz, las glándulas salivales y el cuello. En este sentido el especialista en Otorrinolaringología y Patología de Cabeza y Cuello se encarga de llevar a término, entre otras, las pruebas de audición y exploraciones endoscópicas necesarias. Una vez establecido el diagnóstico el especialista recomienda el tratamiento médico correspondiente a la patología o, si el caso lo requiere, la intervención necesaria para su corrección.",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1200,
    practica1: { practica: "Consultas en Consultorio", precio: 1000 },
    practica2: { practica: "Otoscopia", precio: 3500 },
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
    practica1: { practica: "Consultas en Consultorio", precio: 1000 },
    practica2: { practica: "Electrocardiograma", precio: 3500 },
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
    nombre: "Mariana Gimenez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Bioquímica",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dicta amet eum nesciunt temporibus modi voluptate consequuntur natus, molestiae harum.",
    categoria: "laboratorio",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 12,
    nombre: "Claudia Costa",
    localidad: "Cordoba, Argentina",
    img: "../../src/img/female.jpg",
    rate: 4,
    especialidad: "Médica Clínica",
    descripcion:
      "El médico clínico suele conocerse como el médico de cabecera de una persona adulta.Se caracteriza por atender personas de más de 15 años y por no realizar tratamientos quirúrgicos. Además puede desarrollar sus actividades asistenciales en un hospital, en un consultorio o en ambos, abarcando distintos niveles de complejidad, algunos llaman internista al clínico que se dedica exclusivamente a la atención hospitalaria. Esta atención es integral y esto nos diferencia de quienes ejercen subespecialidades ya que no nos dedicamos a una sola área de la medicina. Sabemos bastante de cada área a diferencia del subespecialista que sabe mucho de una solo tema.",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 13,
    nombre: "Esteban Reyes",
    localidad: "Rosario, Argentina",
    img: "../../src/img/men.jpg",
    rate: 4,
    especialidad: "Kinesiologo",
    descripcion:
      "EL PROFESIONAL ESTA CAPACITADO PARA: Ejercer en organismos asistenciales hospitalarios públicos y privados,  en instituciones educativas y deportivas. Indicar elementos complementarios que permitan el desarrollo del movimiento corporal humano. Programar, monitorear, ejecutar y evaluar tratamientos de rehabilitación en personas con discapacidad. Programar, monitorear y evaluar planes terapéuticos preventivos en instituciones de salud, educativas y deportivas, públicas y privadas. Planificar, organizar y  ejecutar  programas de promoción de la salud, prevención de enfermedades, control y rehabilitación de problemas de salud. ",
    categoria: "sesionesFkt",
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
