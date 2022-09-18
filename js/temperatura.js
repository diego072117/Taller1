let btn = document.getElementById("btn")

function temperatura(){
    let tem = parseInt(document.getElementById("temperatura").value)
    let de = document.getElementById("de").value
    let para = document.getElementById("para").value


    if(de==1 && para==1){
        Swal.fire(`No se pude convertir de por que son del mismo tipo`)

    
    }
    if(de==2 && para==2){
        Swal.fire(`No se pude convertir de por que son del mismo tipo`)
    }
    if(de==3 && para==3){
        Swal.fire(`No se pude convertir de por que son del mismo tipo`)
    }

    
    if(de==1 && para==2){
        let temp=((tem-32)/1.8);
     
        Swal.fire(`La convercion de Fahrenheit a Celsius es de: ${temp}`)
  
    }
    if(de==1 && para==3){
        let temp=((tem-32)*5/9)+273.15

        Swal.fire(`La convercion de Fahrenheit a Kelvin es de:${temp}`)
 
    }
    if(de==2 && para==1){
        let temp=(tem*9/5)+32;
    
        Swal.fire(`La convercion de Celsius a Fahrenheit es de:${temp}`)
   
    }
    if(de==2 && para==3){
        let temp=tem+273.15;
       
        Swal.fire(`la convercion de Celsius a kelvin es de:${temp}`)
   
    }
    if(de==3 && para==1){
        let temp=((tem-273.15)*9/5+32)+32
        
        Swal.fire(`la convercion de kelvin a Fahrenheit es de:${temp}`)

    }
    if(de==3 && para==2){
        let temp=tem-273.15
        
        Swal.fire(`la convercion de kelvin a Celsius es de:  ${temp}`)
  
    }

}

btn.addEventListener('click', temperatura)