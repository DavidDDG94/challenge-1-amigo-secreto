// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Funcion para limpiar input
function limpiarinput(elemento){
    caja = document.querySelector(elemento).value = '';
}

//Funcion para agregar amigos al array
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;

    if(amigo === ''){
        alert('Por favor, inserte un nombre.');
        return;
    } else{
            if(amigos.includes(amigo)){
                alert('El amigo ya existe en la lista.');
            } else{
                amigos.push(amigo);
                console.log(amigos);
                console.log(typeof (amigo));
            }
        //Limpiar input
        limpiarinput('#amigo');    
    }
    listarAmigos();
}

//Funcion para mostrar lista de amigos agregados
function listarAmigos(){
    let lista = document.getElementById('listaAmigos');   
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const li = document.createElement("li");
        // Asignar el nombre del amigo al contenido del <li>
        li.textContent = amigos[i];
        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

//Funcion para sortear amigo secreto
function sortearAmigo(){
    //Verificaión de que existan amigos en la lista
    if(amigos.length === 0){
        alert('No hay amigos en la lista.');
        return;
    } else{
        //Sorteo de amigo secreto
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        console.log(amigoSecreto);
        //Mostrar amigo secreto
        document.getElementById('resultado').innerHTML = amigoSecreto;
    }
}