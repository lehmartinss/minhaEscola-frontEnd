import { getMinhaEscola } from "./api.js";

let indiceAtual = 0;
let slides = [];

// Atualiza o carrossel com base no índice atual
function atualizarCarrossel() {
  const carrossel = document.getElementById('carrossel');
  console.log('Índice atual:', indiceAtual);
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}


// Avança para o próximo slide
function avancarSlide() {
  indiceAtual = (indiceAtual + 1) % slides.length;
  atualizarCarrossel();
}

// Volta para o slide anterior
function voltarSlide() {
  indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
  atualizarCarrossel();
}

// Disponibiliza as funções globalmente para os botões HTML
globalThis.avancarSlide = avancarSlide;
globalThis.voltarSlide = voltarSlide;

// Carrega os dados da API e monta os slides
async function carregarSlides() {
  const dados = await getMinhaEscola();
  slides = dados;

  const carrossel = document.getElementById('carrossel');

  carrossel.innerHTML = slides.map(foto => `
    <div class="slide">
      <img src="${foto.imagem}" alt="${foto.legenda}">
      <div class="informacoes">
        <h2>${foto.legenda}</h2>
        <p>Data: ${foto.data}</p>
      </div>
    </div>
  `).join('');

  atualizarCarrossel();
}

carregarSlides();
