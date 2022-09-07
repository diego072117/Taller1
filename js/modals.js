
/*--------------------------CUADRADO--------------------------------*/ 

/*Acceder al botón para abrir el modal */

let btnmodal=document.getElementById("abrirModal");

//Acceder ventana modal
let venmodal=document.getElementById("ventanaModal");

//Acceder al botón Cerrar de la ventana modal
let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none"; 
}
})

let btnmodalArea=document.getElementById("abrirModal-area");

//Acceder ventana modal
let venmodalArea=document.getElementById("ventanaModal-area");

//Acceder al botón Cerrar de la ventana modal
let cermodalArea=document.querySelector(".cerrarModal-area");

btnmodalArea.addEventListener("click",()=>{
    venmodalArea.style.display="block";
})

cermodalArea.addEventListener("click",()=>{
    venmodalArea.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodalArea){
    venmodalArea.style.display="none"; 
}
})


/*----------------------------RECTANGULO---------------------------------*/ 

let btnmodal1=document.getElementById("abrirModal-rec");

//Acceder ventana modal
let venmodal1=document.getElementById("ventanaModal-rec");

//Acceder al botón Cerrar de la ventana modal
let cermodal1=document.querySelector(".cerrarModal-rec");

btnmodal1.addEventListener("click",()=>{
    venmodal1.style.display="block";
})

cermodal1.addEventListener("click",()=>{
    venmodal1.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal1){
    venmodal1.style.display="none"; 
}
})

let btnmodal2=document.getElementById("abrirModal-rec-area");

//Acceder ventana modal
let venmodal2=document.getElementById("ventanaModal-rec-area");

//Acceder al botón Cerrar de la ventana modal
let cermodal2=document.querySelector(".cerrarModal-rec-area");

btnmodal2.addEventListener("click",()=>{
    venmodal2.style.display="block";
})

cermodal2.addEventListener("click",()=>{
    venmodal2.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal2){
    venmodal2.style.display="none"; 
}
})

