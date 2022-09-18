/*-------------------------------------FORM---------------------------------------*/

let btnmodal7=document.getElementById("terminos");

//Acceder ventana modal
let venmodal7=document.getElementById("ventanaModal-form");

//Acceder al botón Cerrar de la ventana modal
let cermodal7=document.querySelector(".cerrarModal-form");

btnmodal7.addEventListener("click",()=>{
    venmodal7.style.display="block";
})

cermodal7.addEventListener("click",()=>{
    venmodal7.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal7){
    venmodal7.style.display="none"; 
}
})
