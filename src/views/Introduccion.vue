<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.BG01.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col.col-11.mb-md-0
        p(data-aos="fade-down") El componente formativo orientado a la gestión de bases de datos constituye un pilar fundamental dentro del desarrollo de soluciones informáticas modernas, debido a la creciente necesidad de almacenar, procesar y analizar grandes volúmenes de información de manera eficiente, segura y estructurada. En este contexto, el manejo adecuado de gestores de bases de datos, tanto relacionales como no relacionales, se convierte en una competencia esencial para el desarrollo de sistemas robustos y escalables.
        p.mb-4(data-aos="fade-down") En primera instancia, se abordan los fundamentos relacionados con los gestores de bases de datos y la configuración del entorno, permitiendo comprender las características, diferencias y aplicaciones de los sistemas relacionales y NoSQL. Asimismo, se profundiza en los gestores transaccionales, destacando su importancia en entornos donde la integridad y consistencia de la información son críticas. Este componente también contempla los procesos de instalación y configuración, facilitando la preparación de entornos de trabajo adecuados para la administración de datos.
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Posteriormente, se desarrolla el estudio del lenguaje estructurado de consulta, conocido como SQL, el cual permite definir, manipular y consultar datos dentro de una base de datos. Se analizan sus características, componentes y estándares, así como los tipos de datos, restricciones y propiedades que garantizan la integridad de la información. De igual manera, se abordan las sentencias del lenguaje de definición de datos (DDL) y las restricciones de integridad, fundamentales para el diseño de estructuras coherentes y confiables.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p(data-aos="fade-down") En continuidad, se profundiza en la manipulación y consulta de datos mediante el uso del lenguaje de manipulación de datos (DML), integrando operaciones como inserción, actualización, eliminación y consulta. Se incluyen también operadores, funciones y consultas combinadas que permiten realizar análisis complejos sobre la información almacenada, optimizando el acceso y procesamiento de los datos.
        p.mb-4(data-aos="fade-down") Adicionalmente, se incorpora el estudio de las bases de datos NoSQL, destacando su relevancia en escenarios donde se requiere flexibilidad, escalabilidad y manejo de datos no estructurados. Se abordan conceptos, procesos de instalación, construcción de bases de datos y operaciones CRUD, así como el uso de índices para mejorar el rendimiento.
        .cajon.cajon.C01.color-primario.p-4.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-3.d-none.d-lg-block.order-lg-2.order-1
              figure
                img(src='@/assets/curso/intro/img02.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.order-lg-1.order-2
              p(data-aos="fade-down") Finalmente, el componente integra aspectos relacionados con la seguridad, pruebas y respaldo de bases de datos, abordando el lenguaje de control de datos (DCL), las estrategias de validación mediante pruebas y la gestión de copias de seguridad. Estos elementos garantizan la protección, disponibilidad e integridad de la información, consolidando buenas prácticas en la administración de sistemas de datos.
              p.mb-0(data-aos="fade-down") Este proceso formativo busca desarrollar competencias técnicas y analíticas que le permitan diseñar, implementar y administrar bases de datos de manera eficiente, contribuyendo al desarrollo de soluciones informáticas alineadas con las necesidades del entorno tecnológico actual.
    //- .row.justify-content-center.align-items-center.mb-0
    //-   .col.col-12
    //-     figure
    //-       .video
    //-         iframe(width="560" height="315" src="https://www.youtube.com/embed/DL5w_hyqA4w?si=HxS0hOaywnEm-l5v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
