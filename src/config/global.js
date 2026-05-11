export default {
  global: {
    Name: 'Gestión de bases de datos relacionales y NoSQL',
    Description:
      'El componente formativo aborda integralmente la gestión de bases de datos, incluyendo gestores relacionales y NoSQL, configuración de entornos y uso de SQL para definir, manipular y consultar datos. Profundiza en operaciones DML, consultas avanzadas, integración de información y bases NoSQL, además de seguridad, pruebas y respaldo para garantizar integridad, disponibilidad y confiabilidad de los datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestores de bases de datos y configuración del entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestores de bases de datos relacionales y no relacionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestores de bases de datos transaccionales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Instalación y configuración de gestores de bases de datos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lenguaje estructurado de consulta (SQL)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características, componentes y estándares de SQL',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de datos, restricciones y propiedades de los datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lenguaje de definición de datos (DDL)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Restricciones de integridad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manipulación y consulta de datos con SQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Lenguaje de manipulación de datos (DML)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Operadores de comparación, aritméticos y lógicos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Funciones de cadena, matemáticas, fecha-hora y del sistema',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Consultas combinadas (JOIN)',
            hash: 't_3_4',
          },
          { numero: '3.5', titulo: 'Sentencias de agregación', hash: 't_3_5' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de bases de datos NoSQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos de gestores NoSQL',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Instalación y configuración de bases de datos NoSQL',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Construcción de bases de datos NoSQL',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Operaciones CRUD, consultas e índices',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad, pruebas y respaldo de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Lenguaje de control de datos (DCL): GRANT y REVOKE',
            hash: 't_5_1',
          },
          { numero: '5.2', titulo: 'Pruebas de bases de datos', hash: 't_5_2' },
          {
            numero: '5.3',
            titulo:
              'Gestión de copias de seguridad: exportación e importación de bases de datos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA6_228146_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>Backup</em>',
      significado:
        'copia de seguridad de la información que permite su recuperación en caso de pérdida o fallo del sistema.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto organizado de información que se almacena y gestiona de manera estructurada para facilitar su acceso y manipulación.',
    },
    {
      termino: 'Clave foránea',
      significado:
        'campo que establece una relación entre tablas dentro de una base de datos.',
    },
    {
      termino: 'Clave primaria',
      significado:
        'campo que identifica de manera única cada registro dentro de una tabla.',
    },
    {
      termino: 'DBMS',
      significado:
        'sistema de gestión de bases de datos que permite crear, administrar y consultar información de manera eficiente.',
    },
    {
      termino: 'DDL',
      significado:
        'lenguaje de definición de datos utilizado para crear y modificar la estructura de una base de datos.',
    },
    {
      termino: 'DML',
      significado:
        'lenguaje de manipulación de datos que permite insertar, actualizar, eliminar y consultar información.',
    },
    {
      termino: 'Índice',
      significado:
        'estructura que mejora la velocidad de búsqueda y recuperación de datos en una base de datos.',
    },
    {
      termino: 'NoSQL',
      significado:
        'tipo de base de datos que permite almacenar datos no estructurados o semiestructurados con alta escalabilidad.',
    },
    {
      termino: 'SQL',
      significado:
        'lenguaje estructurado de consulta utilizado para gestionar y manipular bases de datos relacionales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cormen, T. H., Leiserson, C. E., Rivest, R. L. & Stein, C. (2022). <em>Introduction to Algorithms</em> (4th ed.). MIT Press.',
      link: '',
    },
    {
      referencia:
        'GeeksforGeeks. (s.f.). <em>Database Management System Tutorial</em>.',
      link: 'https://www.geeksforgeeks.org/dbms/',
    },
    {
      referencia: 'IBM. (s.f.). <em>What is NoSQL?</em>',
      link: 'https://www.ibm.com/topics/nosql-databases',
    },
    {
      referencia: 'Microsoft. (s.f.). <em>SQL Server Documentation</em>.',
      link: 'https://learn.microsoft.com/sql/',
    },
    {
      referencia: 'MongoDB Inc. (s.f.). <em>MongoDB Manual</em>.',
      link: 'https://www.mongodb.com/docs/',
    },
    {
      referencia: 'MySQL. (s.f.). <em>MySQL Reference Manual</em>.',
      link: 'https://dev.mysql.com/doc/',
    },
    {
      referencia: 'Oracle. (s.f.). <em>Oracle Database Documentation</em>.',
      link: 'https://docs.oracle.com/en/database/oracle/oracle-database/',
    },
    {
      referencia:
        'PostgreSQL Global Development Group. (s.f.). <em>PostgreSQL Documentation</em>.',
      link: 'https://www.postgresql.org/docs/',
    },
    {
      referencia: 'W3Schools. (s.f.). <em>SQL Tutorial</em>.',
      link: 'https://www.w3schools.com/sql/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
