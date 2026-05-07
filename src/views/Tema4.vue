<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de bases de datos NoSQL
    p.mb-4(data-aos="fade-down") La gestión de bases de datos NoSQL representa una evolución en la forma de almacenar y procesar información, especialmente en entornos donde los datos crecen de manera exponencial y presentan estructuras no uniformes. A diferencia de los sistemas relacionales tradicionales, las bases de datos NoSQL están diseñadas para ofrecer alta escalabilidad, flexibilidad y rendimiento en escenarios de gran volumen de información.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término NoSQL (Not Only SQL) no implica la ausencia del lenguaje SQL, sino una ampliación del paradigma de gestión de datos, permitiendo el uso de modelos alternativos que se adaptan mejor a aplicaciones modernas como redes sociales, sistemas de análisis en tiempo real y plataformas de comercio electrónico.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") 
        .cajon.cajon.C01.color-primario.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col.col-lg-1.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Las bases de datos NoSQL no reemplazan a las relacionales, sino que las complementan según el tipo de aplicación.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Conceptos de gestores NoSQL
    p(data-aos="fade-down") Los gestores NoSQL se caracterizan por manejar datos sin necesidad de esquemas rígidos, lo que permite una mayor flexibilidad en el almacenamiento de información. Esta característica es especialmente útil en aplicaciones donde los datos cambian constantemente o no tienen una estructura definida.
    p.mb-4(data-aos="fade-down") Los sistemas NoSQL se clasifican según su modelo de datos de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Bases de datos orientadas a documentos")
            .col-12.mb-4.mb-md-0
              p Almacenan la información en documentos estructurados, generalmente en formatos como JSON o BSON, lo que permite manejar datos semiestructurados con gran flexibilidad y sin esquemas rígidos.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 {
                p.mb-0 "nombre": "Carlos",
                p.mb-0 "edad": 30,
                p.mb-0 "ciudad": "Bogotá"
                p.mb-0 }
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Alta flexibilidad.
                li
                  i.lista-ul__vineta
                  p.mb-0 Fácil integración con aplicaciones <em>web</em>.
          .row(numero="2" titulo="Bases de datos clave-valor")
            .col-12.mb-4.mb-md-0
              p.mb-4 Guardan la información como pares formados por una clave única y un valor asociado, lo que facilita accesos muy rápidos y resulta ideal para escenarios de alta velocidad y escalabilidad.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 usuario_1 → "Camila"
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Alta velocidad.
                li
                  i.lista-ul__vineta
                  p.mb-0 Ideal para almacenamiento en caché.
          .row(numero="3" titulo="Bases de datos columnares")
            .col-12.mb-4.mb-md-0
              p.mb-4 Organizan los datos por columnas en lugar de filas, optimizando la lectura y el análisis de grandes volúmenes de información, especialmente en sistemas de inteligencia de negocios y analítica.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 columna_edad → [25, 30, 40]
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Alto rendimiento en análisis de datos.
                li
                  i.lista-ul__vineta
                  p.mb-0 Utilizadas en <em>big data</em>.
          .row(numero="4" titulo="Bases de datos de grafos")
            .col-12.mb-4.mb-md-0
              p.mb-4 Representan los datos mediante nodos, relaciones y propiedades, permitiendo modelar y consultar de forma eficiente relaciones complejas entre entidades.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0.text-center (AMIGO_DE) 
                p.mb-0.text-center Persona_A → → → → Persona_B
              ul.lista-ul--color.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Ideales para redes sociales.
                li
                  i.lista-ul__vineta
                  p.mb-0 Permiten análisis de relaciones complejas.
      .col-lg-3.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img03.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Cada modelo responde a necesidades específicas, por lo que su elección depende del tipo de aplicación.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Instalación y configuración de bases de datos NoSQL
    p.mb-4(data-aos="fade-down") La instalación y configuración de una base de datos NoSQL requiere seguir una secuencia lógica que garantice su correcto funcionamiento y seguridad. Aunque el proceso varía según el motor utilizado, la mayoría de gestores comparten etapas comunes. A continuación, se presenta un paso a paso general, tomando como referencia gestores ampliamente usados como MongoDB:
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      LineaTiempoE.color-acento-contenido.mb-4
        .row(titulo="Paso 1")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Selección del gestor NoSQL
            p.mb-0(data-aos="fade-down") Revisar las características del sistema a implementar e identificar el gestor NoSQL más adecuado según el tipo de datos, los requerimientos de escalabilidad y el contexto de uso. Considerar opciones ampliamente adoptadas, como MongoDB, por su flexibilidad y facilidad de administración.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')
        .row(titulo="Paso 2")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Descarga del <em>software</em>
            p.mb-0(data-aos="fade-down") Acceder al sitio oficial del gestor NoSQL seleccionado y descargar la versión compatible con el sistema operativo. Verificar que se trate de una versión estable y con soporte vigente.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img05.svg', alt='Imagen decorativa')
        .row(titulo="Paso 3")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Ejecución del instalador
            p.mb-0(data-aos="fade-down") Ejecutar el instalador siguiendo las instrucciones proporcionadas por el asistente. Durante esta etapa se instalan los componentes básicos y los servicios necesarios para el funcionamiento del sistema.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img06.svg', alt='Imagen decorativa')
        .row(titulo="Paso 4")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Configuración de rutas y servicios
            p.mb-0(data-aos="fade-down") Configurar las rutas de almacenamiento de datos y los archivos del sistema. Definir si el gestor se ejecutará como un servicio del sistema para permitir su inicio automático.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img07.svg', alt='Imagen decorativa')
        .row(titulo="Paso 5")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Inicialización del servidor
            p.mb-0(data-aos="fade-down") Iniciar el servidor NoSQL y comprobar que se encuentre en ejecución. Verificar que el sistema esté disponible para aceptar conexiones.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')
        .row(titulo="Paso 6")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Configuración básica del sistema
            p.mb-0(data-aos="fade-down") Definir los parámetros iniciales del gestor, tales como:
            ul.lista-ul--color.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Directorio de almacenamiento de datos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Puertos de conexión.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Usuarios y mecanismos de autenticación.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Políticas de acceso según perfiles.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')
        .row(titulo="Paso 7")
          .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") Ajustes de seguridad
            p.mb-0(data-aos="fade-down") Configurar mecanismos de seguridad, como autenticación y cifrado, especialmente en entornos productivos, con el fin de proteger la información y prevenir accesos no autorizados.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Una correcta instalación y configuración de bases de datos NoSQL contribuye a garantizar estabilidad, rendimiento y seguridad en los sistemas de información.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Construcción de bases de datos NoSQL
    p.mb-4(data-aos="fade-down") A continuación, se presentan las etapas fundamentales en la construcción de una base de datos NoSQL. Cada una de ellas cumple una función específica dentro del proceso, desde la creación inicial de la base de datos hasta la organización de la información y la inserción de los documentos que la conforman, permitiendo una gestión flexible y eficiente de los datos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img11.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Creación de base de datos
            p.mb-4(data-aos="fade-down") En gestores NoSQL como MongoDB, la base de datos no requiere una creación explícita previa. Esta se genera automáticamente en el momento en que se insertan los primeros documentos, lo que simplifica el proceso inicial y permite una implementación más ágil.
            .cajon.C08.px-4.py-2.mb-4
              p.mb-0 use tienda
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img12.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Creación de colecciones
            p.mb-4(data-aos="fade-down") Las colecciones funcionan como contenedores de documentos relacionados. Aunque pueden crearse de forma implícita al insertar información, también es posible definirlas previamente para organizar los datos de manera lógica y facilitar su administración.
            .cajon.C08.px-4.py-2.mb-4
              p.mb-0 db.createCollection("clientes")
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Inserción de documentos
            p.mb-4(data-aos="fade-down") La inserción de documentos consiste en almacenar la información dentro de las colecciones en formato flexible, como JSON o BSON. Cada documento puede contener distintos campos, lo que permite manejar datos heterogéneos sin necesidad de esquemas rígidos.
            .cajon.C08.px-4.py-2.mb-4
              p.mb-0 db.clientes.insertOne({
              p.mb-0 nombre: "Ana",
              p.mb-0 edad: 28,
              p.mb-0 ciudad: "Medellín"
              p.mb-0 })
    .row.justify-content-center.mb-4
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") La falta de esquema puede generar desorden si no se gestiona adecuadamente.
    p.text-center.mb-4(data-aos="fade-down") Para finalizar lo relacionado con los modelos de bases de datos NoSQL, se presenta la siguiente imagen comparativa:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Modelos y estructuras de bases de datos NoSQL
      .row.justify-content-center
        .col-12.col-lg-10
          figure.desktop
            img(src='@/assets/curso/tema4/img14.svg', alt='Figura 4 que contiene una infografía comparativa que presenta los principales modelos de bases de datos NoSQL: documentos en formato JSON, estructuras de clave-valor, bases de datos columnares y bases de datos orientadas a grafos. Cada modelo se representa con ejemplos que muestran sus características y forma de organización de los datos.')
      .col-12
        figure.movil
          img.mb-4(src='@/assets/curso/tema4/img15.svg', alt='Figura 4 que contiene una infografía comparativa que presenta los principales modelos de bases de datos NoSQL: documentos en formato JSON, estructuras de clave-valor, bases de datos columnares y bases de datos orientadas a grafos. Cada modelo se representa con ejemplos que muestran sus características y forma de organización de los datos.')
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Operaciones CRUD, consultas e índices
    p.mb-4(data-aos="fade-down") Las operaciones CRUD (Create-crear, Read-leer, Update-actualizar, Delete-eliminar) constituyen la base para la administración de la información en bases de datos NoSQL. Estas operaciones permiten crear, consultar, modificar y eliminar datos, y suelen implementarse mediante lenguajes como JavaScript, especialmente en motores orientados a documentos como MongoDB. A continuación, la explicación de cada una:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="CREATE (Crear - JavaScrip)")
            .col-12.mb-0.mb-md-0
              p Permite agregar nuevos documentos a una colección, almacenando información estructurada sin necesidad de definir previamente un esquema rígido.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 db.clientes.insertOne({
                p.mb-0 nombre: "Luis",
                p.mb-0 edad: 35
                p.mb-0 })
          .row(titulo="READ (Consultar - JavaScrip)")
            .col-12.mb-0.mb-md-0
              p Se utiliza para acceder y visualizar los documentos almacenados, aplicando filtros o criterios para obtener información específica.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 db.clientes.find({ edad: { $gt: 30 } })
          .row(titulo="UPDATE (Actualizar - JavaScrip)")
            .col-12.mb-0.mb-md-0
              p Permite modificar uno o varios campos de documentos existentes, ya sea actualizando valores puntuales o conjuntos de datos completos.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 db.clientes.updateOne(
                p.mb-0 { nombre: "Luis" },
                p.mb-0 { $set: { edad: 36 } }
                p.mb-0 )
          .row(titulo="DELETE (Eliminar - JavaScrip)")
            .col-12.mb-0.mb-md-0
              p Se emplea para eliminar documentos de una colección, de forma selectiva o total, según las condiciones definidas.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 db.clientes.deleteOne({ nombre: "Luis" })
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img16.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C02.px-4.py-3
          .tarjeta.tarjeta--C12.p-4.py-2.mb-3.d-inline-block
            p.text-center.text-bold.mb-0(data-aos="fade-down") Consultas avanzadas
          p.mb-4(data-aos="fade-down") Las consultas pueden incluir operadores:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li.mb-2
              i.fas.fa-cloud-arrow-down
              p.mb-0 $gt (mayor que).
            li.mb-2
              i.fas.fa-cloud-arrow-down
              p.mb-0 $lt (menor que).
            li.mb-2
              i.fas.fa-cloud-arrow-down
              p.mb-0 $and.
            li.mb-0
              i.fas.fa-cloud-arrow-down
              p.mb-0 $or.
          p.mb-4(data-aos="fade-down") Ejemplo (JavaScrip):
          .cajon.C08.px-4.py-3.mb-3
            p.mb-0 db.clientes.find({
            p.mb-0 $and: [
            p.mb-0 { edad: { $gt: 25 } },
            p.mb-0 { ciudad: "Bogotá" }
            p.mb-0 ]
            p.mb-0 })
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img17.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Las bases de datos NoSQL representan una solución moderna y eficiente para el manejo de grandes volúmenes de información no estructurada, ofreciendo flexibilidad, escalabilidad y alto rendimiento. Su correcta implementación permite complementar los sistemas tradicionales, adaptándose a las necesidades de aplicaciones actuales que requieren procesamiento dinámico y distribuido de datos.
</template>

<script>
export default {
  name: 'Tema4',
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
