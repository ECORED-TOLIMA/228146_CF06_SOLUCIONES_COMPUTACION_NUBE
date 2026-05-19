<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<br><b> Objetivo:</b> evaluar el nivel de comprensión y aplicación de los conceptos relacionados con la gestión de bases de datos, el uso del lenguaje SQL, las tecnologías NoSQL y los principios de seguridad, mediante acciones que permitan evidenciar la capacidad para identificar, analizar y aplicar estos conocimientos en contextos prácticos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un gestor de bases de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un programa para diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema que permite almacenar, administrar y recuperar datos de forma organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un dispositivo físico de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Un gestor de bases de datos permite administrar información de forma estructurada y segura.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal característica de una base de datos relacional?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacena datos sin estructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utiliza tablas relacionadas mediante claves.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo permite datos en formato texto.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'No utiliza consultas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Las bases de datos relacionales organizan la información en tablas vinculadas entre sí.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué tipo de base de datos es NoSQL?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Base de datos basada en tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Base de datos no relacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Base de datos con lenguaje SQL obligatorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Base de datos solo numérica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Las bases NoSQL no utilizan estructuras relacionales tradicionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo de una base de datos transaccional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear gráficos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Gestionar operaciones seguras y consistentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar imágenes únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generar reportes automáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Las bases transaccionales garantizan integridad y consistencia en operaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué significa SQL?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Structured Query Language.', esCorrecta: true },
            { id: 'b', texto: 'System Query Language.', esCorrecta: false },
            { id: 'c', texto: 'Simple Query Logic.', esCorrecta: false },
            {
              id: 'd',
              texto: 'software Query Link.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! SQL es el lenguaje estándar para gestionar bases de datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál comando pertenece al DDL?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'SELECT', esCorrecta: false },
            { id: 'b', texto: 'INSERT', esCorrecta: false },
            { id: 'c', texto: 'CREATE', esCorrecta: true },
            { id: 'd', texto: 'UPDATE', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! CREATE permite definir estructuras de base de datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué hace el comando INSERT?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Elimina datos.', esCorrecta: false },
            { id: 'b', texto: 'Consulta datos.', esCorrecta: false },
            { id: 'c', texto: 'Inserta nuevos registros.', esCorrecta: true },
            { id: 'd', texto: 'Modifica tablas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! INSERT permite agregar nuevos datos en una tabla.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué restricción garantiza que no existan valores duplicados?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'FOREIGN KEY.', esCorrecta: false },
            { id: 'b', texto: 'UNIQUE.', esCorrecta: true },
            { id: 'c', texto: 'NULL.', esCorrecta: false },
            { id: 'd', texto: 'CHECK.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! UNIQUE asegura que los valores no se repitan.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál comando permite consultar datos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DELETE', esCorrecta: false },
            { id: 'b', texto: 'SELECT', esCorrecta: true },
            { id: 'c', texto: 'DROP', esCorrecta: false },
            { id: 'd', texto: 'ALTER', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! SELECT permite recuperar información almacenada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué operador se usa para comparar igualdad?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '!=', esCorrecta: false },
            { id: 'b', texto: '>', esCorrecta: false },
            { id: 'c', texto: '=', esCorrecta: true },
            { id: 'd', texto: '<', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! El operador "=" compara igualdad entre valores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es una función de agregación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'CONCAT.', esCorrecta: false },
            { id: 'b', texto: 'MAX.', esCorrecta: true },
            { id: 'c', texto: 'LOWER.', esCorrecta: false },
            { id: 'd', texto: 'SUBSTRING.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! MAX permite obtener el valor máximo de un conjunto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué hace GROUP BY?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ordena datos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Agrupa registros por columnas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Elimina duplicados.', esCorrecta: false },
            { id: 'd', texto: 'Inserta datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! GROUP BY agrupa datos para aplicar funciones agregadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué tipo de JOIN devuelve solo coincidencias?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'LEFT', esCorrecta: false },
            { id: 'b', texto: 'RIGHT', esCorrecta: false },
            { id: 'c', texto: 'INNER', esCorrecta: true },
            { id: 'd', texto: 'FULL', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! INNER JOIN devuelve solo registros coincidentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué significa CRUD en bases de datos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear, leer, actualizar y eliminar datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Copiar, restaurar, unir y dividir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear, reducir, usar y diseñar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar, revisar, usar y depurar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! CRUD representa las operaciones básicas sobre datos, lo que en inglés es Create, Read, Update, Delete.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué es un índice en una base de datos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un respaldo de datos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Una estructura que mejora la velocidad de búsqueda.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Una tabla secundaria.', esCorrecta: false },
            { id: 'd', texto: 'Un tipo de dato.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Los índices optimizan el acceso a la información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué comando pertenece al DCL?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'SELECT.', esCorrecta: false },
            { id: 'b', texto: 'GRANT.', esCorrecta: true },
            { id: 'c', texto: 'INSERT.', esCorrecta: false },
            { id: 'd', texto: 'CREATE.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Bien! GRANT permite otorgar permisos a usuarios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué permite REVOKE?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear tablas.', esCorrecta: false },
            { id: 'b', texto: 'Quitar permisos.', esCorrecta: true },
            { id: 'c', texto: 'Insertar datos.', esCorrecta: false },
            { id: 'd', texto: 'Consultar información.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! REVOKE elimina permisos previamente asignados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué es una copia de seguridad?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un archivo temporal.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Una copia de los datos para recuperación.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Un tipo de base de datos.', esCorrecta: false },
            { id: 'd', texto: 'Un índice.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Los respaldos permiten recuperar información ante fallos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué evalúan las pruebas de bases de datos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El diseño gráfico.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La integridad y funcionamiento de los datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El <em>hardware</em> del servidor.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El sistema operativo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Las pruebas validan la consistencia y calidad de los datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué ventaja tiene NoSQL frente a bases relacionales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Menor flexibilidad.', esCorrecta: false },
            { id: 'b', texto: 'Mayor rigidez.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Escalabilidad y manejo de grandes volúmenes de datos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Uso exclusivo de SQL.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha superado la actividad y demuestra sólidos conocimientos sobre bases de datos, SQL, NoSQL y seguridad de la información.',
          mensaje_incorrecto:
            'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
