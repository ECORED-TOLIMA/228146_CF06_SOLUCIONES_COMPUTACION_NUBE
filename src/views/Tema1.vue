<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestores de bases de datos y configuración del entorno
    p.mb-4(data-aos="fade-down") Los gestores de bases de datos constituyen herramientas fundamentales en el desarrollo de sistemas de información, ya que permiten administrar, organizar y controlar grandes volúmenes de datos de manera estructurada. Su uso es esencial en aplicaciones modernas, donde la disponibilidad, integridad y seguridad de la información representan factores críticos para el funcionamiento de las organizaciones.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") Un gestor de base de datos, también conocido como DBMS (Database Management System), es un conjunto de programas que permiten crear, modificar, consultar y administrar bases de datos. Estos sistemas facilitan la interacción entre los usuarios y los datos, proporcionando mecanismos eficientes para su almacenamiento, recuperación y manipulación.
          p.mb-0(data-aos="fade-down") En la actualidad, existen diferentes tipos de gestores de bases de datos, los cuales se clasifican según su modelo de datos, su arquitectura y su propósito. Entre los más destacados se encuentran los gestores relacionales, los no relacionales y los transaccionales, cada uno con características específicas que los hacen adecuados para distintos contextos de aplicación.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-4(data-aos="fade-down") Asimismo, la correcta configuración del entorno de trabajo es un aspecto clave en la gestión de bases de datos, ya que garantiza el funcionamiento adecuado del sistema, optimiza el rendimiento y facilita la administración de los recursos. Este proceso incluye la instalación del gestor, la configuración de parámetros, la creación de usuarios y la definición de políticas de seguridad.
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") La elección del gestor de base de datos debe realizarse considerando factores como el tipo de aplicación, el volumen de datos, la escalabilidad requerida y el nivel de seguridad necesario.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Gestores de bases de datos relacionales y no relacionales
    p.mb-4(data-aos="fade-down") Los gestores de bases de datos pueden clasificarse principalmente en dos grandes categorías: relacionales y no relacionales. Esta clasificación responde a la forma en que los datos son estructurados, almacenados y gestionados dentro del sistema.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Gestores de bases de datos relacionales 
    p(data-aos="fade-down") Se basan en el modelo relacional, el cual organiza la información en tablas compuestas por filas y columnas. Cada tabla representa una entidad, mientras que las relaciones entre ellas se establecen mediante claves primarias y foráneas. Este enfoque permite garantizar la integridad y consistencia de los datos, siendo ampliamente utilizado en aplicaciones empresariales.
    p.mb-4(data-aos="fade-down") Entre las principales características de los sistemas relacionales se destacan:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Estructura basada en tablas
              p.text-center La información se organiza en tablas formadas por filas y columnas, donde cada tabla representa una entidad del sistema y facilita la organización lógica de los datos.
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Uso del lenguaje SQL para la manipulación de datos
              p.text-center Se utiliza SQL como lenguaje estándar para consultar, insertar, actualizar y eliminar información, permitiendo una interacción eficiente y controlada con las tablas.
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Integridad referencial
              p.text-center Se mantiene mediante claves primarias y foráneas, asegurando que las relaciones entre tablas sean coherentes y que no existan datos huérfanos o inconsistentes.
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Transacciones seguras
              p.text-center Permiten ejecutar operaciones de manera confiable, garantizando que los cambios se realicen completamente o se reviertan ante errores, preservando la estabilidad del sistema.
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Alta consistencia de datos
              p.text-center Asegura que la información almacenada sea precisa y coherente en todo momento, incluso cuando es utilizada simultáneamente por múltiples usuarios o aplicaciones.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Gestores de bases de datos no relacionales
    p(data-aos="fade-down") Conocidos como NoSQL, surgen como una alternativa para manejar grandes volúmenes de datos no estructurados o semiestructurados. Estos sistemas no utilizan tablas tradicionales, sino que emplean modelos como documentos, grafos, clave-valor o columnas.
    p.mb-4(data-aos="fade-down") Las principales características de los sistemas NoSQL incluyen:
    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Los sistemas relacionales priorizan la consistencia, mientras que los NoSQL priorizan la escalabilidad y el rendimiento.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Gestores de bases de datos transaccionales
    p(data-aos="fade-down") Los gestores de bases de datos transaccionales están diseñados para garantizar la ejecución segura y confiable de operaciones que involucran múltiples pasos. Estos sistemas se caracterizan por cumplir con las propiedades ACID, las cuales aseguran la integridad de las transacciones.
    p.mb-4(data-aos="fade-down") Las propiedades ACID son fundamentales para comprender el comportamiento de estos sistemas y representan lo siguiente:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C07.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img12.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Atomicidad
            p.mb-0(data-aos="fade-down") Garantiza que una transacción se complete totalmente o no se ejecute en absoluto.
          .col-xl.col-lg-6.tarjeta.tarjeta--C08.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img13.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Consistencia
            p.mb-0(data-aos="fade-down") Asegura que los datos permanezcan válidos antes y después de la transacción.
          .col-xl.col-lg-6.tarjeta.tarjeta--C09.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img14.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Aislamiento
            p.mb-0(data-aos="fade-down") Evita interferencias entre transacciones concurrentes.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img15.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Durabilidad
            p.mb-0(data-aos="fade-down") Garantiza que los datos persistan incluso ante fallos del sistema.
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Un fallo en la gestión transaccional puede generar inconsistencias graves en la información, afectando directamente la operación del sistema. 
    p.mb-4(data-aos="fade-down") Para comprender las diferencias y aplicaciones de los gestores de bases de datos previamente relacionados, resulta útil realizar una comparación sintética de sus características más relevantes. La siguiente tabla resume los aspectos clave de los gestores relacionales, no relacionales y transaccionales, destacando su estructura, enfoque funcional y principales contextos de uso:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Comparación de los principales tipos de gestores de bases de datos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de gestor
                th(data-aos="fade-down")(style= "width: 20%") Estructura y modelo de datos
                th(data-aos="fade-down")(style= "width: 20%") Características clave
                th(data-aos="fade-down")(style= "width: 20%") Enfoque principal
                th(data-aos="fade-down")(style= "width: 20%") Ejemplo de uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Gestores de bases de datos relacionales
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Modelo relacional basado en tablas (filas y columnas) con claves primarias y foráneas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Uso de SQL, integridad referencial, transacciones seguras, alta consistencia de datos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Organización estructurada y control riguroso de la información.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Sistemas administrativos y empresariales.
              tr
                td(data-aos="fade-down") Gestores de bases de datos no relacionales (NoSQL)
                td(data-aos="fade-down") Modelos flexibles: documentos, grafos, clave-valor o columnas.
                td(data-aos="fade-down") Alta escalabilidad horizontal, flexibilidad de datos, ausencia de esquemas rígidos, alto rendimiento.
                td(data-aos="fade-down") Manejo de grandes volúmenes de datos no estructurados o distribuidos.
                td(data-aos="fade-down") Plataformas <em>web</em>, redes sociales, análisis masivo de datos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Gestores de bases de datos transaccionales
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Estructuras orientadas a operaciones secuenciales y controladas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Cumplimiento de propiedades ACID: atomicidad, consistencia, aislamiento y durabilidad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Ejecución segura y confiable de transacciones críticas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Sistemas bancarios, financieros y comerciales.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Instalación y configuración de gestores de bases de datos
    p(data-aos="fade-down") La instalación y configuración de un gestor de bases de datos constituye un proceso fundamental para garantizar su correcto funcionamiento dentro de un entorno tecnológico. Este proceso permite preparar el sistema para almacenar, gestionar y proteger la información de manera eficiente.
    p.mb-4(data-aos="fade-down") Por lo anterior, para conocer este proceso de instalación y configuración, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WD26DBBxszM?si=dR52c4RrvZGPPEwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4.text-center(data-aos="fade-down") Además del procedimiento anterior, es recomendable implementar buenas prácticas como:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema1/img16.svg", alt="alt").img100.m-auto
          h4.text-center Realizar actualizaciones periódicas
          p Consiste en mantener el gestor de bases de datos y sus componentes en versiones actualizadas, corrigiendo vulnerabilidades, mejorando el rendimiento y asegurando compatibilidad con nuevas funcionalidades.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema1/img17.svg", alt="alt").img100.m-auto
          h4.text-center Configurar copias de seguridad automáticas
          p Implica programar respaldos regulares de la información para prevenir pérdidas de datos ante fallos del sistema, errores humanos o incidentes de seguridad.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema1/img18.svg", alt="alt").img100.m-auto
          h4.text-center Monitorear el rendimiento del sistema
          p Permite supervisar el uso de recursos, tiempos de respuesta y carga del servidor, facilitando la detección temprana de problemas y la optimización del desempeño.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema1/img19.svg", alt="alt").img100.m-auto
          h4.text-center Aplicar políticas de acceso restringido
          p Busca limitar el acceso a la base de datos según roles y responsabilidades, garantizando que solo usuarios autorizados puedan consultar o modificar la información.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") Basado en lo explicado en esta temática, la siguiente imagen presenta una visión general de la arquitectura de un sistema de gestión de bases de datos, mostrando la interacción entre usuarios o aplicaciones y el servidor de base de datos. En ella se comparan los enfoques relacional (RDBMS) y NoSQL, junto con elementos clave como usuarios, roles, puertos de conexión, seguridad y tipos de almacenamiento de la información:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Diagrama de casos de uso - Sistema de biblioteca
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/tema1/img20.svg', alt='Figura 1 que representa la arquitectura de un sistema gestor de bases de datos, donde un usuario o aplicación se conecta a un servidor de base de datos. Se diferencian dos tipos de almacenamiento: bases de datos relacionales organizadas en tablas con filas y columnas, y bases de datos NoSQL representadas mediante documentos, estructuras clave-valor y grafos. También se incluyen elementos de configuración como usuarios, puertos y seguridad.')
      .col-12
        figure.movil
          img.mb-4(src='@/assets/curso/tema1/img21.svg', alt='Figura 1 que representa la arquitectura de un sistema gestor de bases de datos, donde un usuario o aplicación se conecta a un servidor de base de datos. Se diferencian dos tipos de almacenamiento: bases de datos relacionales organizadas en tablas con filas y columnas, y bases de datos NoSQL representadas mediante documentos, estructuras clave-valor y grafos. También se incluyen elementos de configuración como usuarios, puertos y seguridad.')
        .col-auto.movil
          a.anexo.mb-0(:href="obtenerLink('/downloads/Figura01.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Figura 1. Diagrama de casos de uso - Sistema de biblioteca
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Alta escalabilidad horizontal',
        texto:
          'Permite aumentar la capacidad del sistema agregando más servidores o nodos, facilitando el manejo de grandes volúmenes de datos sin afectar el rendimiento.',
        imagen: require('@/assets/curso/tema1/img07.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Flexibilidad en la estructura de datos',
        texto:
          'Admite datos no estructurados o semiestructurados, permitiendo que los registros tengan diferentes formatos y evolucionen sin necesidad de redefinir la base de datos.',
        imagen: require('@/assets/curso/tema1/img08.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Alto rendimiento en grandes volúmenes de información',
        texto:
          'Optimiza el acceso y procesamiento de grandes cantidades de datos, ofreciendo respuestas rápidas incluso con cargas intensivas y alto número de consultas.',
        imagen: require('@/assets/curso/tema1/img09.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ausencia de esquemas rígidos',
        texto:
          'No exige una estructura fija previa, lo que posibilita almacenar información con diferentes atributos y adaptarse fácilmente a cambios en los requerimientos.',
        imagen: require('@/assets/curso/tema1/img10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Adaptabilidad a entornos distribuidos',
        texto:
          'Está diseñado para funcionar de forma eficiente en arquitecturas distribuidas, asegurando disponibilidad, tolerancia a fallos y acceso concurrente a los datos.',
        imagen: require('@/assets/curso/tema1/img11.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
