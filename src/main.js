import data from "./data/athletes/athletes.js";
import {
  filtrarPaises,
  filtrarDeportes,
  filtrarAtletasPorPais,
  filtrarAtletasPorDeporte,
  ordenarAtletas,
} from "./data.js";

//constante que almacena la data
const athletes = data.athletes;

/*//funcion para mostrar  toda toda la data
function mostrarAtletas() {
  const contenedor = document.getElementById('contenedor')

  athletes.forEach(i => {

    contenedor.innerHTML += `<div class= datosAtletas>
                           <p>Name: ${i.name}</p>
                           <p>Sport: ${i.sport}</p>
                           <p>Team: ${i.team}</p>
                           <p>Medal: ${i.medal}</p>
                           </div>`
  })
}*/

//traer a los botones principales y contenedores vacios
const botonInicio = document.getElementById("botonInicio");
const botonPrincipalDeportes = document.getElementById("botonDeportes");
const botonPrincipalPaises = document.getElementById("botonPais");
const contenidoGeneral = document.getElementById("contenidoGeneral");
const contenedorDeportes = document.getElementById("contenedorDeportes");
const contenedorPaises = document.getElementById("contenedorPaises");
const contenedor = document.getElementById("contenedor");
const contenedorAtletasPorPais = document.getElementById(
  "contenedorAtletasPorPais"
);
const contenedorAtletasPorDeporte = document.getElementById(
  "contenedorAtletasPorDeporte"
);

botonInicio.addEventListener("click", () => {
  // Limpiar todos los contenedores
  contenedorPaises.innerHTML = "";
  contenedorDeportes.innerHTML = "";
  contenedorAtletasPorDeporte.innerHTML = "";
  contenedorAtletasPorPais.innerHTML = "";

  // Generar el contenido del div contenidoGeneral para poderlo mostrar cuando hagan click en inicio
  const contenidoDiv = `<div id="contenidoGeneral" class="contenidoGeneral">
      <div class="cuarentaDeportes">
          <img alt="img-principal" class="imagen-principal" src="https://trello.com/1/cards/64544665b229eb83c9d3507f/attachments/64544665b229eb83c9d350a1/previews/64544666b229eb83c9d350ad/download/image.png">
      </div>
      <div class="imagen-parrafo">
        <span class="parrafo">
          <img alt="img-rio2016" class="img-rio2016" src="https://th.bing.com/th/id/R.070262561158e9c72ff2fa7b0da265b6?rik=QSD7%2byGLzBy%2bdg&riu=http%3a%2f%2fhotsport.rs%2fwp-content%2fuploads%2f2014%2f12%2fRio-2016.jpg&ehk=CoF5O%2bUvhcWVD2Sd6L%2bXrcsCtn1SPt6eIV%2byV4CjuYQ%3d&risl=&pid=ImgRaw&r=0">
          <br>
          The 2016 Rio de Janeiro Olympic Games were a global sporting event held in Brazil of
          August 2016, in which more than 11,000 athletes from 206 countries participated, competing in 42 sports and 306
          events. They were remembered for their commitment to sustainability and social inclusion, and for the appearance
          ofnew talents and memorable moments.</span>
      </div>
  </div>`;

  // Insertar el contenido generado en el div contenidoGeneral
  contenidoGeneral.innerHTML = contenidoDiv;
});

//------------------------------------------------------------------------------------------------------------------------------
//filtrar por PAISES
function mostrarPaises() {
  const paisesUnicos = filtrarPaises(data); //llamar a la funcion del data.js

  paisesUnicos.forEach((equipo) => {
    contenedorPaises.innerHTML += `<div class="cartasPaises">
    <button class="clase-botonpais" data-pais="${equipo}">${equipo}</button>
  </div>`;
  });
}

