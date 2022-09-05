let btn = document.getElementById("btn")


function calcular(){

    let palabra = document.getElementById("palabra").value
    let opcion = document.getElementById("opcion").value
    let res = document.getElementById("res")
    
if(opcion==1){
    let longitud = palabra.length

    let resultado = `<p>La Longitud de la palabra es: ${longitud}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
}
if(opcion==2){
    let longitud = palabra.toUpperCase()

    let resultado = `<p>${longitud}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
   
}
if(opcion==3){
    let longitud = palabra.toLowerCase()

    let resultado = `<p>${longitud}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
    
}
if(opcion==4){
    let longitud = palabra.charAt(0)

    let resultado = `<p>La primera letra es: ${longitud}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
    
}
}


btn.addEventListener('click', calcular)