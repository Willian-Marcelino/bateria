function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

// Lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//Variaveis


//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;   

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if (evento.code ==='Space' || evento.code ==='Enter'){
          tecla.classList.add('ativa');  
        }
        
           }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

