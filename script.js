
function tocarMusica(idMusica)
{
    const musicas = document.querySelectorAll("audio");

    musicas.forEach(m =>
    {
        m.pause();
        m.currentTime = 0;
    });

    document.getElementById(idMusica).play();
}

function MostrarCarta() {
 document.getElementById("carta").style.display ="block";
 escreverTexto()
}

function voltarAoTopo()
{
  window.scrollTo({
    top:0,
    bahavior:"smooth"
  });
}

const mensagem = `
Eu te amo mais do que palavras podem expressar,

e sou grato por cada momento que compartilhamos juntos.

Você é a melhor coisa que já me aconteceu,

e eu mal posso esperar para continuar construindo nossa história juntos.

Feliz Dia dos Namorados, meu amor! ❤️

E se eu pudesse escolher novamente,

eu escolheria você todas as vezes. ❤️
`;

function escreverTexto()
{
  const texto = document.getElementById("textoDigitando");
  texto.innerHTML = "";

  let i = 0;
  const efeito = setInterval(() =>
  {
    texto.innerHTML += mensagem.charAt(i);
    i++
    if(i >= mensagem.length)
    {
      clearInterval(efeito)
    }
  }, 70);
}

function atualizarContador()
{
    const inicio = new Date("2023-06-12T00:00:00");
    const agora = new Date();

    let diferenca = agora - inicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("tempoJuntos").innerHTML =
    `
    ${dias} dias ❤️ <br>
    ${horas} horas ❤️ <br>
    ${minutos} minutos ❤️ <br>
    ${segundos} segundos ❤️
    `;
}

setInterval(atualizarContador, 1000);
atualizarContador();


function abrirMenu()
{
  const menu = document.getElementById("menu");
  if(menu.style.display === "Flex")
    {
      menu.style.display = "none";
    }
    else
      {
        menu.style.display = "flex"
      }
}