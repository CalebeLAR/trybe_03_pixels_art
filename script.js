//requisitos 1, 2 e 3.
function criaCores (array) {
    let colorPalette = document.getElementById("color-palette");
    for (cor of listaDeCores ){
        let div = document.createElement("div");
        div.classList.add("color");  //class = "color"
        div.id = cor;//class = "color cor"
        div.style.backgroundColor = cor
        colorPalette.appendChild(div)
    }
}
let listaDeCores = ["black","red", "green", "yellow"]
criaCores(listaDeCores);
// requisito 4 e 5.
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
adicionaPixelBoard(5,5);

// requisito 6
function selectInicial(){
    let colorPalette = document.getElementById("color-palette").children;
    for (divCor of colorPalette) {
        if (divCor.id === "black") {
            divCor.classList.add("selected");
        } 
    }    
}
selectInicial();
// requisito 7 
function tornaClicável(){
    function ventoClick(event){
        let divClicada = event.target;
        let div_com_classe_selected = document.querySelector('.selected');
        div_com_classe_selected.classList.remove('selected');
        divClicada.classList.add('selected')     
    }

    let colorPalette = document.getElementById("color-palette").children;
    for (divCor of colorPalette) {
        divCor.addEventListener('click', ventoClick);

    }
}
tornaClicável()
//

