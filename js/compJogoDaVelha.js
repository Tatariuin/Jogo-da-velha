var jogo = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
//True para x e false para o circulo
var jogador = true;
var vencedor = null;
var ContainerTabela = document.querySelector("#tabela")
var tabela = document.querySelector("#pontuacao");
var somDeJogada = document.querySelector("#jogada");

var rodada = 1;
var pont_x = 0;
var pont_bola = 0;
function realizaJogada(linha, coluna){
    if(jogo[linha][coluna] == null){
        
        jogo[linha][coluna] = jogador;
        var campoDeJogada = document.getElementById("_"+linha+"x"+coluna);
        if(jogador == true){
            campoDeJogada.style.backgroundImage = "url('img/x.png')";
        }
        else{
            campoDeJogada.style.backgroundImage = "url('img/bola.png')";
        }
        mudaJogador();
        if(jogadorVitorioso() == true){
            tabelaDePontuacao();
            terminaRodada();
        }
        somDeJogada.play()
        
    }
}
function tabelaDePontuacao(){
    
        ContainerTabela.style.display = "block";
        if(vencedor == true){
            pont_x = 1;
            pont_bola = 0;
        }
        else{
            pont_bola = 1;
            pont_x = 0;
        }
        tabela.innerHTML += "<tr> <td>"+rodada+"</td> <td class = 'xix'>"+pont_x+"</td> <td class = 'circ'>"+pont_bola+"</td> </tr>"
        rodada += 1;

}
function terminaRodada(){
    for(var i = 0; i < jogo.length;i++){
        for(var c = 0; c < jogo[0].length;c++){
            if(jogo[i][c] == null){
                jogo[i][c] = vencedor;
            }
        }
    }
}
function mudaJogador(){
    jogador = !jogador;
}
function primeiraLinhaVitoria(){
    
    for(var i = 1; i < jogo[0].length;i++){
        if(jogo[0][0] != jogo[0][i]||jogo[0][i] == null){
            return false;
        }
    }
    return true;
}
function segundaLinhaVitoria(){
    for(var i = 1; i < jogo[0].length;i++){
        if(jogo[1][0] != jogo[1][i]||jogo[1][i] == null){
            return false;
        }
    }
    return true;
}
function terceiraLinhaVitoria(){{
    for(var i = 1; i < jogo[0].length;i++){
        if(jogo[2][0] != jogo[2][i]||jogo[2][i] == null){
            return false;
        }
    }
    return true;
}
}
function primeiraColunaVitoria(){
    for(var i = 1; i < jogo.length;i++){
        if(jogo[0][0] != jogo[i][0]||jogo[i][0] == null){
            return false;
        }
    }
    return true;
}
function segundaColunaVitoria(){
    for(var i = 1; i < jogo.length;i++){
        if(jogo[0][1] != jogo[i][1]||jogo[i][1] == null){
            return false;
        }
    }
    return true;
}
function terceiraColunaVitoria(){
    for(var i = 1; i < jogo.length;i++){
        if(jogo[0][2] != jogo[i][2]||jogo[i][2] == null){
            return false;
        }
    }
    return true;
}
function diagonalPrincipalVitoria(){
    for(var i = 1; i < jogo.length;i++){
        if(jogo[0][0] != jogo[i][i]||jogo[i][i] == null){
            return false;
        }
    }
    return true;
}
function diagonalSecundariaVitoria(){
    for(var i = 1; i < jogo.length;i++){
        if(jogo[0][2] != jogo[i][jogo[0].length - 1 - i]||jogo[i][jogo[0].length - 1 - i] == null){
            return false;
        }
    }
    return true;
}
function jogadorVitorioso(){
    if(primeiraLinhaVitoria() == true){
        vencedor = jogo[0][0]
        return true;
    }
    else if(segundaLinhaVitoria() == true){
        vencedor = jogo[1][0]
        return true;
    }
    else if(terceiraLinhaVitoria() == true){
        vencedor = jogo[2][0]
        return true;
    }
    else if(primeiraColunaVitoria() == true){
        vencedor = jogo[0][0]
        return true;
    }
    else if(segundaColunaVitoria() == true){
        vencedor = jogo[0][1]
        return true;
    }
    else if(terceiraColunaVitoria() == true){
        vencedor  = jogo[0][2]
        return true;
    }
    else if(diagonalPrincipalVitoria() == true){
        vencedor = jogo[0][0]
        return true;
    }
    else if(diagonalSecundariaVitoria() == true){
        vencedor = jogo[0][2]
        return true;
    }
    return false;
}
function limpaMatriz(){
    for(var i = 0; i < jogo.length;i++){
        for(var c = 0; c < jogo[0].length;c++){            
            jogo[i][c] = null;           
        }
    }
}
function novaRodada(){
    var espacos = document.querySelectorAll(".espacos");

    for(var i = 0; i < espacos.length;i++){
        espacos[i].style.backgroundImage = "none";
    }
    mudaJogador();
    
    limpaMatriz()
    ContainerTabela.style.display = "none";
}
function mostraVencedor(){
    var x = document.querySelectorAll(".xix");
    var c = document.querySelectorAll(".circ");
    var resultX = 0;
    var resultCirc = 0;

    for(var i = 0;i < x.length;i++){
        resultX += parseInt(x[i].textContent);
    }
    
    for(var i = 0;i < c.length;i++){
        resultCirc += parseInt(c[i].textContent);
    }
    if(resultX > resultCirc){
        alert("X venceu o jogo");
    }
    else if(resultX < resultCirc){
        alert("Circulo venceu o jogo");
    }
    else{
        alert("O jogo empatou");
    }
}
function novoJogo(){
    mostraVencedor();
    novaRodada();
    tabela.innerHTML = "<tr><th>Rodada</th><th id='x'></th>   <th id='bola'></th></tr>";
    rodada = 1;
    
}