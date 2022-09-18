let btn = document.getElementById("btn")

function triangulo(){
    let base=parseInt(document.getElementById("base").value);
    let uno=parseInt(document.getElementById("lado-one").value);
    let dos=parseInt(document.getElementById("lado-two").value);


    if(base==uno && base==dos ){

        Swal.fire(`El triangulo es equilatero`)

    }
    else if(base<uno && base==dos || base<dos && base==uno || base>uno && base==dos || base>dos && base==uno){
        
        Swal.fire(`El triangulo es Isósceles `)
   
    }
    else if(base!=uno && base!=dos ){
   
        Swal.fire(`El triangulo es Escaleno`)
  
    }
    else{
        Swal.fire('error 34')
    }
}

btn.addEventListener('click',triangulo)