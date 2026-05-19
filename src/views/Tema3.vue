<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manipulación y consulta de datos con SQL
    p.mb-4(data-aos="fade-down") La manipulación y consulta de datos constituye uno de los aspectos más importantes en la gestión de bases de datos, ya que permite interactuar directamente con la información almacenada. A través del lenguaje SQL, es posible realizar operaciones que van desde la inserción de datos hasta la ejecución de consultas complejas para el análisis de información.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C02.px-4.py-3.h-100.w-100
          p.mb-4(data-aos="fade-down") Este conjunto de operaciones se agrupa dentro del lenguaje de manipulación de datos, conocido como DML (Data Manipulation Language), el cual proporciona herramientas para gestionar el contenido de las tablas sin alterar su estructura.
          p.mb-0(data-aos="fade-down") A diferencia del DDL, que define la estructura, el DML se enfoca en trabajar con los datos existentes, permitiendo su modificación, consulta y eliminación según las necesidades del sistema.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0.text-center(data-aos="fade-down") Una mala manipulación de datos puede generar pérdida de información o inconsistencias críticas en el sistema.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Lenguaje de manipulación de datos (DML)
    p(data-aos="fade-down") Para este apartado se presentan las principales instrucciones que conforman el lenguaje de manipulación de datos, las cuales permiten ejecutar acciones específicas sobre la información almacenada en las tablas y facilitan su gestión operativa dentro de una base de datos.
    p.mb-4(data-aos="fade-down") A continuación, se describen los comandos más representativos del DML, junto con su función y ejemplos prácticos que ilustran su uso en escenarios habituales de manejo de datos:
    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="INSERT")
            .col-12.mb-4.mb-md-0
              p Permite agregar nuevos registros a una tabla, incorporando información que no existía previamente en la base de datos. Se utiliza para almacenar datos iniciales o registrar nuevos eventos, usuarios o transacciones, respetando las restricciones definidas en la estructura de la tabla.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 INSERT INTO clientes (id, nombre, edad)
                p.mb-0 VALUES (1, 'Carlos', 30);
              p También es posible insertar múltiples registros:
              .cajon.C08.px-4.py-2.mb-0
                p.mb-0 INSERT INTO clientes (id, nombre, edad)
                p.mb-0 VALUES 
                p.mb-0 (2, 'Ana', 25),
                p.mb-0 (3, 'Luis', 40);
          .row(numero="2" titulo="UPDATE")
            .col-12.mb-4.mb-md-0
              p.mb-4 Permite modificar los valores de uno o varios campos en registros ya existentes. Se emplea cuando es necesario corregir, actualizar o ajustar información almacenada, y debe utilizarse junto con condiciones que aseguren que solo se alteren los registros deseados.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 UPDATE clientes
                p.mb-0 SET edad = 31
                p.mb-0 WHERE id = 1;
              p.mb-0 <b>Nota</b>: siempre usar WHERE, de lo contrario se actualizan todos los registros.
          .row(numero="3" titulo="DELETE")
            .col-12.mb-4.mb-md-0
              p.mb-4 Permite eliminar registros de una tabla cuando ya no son necesarios o deben ser descartados. Su uso implica la eliminación permanente de los datos seleccionados, por lo que es fundamental aplicarlo de manera controlada para evitar pérdidas de información no intencionadas.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 DELETE FROM clientes
                p.mb-0 WHERE id = 3;
          .row(numero="4" titulo="MERGE")
            .col-12.mb-4.mb-md-0
              p.mb-4 Permite combinar operaciones de inserción y actualización en una sola instrucción. Es especialmente útil en procesos de sincronización de datos, ya que evalúa la existencia previa de los registros y decide si deben actualizarse o insertarse según una condición definida.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 MERGE INTO clientes AS destino
                p.mb-0 USING nuevos_clientes AS origen
                p.mb-0 ON destino.id = origen.id
                p.mb-0 WHEN MATCHED THEN
                p.mb-0     UPDATE SET destino.nombre = origen.nombre
                p.mb-0 WHEN NOT MATCHED THEN
                p.mb-0     INSERT (id, nombre) VALUES (origen.id, origen.nombre);
          .row(numero="5" titulo="SELECT")
            .col-12.mb-4.mb-md-0
              p.mb-4 Es la instrucción más utilizada del DML y permite consultar, filtrar y recuperar información almacenada en una o varias tablas. Facilita el análisis de datos mediante condiciones, proyecciones y ordenamientos, sin alterar el contenido de la base de datos.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 SELECT nombre, edad
                p.mb-0 FROM clientes;
              p Consulta con condición:
              .cajon.C08.px-4.py-2.mb-0
                p.mb-0 SELECT * FROM clientes
                p.mb-0 WHERE edad > 30;
      .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img02.png', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Operadores de comparación, aritméticos y lógicos
    p.mb-4(data-aos="fade-down") El uso de operadores en SQL resulta fundamental para establecer criterios de búsqueda, comparar valores y realizar operaciones matemáticas dentro de las consultas. Estos elementos amplían las capacidades del lenguaje, permitiendo trabajar con los datos de forma más precisa y acorde a las necesidades de análisis y gestión de la información.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0.text-center(data-aos="fade-down") A continuación, se presentan los principales operadores que son los de comparación, lógicos y aritméticos, junto con su función y ejemplos prácticos que ilustran cómo se integran en las consultas para construir condiciones y cálculos dentro de una base de datos:
    TabsC.color-acento-botones.mb-0(data-aos="flip-up")
      .py-3.py-md-4(titulo="Operadores de comparación")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img03.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Estos operadores se utilizan para comparar valores y establecer condiciones dentro de una consulta, determinando qué registros cumplen los criterios definidos.
            .cajon.cajon.C09.px-4.py-3.mb-0
              ul.lista-ul--color
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 = (<b>igual</b>): verifica si dos valores son exactamente iguales. Se usa para filtrar registros que coinciden con un valor específico.
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 <> (<b>diferente</b>): evalúa si dos valores no son iguales, permitiendo excluir registros con un valor determinado.
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 > (<b>mayor que</b>): comprueba si un valor es superior a otro, útil para rangos numéricos o fechas.
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 < (<b>menor que</b>): determina si un valor es inferior a otro, facilitando la selección de datos por límites mínimos.
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 >= (<b>mayor o igual</b>): verifica si un valor es mayor o igual a otro, combinando igualdad y superioridad.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 <= (<b>menor o igual</b>): evalúa si un valor es menor o igual a otro, integrando igualdad y inferioridad.
            .cajon.C08.px-4.py-2.mb-0
              p.mb-0 SELECT * FROM clientes
              p.mb-0 WHERE edad >= 18;
      .py-3.py-md-4(titulo="Operadores lógicos")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img04.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Los operadores lógicos permiten combinar o negar condiciones, haciendo posible construir filtros más complejos dentro de las consultas.
            .cajon.cajon.C09.px-4.py-3.mb-0
              ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 AND: exige que todas las condiciones unidas se cumplan simultáneamente.
                  li
                    i.lista-ul__vineta
                    p.mb-0 OR: permite que se cumpla al menos una de las condiciones establecidas.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 NOT: niega una condición, excluyendo los registros que la cumplen.
            .cajon.C08.px-4.py-2.mb-0
              p.mb-0 SELECT * FROM clientes
              p.mb-0 WHERE edad > 25 AND nombre = 'Carlos';
      .py-3.py-md-4(titulo="Operadores aritméticos")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img05.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Estos operadores se emplean para realizar cálculos matemáticos sobre valores numéricos almacenados en las tablas.
            .cajon.cajon.C09.px-4.py-2.mb-0
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  p.mb-0 + (<b>suma</b>): permite adicionar valores.
                li
                  i.lista-ul__vineta
                  p.mb-0 - (<b>resta</b>): permite sustraer un valor de otro.
                li
                  i.lista-ul__vineta
                  p.mb-0 * (<b>multiplicación</b>): permite multiplicar valores, comúnmente usado para cálculos de porcentajes o ajustes.
                li
                  i.lista-ul__vineta
                  p.mb-0 / (<b>división</b>): permite dividir un valor entre otro para obtener proporciones o promedios.
            .cajon.C08.px-4.py-2.mb-4
              p.mb-0 SELECT salario, salario * 1.1 AS aumento
              p.mb-0 FROM empleados;
            p.mb-0 <b>Nota</b>: la combinación de operadores permite construir consultas avanzadas y precisas.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Funciones de cadena, matemáticas, fecha-hora y del sistema
    p(data-aos="fade-down") Las funciones en SQL amplían las capacidades de las consultas al permitir transformar, calcular y analizar los datos directamente dentro de la base de datos. Su uso resulta fundamental para optimizar el tratamiento de la información y obtener resultados más precisos sin necesidad de procesamiento externo.
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales funciones, junto con su propósito y ejemplos prácticos que ilustran su aplicación en consultas habituales:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Funciones de cadena")
            .col-12.mb-4.mb-md-0
              p Estas funciones se utilizan para manipular y transformar datos de tipo texto, facilitando su presentación, análisis y validación dentro de las consultas.
              .cajon.C10.px-4.py-2.mb-0
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 UPPER(): convierte el texto a mayúsculas, útil para estandarizar la información.
                  li
                    i.lista-ul__vineta
                    p.mb-0 LOWER(): convierte el texto a minúsculas, facilitando comparaciones sin distinción entre mayúsculas y minúsculas.
                  li
                    i.lista-ul__vineta
                    p.mb-0 LENGTH(): devuelve la cantidad de caracteres de una cadena, permitiendo validar la longitud de los textos.
                  li
                    i.lista-ul__vineta
                    p.mb-0 SUBSTRING(): extrae una parte específica de una cadena de texto según la posición y longitud indicadas.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 SELECT UPPER(nombre) FROM clientes;
          .row(numero="2" titulo="Funciones matemáticas")
            .col-12.mb-4.mb-md-0
              p.mb-4 Permiten realizar cálculos numéricos directamente sobre los datos almacenados en la base de datos.
              .cajon.C10.px-4.py-2.mb-0
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 ROUND(): redondea un número al número de decimales especificado.
                  li
                    i.lista-ul__vineta
                    p.mb-0 ABS(): retorna el valor absoluto de un número, eliminando el signo negativo.
                  li
                    i.lista-ul__vineta
                    p.mb-0 SQRT(): calcula la raíz cuadrada de un valor numérico.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 SELECT ROUND(123.456, 2);
          .row(numero="3" titulo="Funciones de fecha y hora")
            .col-12.mb-4.mb-md-0
              p.mb-4 Se emplean para obtener, manipular y analizar valores temporales, como fechas y horas.
              .cajon.C10.px-4.py-2.mb-0
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 NOW(): devuelve la fecha y hora actual del sistema.
                  li
                    i.lista-ul__vineta
                    p.mb-0 CURDATE(): retorna únicamente la fecha actual.
                  li
                    i.lista-ul__vineta
                    p.mb-0 YEAR(): extrae el año de una fecha determinada.
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 SELECT YEAR(fecha_nacimiento) FROM clientes;
          .row(numero="4" titulo="Funciones del sistema")
            .col-12.mb-4.mb-md-0
              p.mb-4 Proporcionan información del sistema o permiten realizar cálculos agregados sobre los datos.
              .cajon.C10.px-4.py-2.mb-0
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 COUNT()
                  li
                    i.lista-ul__vineta
                    p.mb-0 USER()
                  li
                    i.lista-ul__vineta
                    p.mb-0 VERSION()
              .cajon.C08.px-4.py-2.mb-4
                p.mb-0 SELECT COUNT(*) FROM clientes;
      .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img06.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") Las funciones permiten optimizar consultas sin necesidad de procesar datos externamente.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Consultas combinadas (JOIN)
    p(data-aos="fade-down") Las consultas combinadas en SQL permiten relacionar información almacenada en diferentes tablas, aprovechando las claves y relaciones definidas en la base de datos. Este tipo de consultas resulta esencial para integrar datos dispersos y obtener resultados coherentes que representen la realidad del sistema de información.
    p.mb-4(data-aos="fade-down") A continuación, se presentan los principales tipos de JOIN, junto con su función y ejemplos prácticos que ilustran cómo se utilizan para combinar registros de múltiples tablas dentro de una consulta:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C09.p-4(titulo="INNER JOIN")
                .row.justify-content-center
                  p.mb-4 Devuelve únicamente los registros que tienen coincidencia en ambas tablas relacionadas, según la condición establecida. Se utiliza cuando se requiere información que exista simultáneamente en las dos tablas.
                  .cajon.C08.px-4.py-2.mb-4
                    p.mb-0 SELECT c.nombre, p.pedido
                    p.mb-0 FROM clientes c
                    p.mb-0 INNER JOIN pedidos p ON c.id = p.cliente_id;
              .tarjeta.tarjeta--C09.p-4(titulo="LEFT JOIN")
                .row.justify-content-center
                  p.mb-4 Devuelve todos los registros de la tabla ubicada a la izquierda de la consulta y solo los registros coincidentes de la tabla derecha. Cuando no hay coincidencia, los campos de la tabla derecha se muestran con valores nulos.
                  .cajon.C08.px-4.py-2.mb-4
                    p.mb-0 SELECT c.nombre, p.pedido
                    p.mb-0 FROM clientes c
                    p.mb-0 LEFT JOIN pedidos p ON c.id = p.cliente_id;
              .tarjeta.tarjeta--C09.p-4(titulo="RIGHT JOIN")
                .row.justify-content-center
                  p.mb-4 Devuelve todos los registros de la tabla ubicada a la derecha de la consulta y únicamente los registros coincidentes de la tabla izquierda. Los campos sin correspondencia se completan con valores nulos.
                  .cajon.C08.px-4.py-2.mb-4
                    p.mb-0 SELECT *
                    p.mb-0 FROM clientes
                    p.mb-0 RIGHT JOIN pedidos;
              .tarjeta.tarjeta--C09.p-4(titulo="FULL OUTER JOIN")
                .row.justify-content-center
                  p.mb-4 Devuelve todos los registros de ambas tablas, tanto los coincidentes como los no coincidentes. Se utiliza cuando se requiere una visión completa de la información contenida en ambas tablas.
                  .cajon.C08.px-4.py-2.mb-4
                    p.mb-0 SELECT *
                    p.mb-0 FROM clientes
                    p.mb-0 FULL OUTER JOIN pedidos;
              .tarjeta.tarjeta--C09.p-4(titulo="CROSS JOIN")
                .row.justify-content-center
                  p.mb-4 Genera todas las combinaciones posibles entre los registros de las tablas involucradas, produciendo un producto cartesiano. Su uso debe ser controlado debido al alto volumen de resultados que puede generar.
                  .cajon.C08.px-4.py-2.mb-4
                    p.mb-0 SELECT * FROM clientes
                    p.mb-0 CROSS JOIN productos;
          .col-lg-3.col-sm-4.col-10.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img07.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-9.col-12
        .tarjeta.tarjeta--C05.p-4.mb-0
          p.text-center.mb-0(data-aos="fade-down") El uso de JOIN es clave en sistemas empresariales donde la información está distribuida en múltiples tablas.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Sentencias de agregación
    p(data-aos="fade-down") Las sentencias de agregación en SQL permiten resumir y analizar grandes volúmenes de datos, transformando múltiples registros individuales en información consolidada. Estas operaciones son fundamentales en contextos donde se requiere obtener promedios, totales, conteos o valores extremos para apoyar procesos de análisis y toma de decisiones.
    p.mb-4(data-aos="fade-down") A través de las funciones de agregación y de cláusulas, es posible organizar, filtrar y ordenar los resultados de manera estructurada. Estas sentencias no alteran los datos originales, sino que facilitan su interpretación mediante consultas que agrupan y sintetizan la información almacenada en las tablas. Dichas sentencias se dividen en:
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Funciones básicas
        p.mb-4(data-aos="fade-down") Las funciones básicas de agregación operan sobre un conjunto de registros y devuelven un único valor como resultado, calculado a partir de los datos contenidos en una columna específica.
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            .cajon.C02.px-4.py-2.mb-0
              ul.lista-ul--color
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 MAX(): devuelve el valor más alto de una columna.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 MIN(): devuelve el valor más bajo de una columna.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 AVG(): calcula el promedio de los valores numéricos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 SUM(): suma los valores de una columna numérica.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-1 COUNT(): cuenta la cantidad de registros.
            .cajon.C08.px-4.py-3.mb-4
              p.mb-0 SELECT AVG(salario) FROM empleados;
          .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img08.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 GROUP BY
        p.mb-4(data-aos="fade-down") La cláusula GROUP BY permite agrupar registros que comparten un mismo valor en una o más columnas, de modo que las funciones de agregación se apliquen a cada grupo y no al conjunto total de datos.
        .cajon.C08.px-4.py-3.mb-4
          p.mb-0 SELECT departamento, COUNT(*)
          p.mb-0 FROM empleados
          p.mb-0 GROUP BY departamento;
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-7
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 HAVING
        p.mb-4(data-aos="fade-down") La cláusula HAVING se utiliza para filtrar los resultados después de aplicar una agrupación, es decir, actúa sobre los grupos generados por GROUP BY y no sobre los registros individuales.
        .cajon.C08.px-4.py-3.mb-4
          p.mb-0 SELECT departamento, COUNT(*)
          p.mb-0 FROM empleados
          p.mb-0 GROUP BY departamento
          p.mb-0 HAVING COUNT(*) > 5;
      .col.col-auto.col-lg-3
        figure
          img(src='@/assets/curso/tema3/img09.svg', alt='Imagen decorativa')
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-9
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 ORDER BY
        p.mb-4(data-aos="fade-down") La cláusula ORDER BY permite ordenar los resultados finales de una consulta en forma ascendente o descendente, facilitando la lectura y el análisis de la información obtenida.
        .cajon.C08.px-4.py-3.mb-4
          p.mb-0 SELECT * FROM empleados
          p.mb-0 ORDER BY salario DESC;
        .row.justify-content-center
          .col.col-auto.col-lg-3
            figure
              img(src='@/assets/curso/tema3/img10.jpg', alt='Imagen decorativa')
          .col.col-auto.col-lg-9
            p.mb-2(data-aos="fade-down") Importante:
            ul.lista-ul--color.mb-2
              li.mb-0
                i.lista-ul__vineta
                h5.mb-0 WHERE filtra registros.
              li.mb-0
                i.lista-ul__vineta
                h5.mb-0 HAVING filtra agrupaciones.
            p.mb-2(data-aos="fade-down") La manipulación y consulta de datos mediante SQL representa el núcleo operativo de las bases de datos, permitiendo transformar información en conocimiento útil. El dominio de estas herramientas facilita la construcción de consultas eficientes, el análisis de datos y la toma de decisiones basadas en información confiable.
            p.mb-0(data-aos="fade-down") Basado en lo anterior, se presenta el siguiente diagrama que resume todo el proceso de ejecución de consulta:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Proceso de manipulación y consulta de datos en SQL
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/tema3/img11.svg', alt='Figura 3 que relaciona un diagrama de flujo que ilustra el proceso de ejecución de una consulta SQL, iniciando desde una tabla de datos, pasando por operaciones como selección de columnas (SELECT), filtrado (WHERE), combinación de tablas (JOIN), agrupación de datos (GROUP BY), aplicación de funciones (SUM, AVG, MAX) y ordenamiento (ORDER BY), hasta llegar a la obtención de resultados.')
      .col-12
        figure.movil
          img.mb-4(src='@/assets/curso/tema3/img12.svg', alt='Figura 3 que relaciona un diagrama de flujo que ilustra el proceso de ejecución de una consulta SQL, iniciando desde una tabla de datos, pasando por operaciones como selección de columnas (SELECT), filtrado (WHERE), combinación de tablas (JOIN), agrupación de datos (GROUP BY), aplicación de funciones (SUM, AVG, MAX) y ordenamiento (ORDER BY), hasta llegar a la obtención de resultados.')
</template>

<script>
export default {
  name: 'Tema3',
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
