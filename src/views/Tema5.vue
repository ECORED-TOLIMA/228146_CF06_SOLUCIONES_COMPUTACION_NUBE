<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Seguridad, pruebas y respaldo de bases de datos
    p.mb-4(data-aos="fade-down") La seguridad, las pruebas y el respaldo de bases de datos constituyen componentes críticos en la administración de la información, ya que garantizan la protección, confiabilidad y disponibilidad de los datos dentro de un sistema. En un entorno donde la información es uno de los activos más valiosos, la implementación de estrategias adecuadas en estos aspectos resulta indispensable para prevenir pérdidas, accesos no autorizados y fallos en el sistema.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0 La gestión adecuada de la seguridad permite controlar quién accede a los datos y qué acciones puede realizar, mientras que las pruebas aseguran la correcta estructura y funcionamiento de la base de datos. Por su parte, los mecanismos de respaldo permiten recuperar la información ante fallos, errores humanos o ataques informáticos.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img01.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-8.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") La ausencia de políticas de seguridad y respaldo puede generar pérdidas irreversibles de información. 
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Lenguaje de control de datos (DCL): GRANT y REVOKE
    p(data-aos="fade-down") La gestión de usuarios y permisos es un componente esencial de la seguridad en las bases de datos, ya que permite controlar quién puede acceder a la información y qué acciones puede realizar dentro del sistema. Mediante estos mecanismos se protege la integridad, confidencialidad y disponibilidad de los datos, especialmente en entornos multiusuario.
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales sentencias utilizadas para administrar permisos en SQL con sus respectivos ejemplos aplicados, las cuales permiten asignar o retirar privilegios sobre objetos de la base de datos de forma controlada y segura:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C02.px-4.py-3.h-100.w-100
          .row.justify-content-center.mb-4
            .col.col-12
              .row.align-items-center(data-aos="flip-down")
                .col-auto.pe-0(style="z-index:2")
                  figure
                    img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
                .col-lg-auto.col-9.titulo01(style="z-index:1")
                  .p-2
                    h3.mb-0.ms-lg-2.ms-md-3.ms-1 GRANT
          p.mb-4(data-aos="fade-down") La sentencia GRANT se utiliza para otorgar permisos específicos a usuarios o roles, permitiéndoles realizar acciones como consultar, insertar, actualizar o eliminar datos sobre tablas, vistas u otros objetos de la base de datos. Su uso adecuado facilita el acceso controlado según las responsabilidades de cada usuario.
          .cajon.C08.p-4.mb-0
            p.mb-0 GRANT SELECT, INSERT ON clientes TO usuario1;
      .col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img02.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 REVOKE
        p.mb-4(data-aos="fade-down") La sentencia REVOKE permite retirar permisos previamente concedidos, limitando o eliminando el acceso de un usuario a determinados recursos. Esta instrucción es fundamental para mantener la seguridad cuando cambian los roles, se detectan riesgos o ya no es necesario conservar ciertos privilegios.
        .cajon.C08.p-4.mb-4
          p.mb-0 REVOKE INSERT ON clientes FROM usuario1; 
        p.mb-0(data-aos="fade-down") De acuerdo a los tipos de permisos se encuentran:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img03.svg' alt='AvatarTop')
        h4.text-center SELECT
        p.text-center(data-aos="fade-down") Consultar datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img04.svg' alt='AvatarTop')
        h4.text-center INSERT
        p.text-center(data-aos="fade-down") Insertar registros.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img05.svg' alt='AvatarTop')
        h4.text-center UPDATE
        p.text-center(data-aos="fade-down") Modificar datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img06.svg' alt='AvatarTop')
        h4.text-center DELETE
        p.text-center(data-aos="fade-down") Eliminar registros.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img07.svg' alt='AvatarTop')
        h4.text-center ALL PRIVILEGES
        p.text-center(data-aos="fade-down") Acceso total.
    .row.justify-content-center.mb-0
      .col-lg-8.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Un mal manejo de permisos puede comprometer la seguridad de toda la base de datos.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Pruebas de bases de datos
    p(data-aos="fade-down") Las pruebas de bases de datos constituyen una etapa fundamental para asegurar el correcto funcionamiento de los sistemas de información, ya que permiten verificar que la estructura, los datos y las relaciones definidas respondan a los requerimientos funcionales y normativos del sistema. A través de estas pruebas se minimizan errores, se previenen inconsistencias y se garantiza la confiabilidad de la información almacenada.
    p.mb-4(data-aos="fade-down") A continuación, se abordarán los principales tipos de pruebas aplicadas a bases de datos, enfocadas en la validación de la definición de estructuras, la calidad de los datos y la coherencia de las relaciones, proporcionando una visión integral del control y aseguramiento de la información:
    .tarjeta.tarjeta--BG04.p-md-5.p-4.mb-4(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Pruebas de <em>scripts</em> de definición
            p Estas pruebas se centran en verificar que los <em>scripts</em> utilizados para crear y modificar la base de datos se ejecuten correctamente y sin errores. Evalúan la correcta definición de tablas, campos, tipos de datos, claves primarias, claves foráneas y restricciones, asegurando que la estructura de la base de datos se ajuste al diseño establecido.
            p Acciones:
            .cajon.cajon.C09.px-4.py-3.mb-0
              ul.lista-ul
                li.mb-0(style="color: #FFD453")
                  i.lista-ul__vineta
                  p.mb-0 Verifica estructura.
                li.mb-0(style="color: #FFD453")
                  i.lista-ul__vineta
                  p.mb-0 Evalúa restricciones.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img08.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Pruebas de integridad de datos
            p Este tipo de pruebas valida que la información almacenada cumpla con las reglas de negocio y restricciones definidas, como valores obligatorios, rangos permitidos y formatos correctos. Su objetivo es evitar el ingreso de datos erróneos o inconsistentes que puedan afectar los procesos y la toma de decisiones.
            p Acciones:
            .cajon.cajon.C09.px-4.py-3.mb-0
              ul.lista-ul
                li.mb-0(style="color: #FFD453")
                  i.lista-ul__vineta
                  p.mb-0 No permitir valores nulos en campos obligatorios.
                li.mb-0(style="color: #FFD453")
                  i.lista-ul__vineta
                  p.mb-0 Evitar duplicados.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img09.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-7.order-lg-1.order-2
            h4 Pruebas de integridad referencial
            p Estas pruebas garantizan la coherencia entre las relaciones de las tablas, verificando que las claves foráneas correspondan a registros válidos en las tablas relacionadas. De esta manera, se previene la existencia de registros huérfanos y se asegura la consistencia lógica de la información dentro del sistema.
            p Acciones:
            .cajon.cajon.C09.px-4.py-3.mb-0
              ul.lista-ul
                li.mb-0(style="color: #FFD453")
                  i.lista-ul__vineta
                  p.mb-0 No permitir registros huérfanos.
                li.mb-0(style="color: #FFD453")
                  i.lista-ul__vineta
                  p.mb-0 Mantener consistencia entre tablas relacionadas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img10.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-8.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Estas pruebas son fundamentales antes de pasar a ambientes productivos.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Gestión de copias de seguridad: exportación e importación de bases de datos
    p.mb-4(data-aos="fade-down") La gestión de copias de seguridad constituye un componente esencial en la administración de bases de datos, ya que permite proteger la información frente a fallos técnicos, errores humanos o incidentes de seguridad. Mediante la realización de respaldos adecuados se garantiza la continuidad del servicio y la recuperación de los datos en caso de pérdida o corrupción.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C01.px-4.py-4.h-100
          p.mb-0(data-aos="fade-down") Una estrategia efectiva de copias de seguridad combina distintos tipos de respaldo, como copias completas, incrementales y diferenciales, con el fin de optimizar el equilibrio entre seguridad, consumo de recursos y tiempo de recuperación. Esta planificación resulta clave para asegurar la disponibilidad y confiabilidad de la información en entornos operativos y productivos.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img11.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") A continuación, se describen y ejemplifican dos procesos fundamentales asociados a la gestión de copias de seguridad, que permiten respaldar y restaurar bases de datos de forma controlada y segura:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img12.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Exportación de bases de datos
            p.mb-4(data-aos="fade-down") La exportación consiste en generar archivos que contienen la estructura y/o los datos de una base de datos, los cuales pueden almacenarse en medios externos o ubicaciones seguras. Este proceso facilita la creación de respaldos, la migración de información entre sistemas y la transferencia de datos entre distintos entornos, como desarrollo, pruebas y producción.
            .cajon.C08.px-4.py-2.mb-4
              p.mb-0 &lt;/&gt; Bash
              p.mb-0 mysqldump -u root -p base_datos > respaldo.sql
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/img13.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Importación de bases de datos
            p.mb-4(data-aos="fade-down") La importación permite restaurar la información previamente exportada, incorporándola nuevamente en el sistema de base de datos. Este procedimiento es fundamental para la recuperación ante fallos, la reconstrucción de entornos y la continuidad operativa, asegurando que los datos se restablezcan de manera íntegra y coherente.
            br
            .cajon.C08.px-4.py-2.mb-4
              p.mb-0 &lt;/&gt; Bash
              p.mb-0 mysql -u root -p base_datos < respaldo.sql
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Buenas prácticas
        p.mb-0(data-aos="fade-down") La aplicación de buenas prácticas en la gestión de copias de seguridad es fundamental para garantizar la protección, disponibilidad y recuperación oportuna de la información. Estas prácticas permiten reducir riesgos operativos, prevenir pérdidas de datos y asegurar que los respaldos sean confiables y funcionales cuando se requieran. A continuación, se presentan algunas recomendaciones esenciales que fortalecen la administración adecuada de los procesos de <em>backup</em>:
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C02.p-4.mb-4
          ul.lista-ul.mb-0(data-aos="fade-down")
            li(style="color: #FFB851")
              i.fas.fa-cloud-arrow-down
              p.mb-0 Realizar copias periódicas.
            li(style="color: #FFB851")
              i.fas.fa-cloud-arrow-down
              p.mb-0 Almacenar respaldos en ubicaciones externas.
            li(style="color: #FFB851")
              i.fas.fa-cloud-arrow-down
              p.mb-0 Verificar la integridad de los respaldos.
            li.mb-0(style="color: #FFB851")
              i.fas.fa-cloud-arrow-down
              p.mb-0 Automatizar procesos de <em>backup</em>.
        p.mb-0(data-aos="fade-down") La implementación de mecanismos de seguridad, pruebas y respaldo en bases de datos es fundamental para garantizar la integridad, disponibilidad y confidencialidad de la información. Estas prácticas no solo previenen pérdidas de datos, sino que también fortalecen la confiabilidad de los sistemas y permiten una recuperación efectiva ante cualquier eventualidad.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img14.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Basado en lo anterior y para finalizar lo relacionado con la seguridad de las bases de datos, se presenta esta imagen:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Ciclo de seguridad, pruebas y respaldo de bases de datos
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/tema5/img15.svg', alt='Figura 5 que incluye un diagrama circular que representa el ciclo de seguridad en bases de datos, incluyendo el control de acceso mediante asignación y revocación de permisos, validación de la integridad de los datos, ejecución de pruebas, realización de copias de seguridad y procesos de recuperación. El ciclo refleja la continuidad de estas actividades para garantizar la protección de la información.')
      .col-12
        figure.movil
          img.mb-4(src='@/assets/curso/tema5/img16.svg', alt='Figura 5 que incluye un diagrama circular que representa el ciclo de seguridad en bases de datos, incluyendo el control de acceso mediante asignación y revocación de permisos, validación de la integridad de los datos, ejecución de pruebas, realización de copias de seguridad y procesos de recuperación. El ciclo refleja la continuidad de estas actividades para garantizar la protección de la información.')
</template>

<script>
export default {
  name: 'Tema5',
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
