let btn = document.getElementById('btn')


function perimetroCuadrado(){

    let res = document.getElementById("res")
    let lado = parseInt(document.getElementById('lado').value)

    let resultado = lado*4


    let inser = `<p>El perimetro del cuadrado es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btn.addEventListener('click',perimetroCuadrado)



let btnArea = document.getElementById('btn-area')


function areaCuadrado(){

    let res = document.getElementById("res1")
    let base = parseInt(document.getElementById('cua-base').value)
    let altura = parseInt(document.getElementById('cua-altura').value)

    let resultado = base*altura


    let inser = `<p>El area del cuadrado es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btnArea.addEventListener('click',areaCuadrado)


/*----------------------------------RECTANgULO----------------------------------------*/

let btnRec = document.getElementById('btn-rec')


function perimetroRectangulo(){

    let res = document.getElementById("res2")
    let base = parseInt(document.getElementById('rec-base').value)
    let altura = parseInt(document.getElementById('rec-altura').value)

    let resultado =  (base*2)+(altura*2)


    let inser = `<p>El perimetro del rectangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btnRec.addEventListener('click',perimetroRectangulo)



let btnRecArea = document.getElementById('btn-rec-area')


function areaRectangulo(){

    let res = document.getElementById("res3")
    let base = parseInt(document.getElementById('rec-base-area').value)
    let altura = parseInt(document.getElementById('rec-altura-area').value)

    let resultado =  base*altura


    let inser = `<p>El area del rectangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btnRecArea.addEventListener('click',areaRectangulo)
















