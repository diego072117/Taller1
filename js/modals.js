
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

//2

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

//2

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

/*----------------------------------TRIANGULO--------------------------------------*/

let btnmodal3=document.getElementById("abrirModal-tri");

//Acceder ventana modal
let venmodal3=document.getElementById("ventanaModal-tri");

//Acceder al botón Cerrar de la ventana modal
let cermodal3=document.querySelector(".cerrarModal-tri");

btnmodal3.addEventListener("click",()=>{
    venmodal3.style.display="block";
})

cermodal3.addEventListener("click",()=>{
    venmodal3.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal3){
    venmodal3.style.display="none"; 
}
})

//2

let btnmodal4=document.getElementById("abrirModal-tri-area");

//Acceder ventana modal
let venmodal4=document.getElementById("ventanaModal-tri1");

//Acceder al botón Cerrar de la ventana modal
let cermodal4=document.querySelector(".cerrarModal-tri-area");

btnmodal4.addEventListener("click",()=>{
    venmodal4.style.display="block";
})

cermodal4.addEventListener("click",()=>{
    venmodal4.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal4){
    venmodal4.style.display="none"; 
}
})


/*----------------------------------CIRCULO----------------------------------*/

let btnmodal5=document.getElementById("abrirModal-cir");

//Acceder ventana modal
let venmodal5=document.getElementById("ventanaModal-cir");

//Acceder al botón Cerrar de la ventana modal
let cermodal5=document.querySelector(".cerrarModal-cir");

btnmodal5.addEventListener("click",()=>{
    venmodal5.style.display="block";
})

cermodal5.addEventListener("click",()=>{
    venmodal5.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal5){
    venmodal5.style.display="none"; 
}
})

//2

let btnmodal6=document.getElementById("abrirModal-cir-area");

//Acceder ventana modal
let venmodal6=document.getElementById("ventanaModal-cir1");

//Acceder al botón Cerrar de la ventana modal
let cermodal6=document.querySelector(".cerrarModal-cir1");

btnmodal6.addEventListener("click",()=>{
    venmodal6.style.display="block";
})

cermodal6.addEventListener("click",()=>{
    venmodal6.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal6){
    venmodal6.style.display="none"; 
}
})









