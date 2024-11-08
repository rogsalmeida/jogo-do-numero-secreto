


let tentativas = 1;
let listadenumerossorteados = [];
let numeroSecreto = gerarNumeroAleatorio();



    function exibirTextoNaTela(tag,texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }
    function exibirmensageminicial(){
    exibirTextoNaTela('H1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
    }

    exibirmensageminicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

if(chute=numeroSecreto){
    exibirTextoNaTela('h1','Acertou!!!!');
    let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
    let mensagemTentativas = `Parabéns, Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`
    exibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if(chute>numeroSecreto){
        exibirTextoNaTela('p',`Você Errou! o numero é menor que ${chute}`);
    }
    else {
        exibirTextoNaTela('p',`Você Errou! o numero é maior que ${chute}`);
    }
    tentativas ++;
    limparCampo()
 }
}
function limparCampo(){
    chute=document.querySelector('input');
    chute.value= '';
}
    function gerarNumeroAleatorio(){
        let numeroEscolhido = parseInt(Math.random()*3+1);
        let quantidadeDeElementosNaLista = listadenumerossorteados.length;

        if(quantidadeDeElementosNaLista == 3 ){
            listadenumerossorteados = []
        }
    if (listadenumerossorteados.includes(numeroEscolhido))
        {
        return  gerarNumeroAleatorio();
    }else{
        listadenumerossorteados.push(numeroEscolhido)
        console.log(listadenumerossorteados)
       return numeroEscolhido
    }
    }
    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirmensageminicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }