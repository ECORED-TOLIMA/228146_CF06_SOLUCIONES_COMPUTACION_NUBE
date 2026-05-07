<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El estudio de los gestores de bases de datos, el lenguaje SQL, la manipulación de datos, las tecnologías NoSQL y las estrategias de seguridad permite comprender de manera integral el ciclo de vida de la información dentro de los sistemas informáticos.
    p A lo largo del desarrollo del contenido, se abordaron aspectos fundamentales que van desde la configuración del entorno hasta la administración avanzada de datos, integrando conocimientos técnicos y prácticos necesarios para el diseño e implementación de soluciones eficientes.
    p Asimismo, se destacó la importancia de seleccionar adecuadamente las tecnologías según el contexto, garantizando un equilibrio entre rendimiento, escalabilidad y seguridad. La integración de bases de datos relacionales y NoSQL permite responder a las demandas actuales del entorno digital, donde la información crece constantemente y requiere ser gestionada de manera eficiente.
    p.mb-0 Finalmente, la aplicación de buenas prácticas en seguridad, pruebas y respaldo consolida la confiabilidad de los sistemas, asegurando la protección de la información y la continuidad operativa. Este enfoque integral permite formar profesionales capaces de administrar datos de manera estratégica, contribuyendo al desarrollo de soluciones tecnológicas robustas y alineadas con las necesidades del entorno actual.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de manera progresiva los fundamentos de la gestión de bases de datos, iniciando con los gestores relacionales, no relacionales y transaccionales, así como su instalación y configuración. Se articula el lenguaje SQL para la definición, manipulación y consulta de datos, destacando tipos de datos, restricciones, operaciones DML, funciones, consultas combinadas y sentencias de agregación. Asimismo, se integra la gestión de bases de datos NoSQL, sus operaciones CRUD y mecanismos de consulta, finalizando con los aspectos de seguridad, pruebas y copias de seguridad, lo que permite comprender la relación entre los distintos temas y su aplicación coherente en la administración eficiente de la información.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
