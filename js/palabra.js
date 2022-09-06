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
    let Mayus = palabra.toUpperCase()

    let resultado = `<p>${Mayus}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
   
}
if(opcion==3){
    let min = palabra.toLowerCase()

    let resultado = `<p>${min}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
    
}
if(opcion==4){
    let caracter = palabra.charAt(0)

    let resultado = `<p>La primera letra es: ${caracter}</p>`
    res.innerHTML = resultado
    res.style.setProperty('font-size', '15px');
    
}
}


btn.addEventListener('click', calcular)

