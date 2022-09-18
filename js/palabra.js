let btn = document.getElementById("btn")


function calcular(){

    let palabra = document.getElementById("palabra").value
    let opcion = document.getElementById("opcion").value


    
if(opcion==1){
    let longitud = palabra.length

    Swal.fire(`La Longitud de la palabra es: ${longitud}`)
}
if(opcion==2){
    let Mayus = palabra.toUpperCase()

    Swal.fire(Mayus)
}
if(opcion==3){
    let min = palabra.toLowerCase()

    Swal.fire(min)  
}
if(opcion==4){
    let caracter = palabra.charAt(0)

    Swal.fire(`La primera letra es: ${caracter}`)
   
}
}


btn.addEventListener('click', calcular)

