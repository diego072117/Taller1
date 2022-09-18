let btn=document.getElementById("btn");

function instructores(){

    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let area=document.getElementById("materia").value

    
    if  (nombre == 1 && apellido== 1 && area==1){

        Swal.fire(` <i class="fa-solid fa-circle-check"></i>Es correcto`)
    
  
    }
    else if  (nombre == 1 && apellido== 1 && area==8){

        Swal.fire(` <i class="fa-solid fa-circle-check"></i>Es correcto`)

    }
    else if  (nombre == 2 && apellido== 2 && area==2){

        Swal.fire(`<i class="fa-solid fa-circle-check"></i>Es correcto`)

    }
    else if  (nombre == 3 && apellido== 3 && area==3){

        Swal.fire(` <i class="fa-solid fa-circle-check"></i>Es correcto`)

    }
    else if  (nombre == 4 && apellido== 4 && area==4){

        Swal.fire(`<i class="fa-solid fa-circle-check"></i>Es correcto`)
  
    }
    else if  (nombre == 5 && apellido== 5 && area==5){

        Swal.fire(`<i class="fa-solid fa-circle-check"></i>Es correcto`)
 
    }
    else if  (nombre == 5 && apellido== 5 && area==5){

        Swal.fire(`<i class="fa-solid fa-circle-check"></i>Es correcto`)

    }
    else if  (nombre == 6 && apellido== 6 && area==6){

        Swal.fire(` <i class="fa-solid fa-circle-check"></i>Es correcto`)

    }
    else if  (nombre == 7 && apellido== 7 && area==7){

        Swal.fire(` <i class="fa-solid fa-circle-check"></i>Es correcto`)

    }
    else {
   
        Swal.fire(`<i class="fa-solid fa-circle-xmark"></i>Es incorrecto`)
  
    }

}

btn.addEventListener('click', instructores)

