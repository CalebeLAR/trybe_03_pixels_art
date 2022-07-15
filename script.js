//requisitos 1, 2 e 3.
function criaCores (array) {
    let colorPalette = document.getElementById('color-palette');
    for (cor of listaDeCores ){
        let div = document.createElement('div');
        div.classList.add("color");  //class = "color"
        div.id = cor;//class = "color cor"
        div.style.backgroundColor = cor
        colorPalette.appendChild(div)
    }
}
let listaDeCores = ["black","red", "green", "yellow"]
criaCores(listaDeCores);

