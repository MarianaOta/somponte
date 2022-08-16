//criação da função que executará o som 
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();// faz o áudio tocar

}//console.log(tocaSomPom) //apenas para logar o trecho
//abaixo capturei o botão ".tecla_pom" e após ao clicar, executará a função chamada
//document.querySelector('.tecla_pom').onclick = tocaSomPom;


const listaTeclas = document.querySelectorAll('.tecla');//referencia todos os botoes

let contador = 0; // contador de teclas, numero de posicoes = array

while (contador < listaTeclas.length) {
    const tecla = listaTeclas[contador]
    const instrumento = tecla.classList[1];
    console.log(instrumento);
const idAudio = `#som_${instrumento}`

    listaTeclas[contador].onclick = function() {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador)
    
}


