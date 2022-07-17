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
// requisito 4, 5, 6, 7 e 8
let pixelBoard = document.getElementById("pixel-board");
let comprimento = 5;
let altura = 5;

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
