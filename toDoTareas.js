function agregarTarea(){
     //Capturamos la tarea a listar//
const nuevaTarea=document.getElementById("nuevaTarea");
const textoTarea=nuevaTarea.value.trim();

//*Validamos las tareas vacias*//
if(textoTarea===''){
     alert('Agregue una tarea');
     return;
}

//Capturamos el listado de tareas//
const listadoTareas=document.getElementById('listadoTareas');

//Creamos un nuevo elemento <li></li>//
const li=document.createElement('li');
li.innerHTML=`<span>${textoTarea}</span>
                <button class="borrar-btn" onClick="borrarTarea(this)">Eliminar </button>`;

listadoTareas.appendChild(li);

nuevaTarea.value='';
}

function borrarTarea(elementoTarea){
elementoTarea.parentElement.remove();


}

   