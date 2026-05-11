<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Lenguaje estructurado de consulta (SQL)
    p.mb-4(data-aos="fade-down") El lenguaje estructurado de consulta, conocido como SQL (Structured Query Language), constituye el estándar más utilizado para la gestión y manipulación de bases de datos relacionales. Su importancia radica en la capacidad de permitir la interacción directa con los datos, facilitando su definición, consulta, actualización y control dentro de un sistema de gestión de bases de datos.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Desde una perspectiva funcional, SQL no es únicamente un lenguaje de consulta, sino un conjunto integral de instrucciones que permiten administrar completamente una base de datos. Su diseño declarativo permite que el usuario indique qué desea obtener sin necesidad de especificar cómo hacerlo, delegando esta responsabilidad al motor del gestor de base de datos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") El uso de SQL se extiende a múltiples entornos, desde aplicaciones empresariales hasta sistemas de análisis de datos, lo que lo convierte en una herramienta esencial dentro del desarrollo de <em>software</em> y la gestión de información.
        .cajon.cajon.C01.color-primario.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col.col-lg-1.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") El dominio de SQL permite no solo consultar datos, sino también diseñar estructuras robustas y garantizar la integridad de la información.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Características, componentes y estándares de SQL
    p(data-aos="fade-down") El lenguaje SQL se caracteriza por ser declarativo, estructurado y orientado a la manipulación de datos en bases de datos relacionales. Su diseño facilita la interacción con grandes volúmenes de información de manera eficiente y organizada.
    p.mb-4(data-aos="fade-down") Entre sus principales características se destacan:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
        h4.text-center Lenguaje declarativo
        p.text-center(data-aos="fade-down") El usuario define el resultado esperado sin especificar el procedimiento.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
        h4.text-center Portabilidad
        p.text-center(data-aos="fade-down") Puede utilizarse en diferentes gestores de bases de datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
        h4.text-center Estandarización
        p.text-center(data-aos="fade-down") Basado en normas internacionales definidas por ANSI e ISO.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
        h4.text-center Capacidad de integración
        p.text-center(data-aos="fade-down") Se puede combinar con otros lenguajes como Java, Python o PHP.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
        h4.text-center Soporte para operaciones complejas
        p.text-center(data-aos="fade-down") Facilita la ejecución de consultas avanzadas.
    p.mb-4.text-center(data-aos="fade-down") El lenguaje SQL se divide en varios componentes que permiten organizar sus funcionalidades así:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C05.p-4.h-100.w-100
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>DDL</b>: Lenguaje de definición de datos.
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>DML</b> : Lenguaje de manipulación de datos.
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>DCL</b>: Lenguaje de control de datos.
            li.mb-0
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>TCL</b>: Lenguaje de control de transacciones.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img08.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Esta división permite estructurar el uso de SQL según el tipo de operación que se desea realizar.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Con respecto a los estándares de SQL, el lenguaje ha evolucionado a través de diversas versiones estandarizadas. Por ello, a continuación, se presenta una línea de tiempo que resume la evolución de los principales estándares de SQL, destacando los avances más relevantes incorporados en cada versión:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C09.p-4(titulo="1986 – SQL-86")
                .row.justify-content-center
                  p.mb-0 Corresponde a la primera versión oficial del lenguaje SQL, estandarizada para establecer una base común en la gestión de bases de datos relacionales. Definió las instrucciones fundamentales para la creación de estructuras y la manipulación básica de datos.                  
              .tarjeta.tarjeta--C09.p-4(titulo="1992 – SQL-92")
                .row.justify-content-center
                  p.mb-0 Representó una ampliación importante del estándar inicial, incorporando mejoras sustanciales en las consultas. Se fortalecieron las cláusulas de selección, filtrado y combinación de tablas, lo que permitió consultas más precisas y eficientes.                   
              .tarjeta.tarjeta--C09.p-4(titulo="1999 – SQL: 1999")
                .row.justify-content-center
                  p.mb-0 Introdujo características avanzadas como el soporte para programación orientada a objetos. Esto permitió el uso de tipos de datos definidos por el usuario, procedimientos almacenados y una mayor complejidad en la lógica de las bases de datos.        
              .tarjeta.tarjeta--C09.p-4(titulo="2003 – SQL: 2003")
                .row.justify-content-center
                  p.mb-0 Añadió funciones analíticas que facilitaron el análisis de grandes volúmenes de datos. Estas funciones permitieron realizar cálculos avanzados, agregaciones y análisis de tendencias directamente desde las consultas SQL.
          .col-lg-3.col-sm-4.col-10.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img09.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estos estándares garantizan compatibilidad entre distintos sistemas gestores, aunque cada uno puede incluir extensiones propias.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos de datos, restricciones y propiedades de los datos
    p.mb-4(data-aos="fade-down") Los tipos de datos en SQL permiten definir la naturaleza de la información que será almacenada en una tabla, asegurando coherencia y optimización en el uso del sistema.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Clasificación de tipos de datos
    p(data-aos="fade-down") Los tipos de datos en los sistemas de bases de datos se agrupan en varias categorías con el fin de clasificar y estructurar la información de acuerdo con su naturaleza, formato y uso. Esta clasificación permite un almacenamiento eficiente, asegura la integridad de los datos y facilita su manipulación, validación y consulta dentro de los procesos de gestión de la información.
    p.mb-4(data-aos="fade-down") A partir de esta organización, se presentan las categorías más utilizadas en los gestores de bases de datos, junto con los tipos de datos más representativos que permiten definir valores numéricos, textuales, temporales y lógicos de forma adecuada:
    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-7.order-lg-2.order-2
              h4.mb-4 Datos numéricos
              p.mb-4 Se utilizan para almacenar valores cuantitativos y realizar operaciones matemáticas. 
              .cajon.C02.px-4.py-2.mb-0
                ul.lista-ul--color.mb-0
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>INT</b>: guarda números enteros sin decimales. 
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>DECIMAL</b>: almacena números con precisión fija, ideal para valores financieros. 
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>FLOAT</b>: permite números con decimales de precisión variable.
            .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema2/img10.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-7.order-lg-2.order-2
              h4.mb-4 Datos de texto
              p.mb-4 Permiten almacenar información alfanumérica como nombres, descripciones o códigos. 
              .cajon.C02.px-4.py-2.mb-0
                ul.lista-ul--color.mb-0
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>VARCHAR</b>: texto de longitud variable. 
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>CHAR</b>: texto de longitud fija. 
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>TEXT</b>: almacena cadenas de texto extensas. 
            .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema2/img11.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-7.order-lg-2.order-2
              h4.mb-4 Datos de fecha y hora:
              p.mb-4 Se emplean para registrar información temporal.
              .cajon.C02.px-4.py-2.mb-0
                ul.lista-ul--color.mb-0
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>DATE</b>: guarda únicamente la fecha. 
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>TIME</b>: almacena la hora. 
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>DATETIME</b>: combina fecha y hora en un solo valor.
            .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema2/img12.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-7.order-lg-2.order-2
              h4.mb-4 Datos booleanos:
              p.mb-4 Se utilizan para representar valores lógicos. 
              .cajon.C02.px-4.py-2.mb-0
                ul.lista-ul--color.mb-0
                  li.mb-2
                    i.lista-ul__vineta
                    p.mb-0 <b>BOOLEAN</b>: admite valores verdadero o falso.
            .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema2/img13.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") La selección incorrecta del tipo de dato puede afectar el rendimiento y la integridad de la información.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Restricciones de datos
    p(data-aos="fade-down") Son mecanismos que se aplican a las columnas de una tabla para garantizar la validez, coherencia e integridad de la información almacenada. Su uso permite prevenir errores, evitar inconsistencias y asegurar que los datos cumplan con las reglas definidas por el sistema y las necesidades del modelo de base de datos.
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales restricciones utilizadas para controlar los valores que pueden almacenarse en una columna, explicando su función dentro del diseño de bases de datos y su importancia para mantener información confiable, consistente y alineada con las reglas establecidas por el sistema:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C05.p-4.h-100.w-100
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>NOT NULL</b>: impide valores nulos.
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>UNIQUE</b>: evita duplicados.
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>PRIMARY KEY</b>: identifica registros únicos.
            li.mb-4
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>FOREIGN KEY</b>: establece relaciones entre tablas.
            li.mb-0
              i.fas.fa-cloud-arrow-down
              p.mb-0 <b>CHECK</b>: valida condiciones específicas.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img14.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Propiedades de los datos
    p(data-aos="fade-down") Las propiedades de los datos complementan la definición de los campos dentro de una tabla, permitiendo ajustar su comportamiento, formato y valores asociados. A través de estas propiedades se optimiza el almacenamiento, se automatizan ciertos procesos y se garantiza que la información cumpla con las características requeridas por el sistema.
    p.mb-4(data-aos="fade-down") Por lo anterior, se presentan las principales propiedades que pueden aplicarse a los campos de una base de datos, destacando cómo cada una contribuye a una gestión más eficiente, controlada y coherente de la información almacenada:
    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img15.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Auto incremento
              p.mb-0 Permite que el sistema asigne automáticamente un valor numérico consecutivo a un campo, generalmente utilizado para identificar de forma única cada registro sin intervención del usuario. 
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img16.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Longitud máxima
              p.mb-0 Establece el número máximo de caracteres o dígitos que puede almacenar un campo, ayudando a controlar el tamaño de la información y optimizar el uso del almacenamiento. 
    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img17.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Valor por defecto (DEFAULT)
              p.mb-0 Define un valor que se asigna automáticamente a un campo cuando no se especifica uno al momento de insertar un registro, facilitando la consistencia de los datos. 
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img18.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Precisión y escala
              p.mb-0 Se aplica a datos numéricos decimales, donde la precisión indica el total de dígitos permitidos y la escala determina cuántos de ellos corresponden a la parte decimal. 
    .row.justify-content-center.mb-0
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Estas propiedades permiten adaptar la estructura de la base de datos a las necesidades del sistema.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Lenguaje de definición de datos (DDL)
    p(data-aos="fade-down") El lenguaje de definición de datos (DDL) forma parte fundamental del lenguaje SQL y se utiliza para definir, crear y administrar la estructura de una base de datos. A través de este lenguaje es posible establecer cómo se organizan los datos, qué objetos existen y cómo se relacionan entre sí dentro del sistema.
    p.mb-4(data-aos="fade-down") A continuación, se presentan los principales comandos del DDL, junto con su función y ejemplos prácticos, que permiten comprender cómo crear, modificar y eliminar estructuras en una base de datos, así como las diferencias clave entre algunas de estas operaciones:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="CREATE")
            .col-12.mb-4.mb-md-0
              p Permite crear objetos dentro de la base de datos, como bases de datos, tablas, vistas o índices. A través de este comando se define la estructura inicial de los objetos, especificando columnas, tipos de datos, restricciones y relaciones, constituyendo el punto de partida para el almacenamiento de la información.
              .cajon.C08.px-4.py-2.mb-0
                p.mb-0 CREATE TABLE clientes (
                p.mb-0 id INT PRIMARY KEY,
                p.mb-0 nombre VARCHAR(100),
                p.mb-0 edad INT
                p.mb-0 );
          .row(numero="2" titulo="ALTER")
            .col-12.mb-4.mb-md-0
              p.mb-4 Permite modificar la estructura de objetos existentes sin necesidad de eliminarlos. Con este comando es posible agregar, cambiar o eliminar columnas, ajustar tipos de datos, establecer nuevas restricciones o actualizar configuraciones, facilitando la adaptación de la base de datos a nuevos requerimientos.
              .cajon.C08.px-4.py-2.mb-0
                p.mb-0 ALTER TABLE clientes ADD correo VARCHAR(100);
          .row(numero="3" titulo="DROP")
            .col-12.mb-4.mb-md-0
              p.mb-4 Elimina completamente un objeto de la base de datos, junto con toda la información y estructura asociada. Este comando se utiliza cuando un objeto ya no es necesario y debe emplearse con precaución, ya que la operación es irreversible y no permite recuperación de los datos eliminados.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 DROP TABLE clientes;
              p.mb-0 <b>Nota</b>: esta operación es irreversible.
          .row(numero="4" titulo="TRUNCATE")
            .col-12.mb-4.mb-md-0
              p.mb-4 Elimina de forma inmediata todos los registros almacenados en una tabla, manteniendo intacta su estructura, columnas y restricciones. A diferencia de otras operaciones de eliminación, se ejecuta de manera rápida y eficiente, siendo útil para limpiar tablas sin afectar su definición.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 TRUNCATE TABLE clientes;
              h5 Nota:
              ul.lista-ul--color.mb-0
                li
                  i.lista-ul__vineta
                  p.mb-0 DELETE: elimina registros uno a uno.
                li
                  i.lista-ul__vineta
                  p.mb-0 TRUNCATE: elimina todos de forma inmediata.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img19.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Como complemento, se incluye la siguiente imagen de una representación de la estructura del lenguaje SQL, mostrando su organización en distintos componentes y lenguajes especializados. En ella se identifican las funciones del DDL, DML y DCL, junto con los principales comandos, tipos de datos y restricciones, permitiendo comprender de forma integrada cómo se definen, manipulan y controlan los datos dentro de un sistema de bases de datos:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Estructura y componentes del lenguaje SQL
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/tema2/img20.svg', alt='Figura 2 que contiene un mapa conceptual del lenguaje SQL que relaciona sus principales componentes: DDL para la definición de estructuras (CREATE, ALTER, DROP, TRUNCATE), DML para la manipulación de datos (INSERT, UPDATE, DELETE, SELECT) y DCL para el control de acceso (GRANT, REVOKE). Se incluyen además elementos como tipos de datos y restricciones de integridad, evidenciando la organización del lenguaje.')
      .col-12
        figure.movil
          img.mb-4(src='@/assets/curso/tema2/img21.svg', alt='Figura 2 que contiene un mapa conceptual del lenguaje SQL que relaciona sus principales componentes: DDL para la definición de estructuras (CREATE, ALTER, DROP, TRUNCATE), DML para la manipulación de datos (INSERT, UPDATE, DELETE, SELECT) y DCL para el control de acceso (GRANT, REVOKE). Se incluyen además elementos como tipos de datos y restricciones de integridad, evidenciando la organización del lenguaje.')
        .col-auto.movil
          a.anexo.mb-0(:href="obtenerLink('/downloads/Figura02.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Figura 2. Estructura y componentes del lenguaje SQL
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Restricciones de integridad
    p.mb-4(data-aos="fade-down") Las restricciones de integridad cumplen un papel esencial en el diseño y administración de bases de datos, ya que permiten asegurar que la información almacenada sea válida, coherente y confiable a lo largo del tiempo. Estas restricciones actúan como reglas que controlan los valores que pueden registrarse en las tablas, evitando errores comunes como duplicidades, relaciones incorrectas entre datos o el ingreso de información que no cumple con las condiciones establecidas. Gracias a su aplicación, los sistemas de información mantienen un alto nivel de calidad de los datos, lo cual resulta fundamental para la toma de decisiones, los procesos operativos y el análisis confiable de la información.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col.col-lg-2.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema2/img22.svg', alt='Imagen decorativa')
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") Por lo anterior, se presentan los distintos enfoques de integridad de los datos, con el fin de comprender cómo cada uno contribuye al control y validación de la información dentro de una base de datos. A través de explicaciones conceptuales y ejemplos ilustrativos, se abordarán las principales formas de integridad utilizadas en SQL, permitiendo identificar su finalidad y aplicación general, sin profundizar aún en su implementación técnica detallada:
    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Integridad de unicidad")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img23.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Garantiza que determinados datos no se repitan dentro de una tabla, asegurando que cada registro pueda identificarse de forma única. Se implementa principalmente mediante claves primarias y restricciones UNIQUE, las cuales impiden la existencia de valores duplicados en una o varias columnas. Esta integridad es esencial para evitar ambigüedades, mantener la identificación correcta de los registros y asegurar la confiabilidad de la información almacenada.
            .cajon.C08.px-4.py-2.mb-0
              p.mb-0 UNIQUE (correo)
      .py-3.py-md-4(titulo="Integridad referencial")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img24.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Asegura que las relaciones entre tablas se mantengan de manera coherente y válida. Se establece mediante claves foráneas, las cuales obligan a que un valor en una tabla relacionada exista previamente en la tabla de referencia. De este modo, se evita la creación de registros huérfanos y se preserva la consistencia de los datos en estructuras relacionales, especialmente en bases de datos con múltiples tablas interconectadas.
            .cajon.C08.px-4.py-2.mb-0
              p.mb-0 FOREIGN KEY (id_cliente) REFERENCES clientes(id)
      .py-3.py-md-4(titulo="Integridad de dominio")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img25.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Controla que los valores almacenados en una columna cumplan con condiciones específicas definidas previamente. Estas condiciones pueden incluir rangos numéricos, formatos, tipos de datos o reglas lógicas, y se aplican mediante restricciones como CHECK. La integridad de dominio permite validar la información desde el momento de su ingreso, reduciendo errores y garantizando que los datos sean coherentes con las reglas del negocio o del sistema.
            .cajon.C08.px-4.py-2.mb-0
              p.mb-0 CHECK (edad >= 18)
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Sin restricciones de integridad, la base de datos puede volverse inconsistente e inutilizable.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El lenguaje SQL no solo permite interactuar con los datos, sino que constituye la base para el diseño, control y administración de sistemas de información. Su correcta aplicación garantiza la integridad, seguridad y eficiencia en el manejo de bases de datos, convirtiéndose en una herramienta indispensable para el desarrollo de soluciones tecnológicas modernas.
</template>

<script>
export default {
  name: 'Tema2',
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
