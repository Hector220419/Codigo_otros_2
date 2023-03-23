//Ubicaciones de los inputs para cada elemento
const nombre = document.getElementById("name");
const edad = document.getElementById("age"); 
const nacionalidad = document.getElementById("nationality");
const botonAgregar = document.getElementById("AgregarInvitado");

//Ubicacion de donde se van a agregar los invitados
const lista = document.getElementById("lista");

//Se crea un evento para agregar en el boton
botonAgregar.addEventListener("click",(e)=>{
  
  if(inputValues()){
    agregarInvitado();
  }
  e.preventDefault();
})

 // Validacion de requerimientos 
function inputValues(){
  let nombreLista = nombre.value;
  let edadLista = edad.value;
  let correctInputs = false;
  let correctName = false;
  let correctAge = false;

      //revisa si el input esta vacio y se muestra error si es igual 0
    if (nombreLista.length === 0) {
      nombre.classList.add("error");
    }
    //se revisa si la edad es menor de 18 o mayor de 120 y se muestra error
    if (edadLista < 18 || edadLista > 120) {
      edad.classList.add("error");
    }
    //Si el nombre existe, y la edad es correcta, se agrega el invitado a la lista con la funcion agregarInvitado()
    if (nombreLista.length > 0) {
      nombre.classList.remove("error");
      correctName=true;
    }
    if (edadLista >= 18  && edadLista <= 120) {
      edad.classList.remove("error");
      correctAge=true;
    }
    if (correctName && correctAge) {
      correctInputs=true;
    }
    return correctInputs;
}

// Se crea un arreglo para el boton delete, asi como su funcion propiamente
let deleteButons = document.querySelectorAll(".delete");
function addDelete(){

  //Se manda a llamar cada que se ejecuta la funcion delete
  deleteButons = document.querySelectorAll(".delete");

  // Se crea un evento para eliminar al invitado cada que se mande a llamar la funcion nueva
  deleteButons.forEach(button=>{
    button.addEventListener("click", eliminarInvitado);
  })

}


function eliminarInvitado(){
  //Se busca el div mas cercano y se elimina
  this.closest("div").remove();
}

//Funcion para agregar invitados
function agregarInvitado(){
  // Se accede a los valores del input proporcionado al inicio
  let nombreLista = nombre.value;
  let edadLista = edad.value;
  let nacionalidadLista = nacionalidad.value;

  if (nacionalidadLista === "ar") {
    nacionalidadLista = "Argentina"
  }
  else if (nacionalidadLista === "mx") {
    nacionalidadLista = "Mexicana"
  }
  else if (nacionalidadLista === "vnzl") {
    nacionalidadLista = "Venezolana"
  }
  else {
    nacionalidadLista = "Peruana"
  }

  // Tarjeta para agregar un nuevo invitado
  lista.innerHTML += 
  `<div class="elemento-lista">Nombre: ${nombreLista}. <br> 
  Edad: ${edadLista}. <br> 
  Nacionalidad: ${nacionalidadLista}. <br> 
  <button class="delete">Borrar invitado</button>
  </div>
 `;

 //Se llama la funcion para que se pueda borrar la tarjeta creada
 addDelete();
  
};