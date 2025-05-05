// requisitos 1, 2 e 3 ------------------------------------------------------------------------------
function criaCores(arrayDeCores) {
  const colorPalette = document.getElementById('color-palette');
  for (cor of arrayDeCores) {
    const div = document.createElement('div');
    div.classList.add('color');
    div.id = cor;
    div.style.backgroundColor = cor;
    colorPalette.appendChild(div);
  }
}

// requisito 4 e 5 ------------------------------------------------------------------------------
function adicionaPixelBoard(compri, alt) {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const pixelBoard = document.getElementById('pixel-board');
  const comprimento = compri;
  const altura = alt;

  for (let al = 0; al < altura; al += 1) {
    const linha = document.createElement('div');
    linha.id = 'linha';
    for (let cp = 0; cp < comprimento; cp += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      linha.appendChild(pixel);
    }
    pixelBoard.appendChild(linha);
  }
}

// requisito 6------------------------------------------------------------------------------
function selectInicial() {
  const colorPalette = document.getElementById('color-palette').children;
  for (divCor of colorPalette) {
    if (divCor.id === 'black') {
      divCor.classList.add('selected');
    }
  }
}

// requisito 7 ------------------------------------------------------------------------------
function ativaPainelDeCores() {
  function painelClik(event) {
    const divClicada = event.target;
    const div_com_classe_selected = document.querySelector('.selected');
    div_com_classe_selected.classList.remove('selected');
    divClicada.classList.add('selected');
  }

  const colorPalette = document.getElementById('color-palette').children;
  for (divCor of colorPalette) {
    divCor.addEventListener('click', painelClik);
  }
}

// requisito 8------------------------------------------------------------------------------
function ativaPainelDePixel() {
  function pixelClick(event) {
    const div_com_classe_selected = document.querySelector('.selected');
    const pixelClicado = event.target;
    pixelClicado.style.backgroundColor = div_com_classe_selected.style.backgroundColor;
  }
  const pixelBoard = document.getElementById('pixel-board').children;
  for (linha of pixelBoard) {
    for (pixel of linha.children) {
      pixel.addEventListener('click', pixelClick);
    }
  }
}

// requisito 9 ------------------------------------------------------------------------------
function criaBotão() {
  const divInputs = document.getElementById('color-palette');
  const botão = document.createElement('button');
  botão.innerText = 'Limpar';
  botão.id = 'clear-board';

  divInputs.parentElement.append(botão);
}
function ativaBotão() {
  function clearBord() {
    const pixelBoard = document.getElementById('pixel-board').children;
    for (linha of pixelBoard) {
      for (pixel of linha.children) {
        pixel.style.backgroundColor = 'white';
      }
    }
  }

  const botão = document.getElementById('clear-board');
  botão.addEventListener('click', clearBord);
}
const listaDeCores = ['black', 'red', 'green', 'yellow'];
criaCores(listaDeCores);
adicionaPixelBoard(5, 5);
selectInicial();
ativaPainelDeCores();
ativaPainelDePixel();
criaBotão();
ativaBotão();
configuraQuadro();

// requisito10
function configuraQuadro() {
  function verificarValor(event) {
    event.preventDefault();
    let N = document.getElementById('board-size').value;
    if (N === '' || N <= 0) {
      alert('Board inválido!');
    } else {
      if (N < 5) {
        N = 5;
      }
      if (N > 50) {
        N = 50;
      }

      const pixelBoard = document.getElementById('pixel-board');
      pixelBoard.remove();
      const section = document.createElement('section');
      section.id = 'pixel-board';
      const main = document.querySelector('main');
      main.appendChild(section);

      adicionaPixelBoard(N, N);
      selectInicial();
      ativaPainelDeCores();
      ativaPainelDePixel();
    }
  }
  const botãoVQV = document.getElementById('generate-board');
  botãoVQV.addEventListener('click', verificarValor);
}
