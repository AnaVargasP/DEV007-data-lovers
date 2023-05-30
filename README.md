# Data Lovers

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=27&pause=1000&color=07D51D&background=FFF6F700&width=435&lines=Olympic+Games+Rio+2016;Por+Ana++Vargas;+y+Cynthia+Re%C3%A1tegui)](https://git.io/typing-svg)
![Imagen text](https://cadenaser00.epimg.net/emisora/imagenes/2016/08/08/radio_san_sebastian/1470651198_373661_1470651626_noticia_normal.jpg)

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Investigación UX](#2-investigacion-ux)
- [3. Diseño de la interfaz de usuario](#3-diseño-de-la-interfaz-de-usuario-ui)
- [4. Desarrollo del proyecto](#4-desarrollo-del-proyecto)

---

## 1. Resumen del proyecto

En este proyecto construimos una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que el usuario
necesita.**
Creamos una página diseñada para que sea amigable con el usuario, fácil de entender y de rápida comprension, adaptable a laptos y celulares
**PERMITE: **

1.  Tiene una interfaz web donde se pueda visualizar
    y manipular data, filtrarla y ordenarla.

## 2. Investigación UX

Se realizó una investigación previa al desarrollo del proyecto, teniendo en cuenta las siguientes preguntas:

- ¿Quiénes son los principales usuarios de producto?

Los principales usuarios son personas cuyo interés es conocer datos relacionados a los deportistas campeones de los Juegos Olímpicos de Río 2016.

- ¿De que manera el usuario desearía, que se muestre la información?

Los usuarios desean interactuar con una página amigable, de rapido acceso y que les ahorre clikcs.

- ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Los usuarios desean conocer las disciplinas y los países que participaron en el evento, mediante botones poder ver en pantalla los datos de cada atleta que participo segun lo elegido.

- ¿Cuándo utilizan o utilizarían el producto?

Los usuarios pueden interactuar con la página en cualquier momento, ya que los datos que se van a mostrar son fijos y no varían con el tiempo.

### Historias de usuario

En función a nuestra investigación, se formularon las siguientes **Historias de Usuario**

- Historia de Usuario N°1:

"Yo como usuario deseo ver en todos los deportes de las Olimpiadas de Río 2016."
_Para qué_: Para poder conocer qué deportes existen.

- Historia de Usuario N°2:

"Yo como usuario deseo ver de manera fácil y accesible la informacion mostrada, sin tener que dar mucho recorrido a la pagina(ahorrar clikcs)."
_Para qué_: Para poder conocer las características de los deportistas destacados como: nombre, nacionalidad, edad y el evento correspondiente.

- Historia de Usuario N°3:

"Yo como usuario deseo poder ver únicamente a los atletas segun su disciplina."
_Para qué_. Para acceder de manera fácil y sencilla a la información.

## 3. Diseño de la interfaz de usuario

### Prototipo de baja fidelidad

Durante tu trabajo desarrollamos un prototipo a lapiz y papel para distribuir los requerimientos que se necesitarían cumplir en el proyecto final.

![image](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqT_hrlCZqOXBDAqw1AllnMa89dko1MX8ERI1rdKqVj2EigJSquHQNJg8_FsiND95wmTMzV_c40jHEXsDTwL6BRmRPhoDQpeo4IZcxn262zOzZgqcwH6DwIp1LW9zFS2_BGowL-tdAOveZ7vXnWFGxhsM4GSYbU2gl5G5hY118FhF95-YjClBvvIDi/s1237/b14f96ea-0468-41f2-847b-2d70bc9875a2.jpg)



### Prototipo de alta fidelidad

Se creó un prototipo final en Figma, para ello anexamos el siguiente link: https://www.figma.com/file/KDCHGclcSxDdWrZ1BNNjoD/Untitled?type=design&node-id=1-2&t=fiJDGPbfZ1VEaPPo-0

## 4. Desarrollo del proyecto

### Plan de acción

1. Nuestro plan de acción fue priorizar el estudio de Arrays y Objetos, posteriormente las funciones que nos permitan manipular la data que se nos otorgó inicialmente.
2. Realizamos el desarrollo del proyecto en función a las Historias de Usuario, para ello abordamos cada historia por Sprint.

### Testeos de usabilidad

Los testeos de usabilidad fueron indispensables en el desarrollo del proyecto, puesto que en base a ellos logramos verificar que nuestras funciones implementadas en JavaScript se ejecutaban correctamente. Cabe resaltar que se tomó una data de muestra para poder implementar test unitarios con mayor facilidad y que nos permitan verificar las exactitud de cada prueba, dado que nuestra data original es muy amplia.

**listado de problemas que detectaste a través de tests de
usabilidad**

1.  teniamos problemas con la eleccion del uso de set dentro de js, lo cual fue un problema y fue resuelto
2.  Problemas con los test al implementarlos ya que no tuvimos en cuenta el uso de mayusculas

## Checklist

- Usa VanillaJS.
- Pasa linter (`npm run pretest`)
- Pasa tests (`npm test`)
- Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
- Incluye _Definición del producto_ clara e informativa en `README.md`.
- Incluye historias de usuario en `README.md`.
- Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
- Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
- Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
- UI: Muestra lista y/o tabla con datos y/o indicadores.
- UI: Permite ordenar data por uno o más campos (asc y desc).
- UI: Permite filtrar data en base a una condición.
- UI: Es _responsive_.