//funcionalidad a  boton principal PAISES
botonPrincipalPaises.addEventListener("click", () => {
  contenidoGeneral.innerHTML = "";
  contenedorDeportes.innerHTML = "";
  contenedor.innerHTML = "";
  contenedorAtletasPorDeporte.innerHTML = ""; //para que los atletas no se dupliquen abajo de los botones de los deportes
  contenedorAtletasPorPais.innerHTML = ""; //para que los atletas no se dupliquen abajo de los botones de los paises
  contenedorPaises.innerHTML = ""; // para que los paises no se esten duplicando abajo los mismos botones de los paises
  mostrarPaises();

  // funcionalidad para cada boton por PAIS
  const botonesPais = document.getElementsByClassName("cartasPaises");
  for (let i = 0; i < botonesPais.length; i++) {
    botonesPais[i].addEventListener("click", function (e) {
      const pais = e.target.getAttribute("data-pais"); //obtener el pais cuando le hacen click

      mostrarAtletasPorPais(pais); //pasar pais como argumento en la llamada a la funcion
    });
  }
});

// Función para filtrar atletas por PAIS y ordenar A-Z / Z-A
function mostrarAtletasPorPais(pais) {
  const atletasFiltrados = filtrarAtletasPorPais(athletes, pais);

  contenedorPaises.innerHTML = ""; // Limpiar los botones de los paises antes de agregar los atletas filtrados

  // Generar dinámicamente el select para ordenar A-Z / Z-A
  contenedorAtletasPorPais.innerHTML += `<select id="ordenAtletasPais">
      <option disabled selected value="">Sort</option>
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
  </select>`;

  // Generar dinámicamente las tarjetas de cada atleta filtrado sin ordenar
  atletasFiltrados.forEach((atleta) => {
    contenedorAtletasPorPais.innerHTML += `<div class="datosAtletas">
      <p><strong>👤Name:</strong> ${atleta.name}</p>
      <p><strong>🤸Sport:</strong> ${atleta.sport}</p>
      <p><strong>🌍Team:</strong> ${atleta.team}</p>
      <p><strong>⌛Age:</strong> ${atleta.age}</p>
      <p><strong>🏅Medal:</strong> ${atleta.medal}</p>
    </div>`;
  });

  contenedorAtletasPorPais.addEventListener("change", (event) => {
    //agregar evento del cambio al contenedor ( cuando alguien cambia algo dentro del contenedor se ejecutara {})
    if (event.target.id === "ordenAtletasPais") {
      //señalar al select como evento objetivo del cambio
      const ordenTypePais = event.target.value; //guardamos lo que se selecciono en el select
      const atletasOrdenados = ordenarAtletas(atletasFiltrados, ordenTypePais); //llamar a la funcion para que ordene a los atletas filtrados por el valor que seleccionaron en el select

      const tarjetasAtletas =
        contenedorAtletasPorPais.querySelectorAll(".datosAtletas"); //seleccionar todas las tarjetas existentes con la clase .datosAtletas
      tarjetasAtletas.forEach((tarjeta) => {
        tarjeta.remove(); // Eliminar las tarjetas existentes, para que no se vayan acumulando al cambiar el orden
      });

      // Generar dinámicamente las nuevas tarjetas ordenadas y agregarlas al contenedor
      atletasOrdenados.forEach((atleta) => {
        contenedorAtletasPorPais.innerHTML += `<div class="datosAtletas">
          <p><strong>👤Name:</strong> ${atleta.name}</p>
          <p><strong>🤸Sport:</strong> ${atleta.sport}</p>
          <p><strong>🌍Team:</strong> ${atleta.team}</p>
          <p><strong>⌛Age:</strong> ${atleta.age}</p>
          <p><strong>🏅Medal:</strong> ${atleta.medal}</p>
        </div>`;
      });
    }
  });
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//filtrar por DEPORTES
function mostrarDeportes() {
  const deportesUnicos = filtrarDeportes(data);

  deportesUnicos.forEach((deporte) => {
    contenedorDeportes.innerHTML += `<div class="cartasDeportes">
    <button class= "clase-botondeportes" data-deporte="${deporte}"> ${deporte}</button>
  </div>`;
  });
}

//funcionalidad a  boton principal DEPORTES
botonPrincipalDeportes.addEventListener("click", () => {
  contenidoGeneral.innerHTML = "";
  contenedorPaises.innerHTML = "";
  contenedor.innerHTML = "";
  contenedorAtletasPorPais.innerHTML = "";
  contenedorAtletasPorDeporte.innerHTML = "";
  contenedorDeportes.innerHTML = "";
  mostrarDeportes();

  //funcionalidad por cada boton por DEPORTE
  const botonesDeportes = document.getElementsByClassName("cartasDeportes");
  for (let i = 0; i < botonesDeportes.length; i++) {
    botonesDeportes[i].addEventListener("click", function (e) {
      const deporte = e.target.getAttribute("data-deporte"); //obtener el DEPORTE cuando le hacen click

      mostrarAtletasPorDeporte(deporte); //pasar deporte como argumento en la llamada a la funcion
    });
  }
});

//funcion para filtrar atletas por DEPORTE y ordenar A-Z / Z-A
function mostrarAtletasPorDeporte(deporte) {
  const atletasFiltradosPorDeporte = filtrarAtletasPorDeporte(
    athletes,
    deporte
  );

  contenedorDeportes.innerHTML = ""; // Limpiar los botones de los deportes antes de agregar los atletas filtrados

  // Generar dinámicamente el select para ordenar A-Z / Z-A
  contenedorAtletasPorDeporte.innerHTML += `<select id="ordenAtletasDeportes">
      <option disabled selected value="">Sort</option>
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
  </select>`;

  //generar dinamicamente las tarjetas de cada atleta filtrado sin ordenar
  atletasFiltradosPorDeporte.forEach((atleta) => {
    contenedorAtletasPorDeporte.innerHTML += `<div class= datosAtletas >
      <p><strong>👤Name:</strong> ${atleta.name}</p>
      <p><strong>🤸Sport:</strong> ${atleta.sport}</p>
      <p><strong>🌍Team:</strong> ${atleta.team}</p>
      <p><strong>⌛Age:</strong> ${atleta.age}</p>
      <p><strong>🏅Medal:</strong> ${atleta.medal}</p>
    </div>`;
  });

  contenedorAtletasPorDeporte.addEventListener("change", (event) => {
    //agregar evento del cambio al contenedor ( cuando alguien cambia algo dentro del contenedor se ejecutara {})
    if (event.target.id === "ordenAtletasDeportes") {
      //señalar al select como evento objetivo del cambio
      const OrdenTypeDeportes = event.target.value; //guardamos lo que se selecciono en el select
      const atletasOrdenadosPorDeporte = ordenarAtletas(
        atletasFiltradosPorDeporte,
        OrdenTypeDeportes
      ); //llamar a la funcion para que ordene a los atletas filtrados por el valor que seleccionaron en el select

      const tarjetasAtletasDeportes =
        contenedorAtletasPorDeporte.querySelectorAll(".datosAtletas"); //seleccionar todas las tarjetas existentes con la clase .datosAtletas
      tarjetasAtletasDeportes.forEach((tarjeta) => {
        tarjeta.remove(); // Eliminar las tarjetas existentes, para que no se vayan acumulando al cambiar el orden
      });

      //generar dinamicamente las nuevas tarjetas ordenadas y agregarlas al contenedor
      atletasOrdenadosPorDeporte.forEach((atleta) => {
        contenedorAtletasPorDeporte.innerHTML += `<div class= datosAtletas >
          <p><strong>👤Name:</strong> ${atleta.name}</p>
          <p><strong>🤸Sport:</strong> ${atleta.sport}</p>
          <p><strong>🌍Team:</strong> ${atleta.team}</p>
          <p><strong>⌛Age:</strong> ${atleta.age}</p>
          <p><strong>🏅Medal:</strong> ${atleta.medal}</p>
        </div>`;
      });
    }
  });
}
