//hacemos una funcion flecha pra buscar la materia, materia sera pasada como parametro

const buscarMateria = (materia)=>{
    //hacemos un vector o array asociativo, sintaxis similar a las estructuras en C
    listaMaterias = {
        fisica: [" Juan", " Luis", " Fer", " Dani"],         //cada elemento del vector contendra un array con la info de los estudiantes
        español: [" Juan", " Luis", " Dani", " Miguel", " Sofia", " Berna"],
        biologia: [" Juan", " Luis", " Fer", " Dani", " Miguel"],
        matematicas: [" Luis", " Fer", " Dani", " Miguel", " Sofia", " Berna"],
    }

    if(listaMaterias[materia] != undefined){
        return [listaMaterias[materia], materia];
    }else{
        return false;
    }
}

let busqueda = buscarMateria("matematicas");

if(busqueda != false){
    document.write(`La clase ${busqueda[1]} tiene estos alumnos <b style='color: red'>${busqueda[0]}</b> <br>`);
}

//Mostrar el profesor, que sera declarado como el primer elemento de cada variable materia y sus alumnos

function mostrarMaestros(materia){
    let encontrarMateria = buscarMateria(materia);

    if(encontrarMateria != false){
        let profesor = encontrarMateria[0][0];
        let alumnos = encontrarMateria[0];
        alumnos.shift();
        document.write(`<br>El profesor de la materia ${encontrarMateria[1]} es: ${profesor}<br>
        Los alumnos son: ${alumnos} <br>`);
    }else{
        document.write("No se encontro la materia");
    }
}

mostrarMaestros("fisica");
mostrarMaestros("español");
mostrarMaestros("biologia");
mostrarMaestros("matematicas");