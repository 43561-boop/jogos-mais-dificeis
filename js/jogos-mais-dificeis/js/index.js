//Lista de jogos com nome e imagem local
const dificeisjogos = [
  { nome: "Bloodborne", imagem: "./img/Bloodborne.jpg" },
  { nome: "Dark Souls 3", imagem: "./img/dark-souls-3.jpg" },
  { nome: "Sekiro", imagem: "./img/Sekiro.jpg" },
  {nome: "Elden Ring Shadow of the ERDETREE",imagem: "./img/Elden-Ring-shadow-of-the-erdtree.jpg",},
  { nome: "devil may cry 5", imagem: "./img/devil-may-cry-5.jpg" },
  { nome: "Hollow Knight", imagem: "./img/Hollow-Knight.jpg" },
];

//Começa todos os votos zerados
const votos = new Array(dificeisjogos.length).fill(0);

//Guarda local que está sendo exibido agora
let indice1, indice2;

//seleciona os elementos da páginas
const cartao1 = document.getElementById("catao1");
const cartao2 = document.getElementById("catao2");
const resultado = document.getElementById("resultado");
const barras = document.getElementById("barras");
const avisoProx = document.getElementById("prximo-aviso");

//Sorteia um novo par de dificeisjogos diferentes
function sorteaPar() {
  indice1 = Math.floor(Math.random() * jogos.length);
  do {
    indice2 = Math.floor(Math.random() * jogos.length);
  } while (indice2 === indice1);

  //Atualixar cartão 1
  cartao1.querySelector("img").src = jogos[indice1].imagem;
  cartao1.querySelector("p").textContent = dificeisjogos[indice1].nome;

  //atualiza cartão 2
  cartao2.querySelector("img").src = dificeisjogos[indice2].imagem;
  cartao2.querySelector("p").textContent = dificeisjogos[indice2].nome;

  //esconde o resultado da roda anterior
  resultado.style.display = "none";

  //habilita os cliques nos cartões
  cartao1.style.pointerEvents = "auto";
  cartao2.style.pointerEvents = "auto";

  //registra o voto e mostra o placar por 3 segundos
  function votar(indiceVencedor) {
    votos[indiceVencedor]++;

    //Desabilita cliques enquanto o resultado aparece
    cartao1.style.pointerEvents = "none";
    cartao2.style.pointerEvents = "none";

    mostrarResultado();

    //aguarda 3 segundos e sorteia o próximo par
    let segundos = 3;
    avisoProx.textContent = "Próxima dupla em ${segundos}s...";
    const contagem = setInterval(() => {
      segundos--;
      if (segundos > 0) {
        avisoProx.textContent = "Próxima dupla em ${segundos}s...";
      } else {
        clearInterval(contagem);
        sorteaPar();
      }
    }, 1000);
  }
  // Mostra o placar com barras de progresso
  function mostrarResultado() {
    const totalVotos = votos.reduce((soma, v) => soma + v, 0);

    barras.innerHTML = ""; //Limpar as barras anteriores

    dificeisJogos.forEach((rede, i) => {
      const percentual = totalVotos > 0 ? (votos[i] / totalVotos) * 100 : 0; 

      const item = documento.createElement("div");
      item.classList.add("barra-item");

      item.innerHTML = `
      <span class="nome>${rede.nome}</span>
      <div class="barra-fundo">
          <div class="barra-preenchida" style="width: ${percentual}%"></div>
      </div>
      <span class="votos">${votos[i]}</span>
      `;
      barras.appendChild(item);
    });
    resultado.style.display = "block";

  }
  sorteaPar();//inicia o jogo quando a página carregar 
}
