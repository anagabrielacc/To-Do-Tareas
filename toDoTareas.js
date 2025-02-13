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

li.querySelector('span').addEventListener('click',function(){
     this.parentElement.classList.toggle('completado');

})
                
listadoTareas.appendChild(li);

nuevaTarea.value='';
guardarTareasEnLocalStorage();
}

function borrarTarea(elementoTarea){
elementoTarea.parentElement.remove();

}

const inputNuevaTarea=document.getElementById('nuevaTarea');
inputNuevaTarea.addEventListener('keypress',function(tecla){
     if(tecla.key==='Enter'){agregarTarea()};
     
});

function guardarTareasEnLocalStorage(){
const tareas=[];
document.querySelectorAll('li').forEach(tarea=>{
tareas.push({
     Nombre_Tarea:tarea.querySelector('span').innerText,
     Estado_Tarea:tarea.classList.contains ('comletado') 
})

})
localStorage.setItem('tareasGuardadas, tareas');



}










   