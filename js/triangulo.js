let btn = document.getElementById("btn")

function triangulo(){
    let base=parseInt(document.getElementById("base").value);
    let uno=parseInt(document.getElementById("lado-one").value);
    let dos=parseInt(document.getElementById("lado-two").value);
    let res = document.getElementById("res")

    if(base==uno && base==dos ){

        let resultado = `<p>El triangulo es equilatero</p>`
        res.innerHTML = resultado
        res.style.setProperty('font-size', '15px')
    }
    else if(base<uno && base==dos || base<dos && base==uno || base>uno && base==dos || base>dos && base==uno){
        
        let resultado = `<p>El triangulo es Isósceles </p>`
        res.innerHTML = resultado
        res.style.setProperty('font-size', '15px')
    }
    else if(base!=uno && base!=dos ){
   
        let resultado = `<p>El triangulo es Escaleno</p>`
        res.innerHTML = resultado
        res.style.setProperty('font-size', '15px')
    }
    else{
        alert('error 34')
    }
}

btn.addEventListener('click',triangulo)