//Lista de jogos com nome e imagem local
const jogos = [
    { nome: "Bloodborne", imagem: "./img/Bloodborne.jpg" },
    { nome: "Dark Souls 3", imagem: "./img/dark-souls-3.jpg" },
    { nome: "Sekiro", imagem: "./img/Sekiro.jpg" },
    { nome: "Elden Ring", imagem: "./img/Elden-Ring.jpg" },
    { nome: "devil may cry 5", imagem: "./img/devil-may-cry-5.jpg" },
    { nome: "Hollow Knight", imagem: "./img/Hollow-Knight.jpg" },
];

//Começa todos os votos zerados
const votos = new Array(jogos.length).fill(0);

//Guarda local que está sendo exibido agora
let indice1, indice2;

//seleciona os elementos da páginas
const cartao1 = document.getElementById("catao1");
const cartao2 = document.getElementById("catao2");
const resultado = document.getElementById("resultado");
const barras = document.getElementById("barras");
const avisoProx = document.getElementById("prximo-aviso");

//Sorteia um novo par de jogos diferentes
function sorteaPar(){
    indice1 = Math.floor(Math.random() * jogos.length);
    do{
        indice2 = Math.floor(Math.random() * jogos.length);
    } while (indice2 === indice1);
}

//Atualixar cartão 1
cartao1.querySelector("img").src = jogos[indice1].imagem;
cartao1.querySelector("p").textContent = jogos[indice1].nome;

//atualiza cartão 2
cartao2.querySelector("img").src = jogos[indice2].imagem;
cartao3.querySelector("p").textContent = jogos[indice2].nome;

//esconde o resultado da roda anterior
resultado.style.display = "none";

//habilita os cliques nos cartões
cartao1.style.pointerEvents = "auto";
cartao2.style.pointerEvents = "auto";

//registra o voto e mostra o placar por 3 segundos
function votar(indiceVencedor){
    votos[indiceVencedor]++;
}