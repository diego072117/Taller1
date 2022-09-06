let btn=document.getElementById("btn");

function instructores(){

    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let area=document.getElementById("materia").value
    const res = document.getElementById('res');
    
    if  (nombre == 1 && apellido== 1 && area==1){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else if  (nombre == 1 && apellido== 1 && area==8){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else if  (nombre == 2 && apellido== 2 && area==2){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else if  (nombre == 3 && apellido== 3 && area==3){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else if  (nombre == 4 && apellido== 4 && area==4){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem');
    }
    else if  (nombre == 5 && apellido== 5 && area==5){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else if  (nombre == 5 && apellido== 5 && area==5){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '1rem');
    }
    else if  (nombre == 6 && apellido== 6 && area==6){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else if  (nombre == 7 && apellido== 7 && area==7){

        let img = ` <i class="fa-solid fa-circle-check"></i><p>Es correcto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }
    else {
   
        let img = `<i class="fa-solid fa-circle-xmark"></i><p>Es incorrecto</p>`
        res.innerHTML = img;
        res.style.setProperty('font-size', '2.5rem')
    }

}

btn.addEventListener('click', instructores)

