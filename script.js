//requisitos 1, 2 e 3 ------------------------------------------------------------------------------
function criaCores (arrayDeCores) {
    let colorPalette = document.getElementById("color-palette");
    for (cor of arrayDeCores ){
        let div = document.createElement("div");
        div.classList.add("color"); 
        div.id = cor;
        div.style.backgroundColor = cor
        colorPalette.appendChild(div)
    }
}

// requisito 4 e 5 ------------------------------------------------------------------------------
function adicionaPixelBoard (compri, alt){

    let pixelBoard = document.getElementById("pixel-board");
    let comprimento = compri;
    let altura = alt;
    
    for (let al = 0; al < altura ; al += 1) {
        let linha = document.createElement("div");
        linha.id = "linha"
        for (let cp = 0; cp < comprimento ; cp += 1) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            linha.appendChild(pixel);
        }
        pixelBoard.appendChild(linha);
    }
}

// requisito 6------------------------------------------------------------------------------
function selectInicial(){
    let colorPalette = document.getElementById("color-palette").children;
    for (divCor of colorPalette) {
        if (divCor.id === "black") {
            divCor.classList.add("selected");
        } 
    }    
}

// requisito 7 ------------------------------------------------------------------------------
function ativaPainelDeCores(){
    function painelClik(event){
        let divClicada = event.target;
        let div_com_classe_selected = document.querySelector('.selected');
        div_com_classe_selected.classList.remove('selected');
        divClicada.classList.add('selected')
    }
    
    let colorPalette = document.getElementById("color-palette").children;
    for (divCor of colorPalette) {
        divCor.addEventListener('click', painelClik);
        
    }
}


// requisito 8------------------------------------------------------------------------------
function ativaPainelDePixel(){
    function pixelClick(event) {
        let div_com_classe_selected = document.querySelector('.selected');
        let pixelClicado = event.target
        pixelClicado.style.backgroundColor = div_com_classe_selected.style.backgroundColor
    }
    let pixelBoard = document.getElementById("pixel-board").children;
    for (linha of pixelBoard) {
        for (pixel of linha.children) {
            pixel.addEventListener("click", pixelClick)
        }
    }
}

// requisito 9 ------------------------------------------------------------------------------
function criaBotão () {
    let divInputs = document.getElementById("color-palette")
    let botão = document.createElement('button');
    botão.innerText = "Limpar"
    botão.id = "clear-board"
    
    divInputs.parentElement.append(botão)
}
function ativaBotão (){
    function clearBord (){
        let pixelBoard = document.getElementById("pixel-board").children;
        for (linha of pixelBoard){   
            for (pixel of linha.children){
                pixel.style.backgroundColor = "white";
            }
        }
    }
    
    let botão = document.getElementById("clear-board")
    botão.addEventListener('click', clearBord);
}
let listaDeCores = ["black", "red", "green", "yellow"];
criaCores(listaDeCores);
adicionaPixelBoard(5, 5);
selectInicial();
ativaPainelDeCores();
ativaPainelDePixel();
criaBotão();
ativaBotão();
configuraQuadro();
//requisito10
function configuraQuadro() {
    function verificarValor (event){
        event.preventDefault();
        let N = document.getElementById("board-size").value;
        if ( N === "" || N <= 0) {
            alert("Board inválido!");
        } else {

            if (N < 5) {
                N = 5
            }
            if (N > 50) {
                N = 50
            }
            
            let pixelBoard = document.getElementById("pixel-board");
            pixelBoard.remove();
            let section = document.createElement("section");
            section.id = "pixel-board";
            let main = document.querySelector("main");
            main.appendChild(section);

            adicionaPixelBoard(N,N);
            selectInicial();
            ativaPainelDeCores();
            ativaPainelDePixel();
        }

    }
    let botãoVQV = document.getElementById("generate-board")
    botãoVQV.addEventListener("click", verificarValor)
}

