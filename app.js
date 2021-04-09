var cartaMu = {
    nome: "Mu de Áries",
    imagem: "https://static.wikia.nocookie.net/ssu/images/4/41/Mu_OCE_UW_card_edit.png/revision/latest?cb=20180129053013",
    atributos: {
        ataque: 30,
        defesa: 80,
        magia: 80
    }
}

var cartaAldebaran = {
    nome: "Aldebaran de Touro",
    imagem: "https://static.wikia.nocookie.net/ssu/images/7/72/Aldebaran_card.png/revision/latest?cb=20190614123815",
    atributos: {
        ataque: 90,
        defesa: 100,
        magia: 60
    }
}

var cartaSaga = {
    nome: "Saga de Gêmeos",
    imagem: "https://static.wikia.nocookie.net/os-cavaleiros-de-ouro/images/1/1b/12670278_784191571726744_4947334723433888435_n_%281%29.jpg/revision/latest?cb=20160204223808&path-prefix=pt-br",
    atributos: {
        ataque: 50,
        defesa: 70,
        magia: 110
    }
}

var cartaMascaradaMorte = {
    nome: "Máscara da morte de Câncer",
    imagem: "https://static.wikia.nocookie.net/os-cavaleiros-de-ouro/images/b/ba/Mascara_da_morte.jpg/revision/latest/scale-to-width-down/340?cb=20150921021000&path-prefix=pt-br",
    atributos: {
        ataque: 40,
        defesa: 50,
        magia: 50
    }
}

var cartaAiolia = {
    nome: "Aiolia de Leão",
    imagem: "http://pm1.narvii.com/6885/5a6a4204d55c8736142c87d7031590038a3e219er1-480-480v2_00.jpg",
    atributos: {
        ataque: 80,
        defesa: 80,
        magia: 100
    }
}

var cartaShaka = {
    nome: "Shaka de Virgem",
    imagem: "https://i.pinimg.com/originals/a4/a4/0c/a4a40cb602a48d1979748a4786636c97.jpg",
    atributos: {
        ataque: 20,
        defesa: 80,
        magia: 120
    }
}

var cartaDoko = {
    nome: "Doko de Libra",
    imagem: "https://i.pinimg.com/originals/47/b2/5e/47b25e44167efc7cfd4f1281275f51da.jpg",
    atributos: {
        ataque: 90,
        defesa: 70,
        magia: 90
    }
}

var cartaMilo = {
    nome: "Milo de Escorpião",
    imagem: "https://i.pinimg.com/originals/72/81/00/728100286eedc343663d0f08efd1daf2.jpg",
    atributos: {
        ataque: 100,
        defesa: 60,
        magia: 70
    }
}

var cartaAiolos = {
    nome: "Aiolos de Sagitário",
    imagem: "https://i.pinimg.com/originals/80/df/24/80df244d99e790e282c835d5504fa342.jpg",
    atributos: {
        ataque: 70,
        defesa: 40,
        magia: 95
    }
}

var cartaShura = {
    nome: "Shura de Capricórnio",
    imagem: "https://static.wikia.nocookie.net/ssu/images/7/77/Shura_OCE_card.png/revision/latest?cb=20180104070208",
    atributos: {
        ataque: 100,
        defesa: 95,
        magia: 40
    }
}

var cartaCamus = {
    nome: "Camus de Aquário",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_866918-MLB32020635038_082019-O.jpg",
    atributos: {
        ataque: 30,
        defesa: 70,
        magia: 85
    }
}

var cartaAfrodite = {
    nome: "Afrodite de Peixes",
    imagem: "https://i.pinimg.com/originals/e5/22/9e/e5229e1878b5af93e8b00d86cf6e444e.jpg",
    atributos: {
        ataque: 30,
        defesa: 35,
        magia: 45
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMu, cartaAldebaran, cartaSaga, cartaMascaradaMorte, cartaAiolia, cartaShaka, cartaDoko, cartaMilo, cartaAiolos
, cartaShura, cartaCamus, cartaAfrodite]

var pontosJogador = 0
var pontosMaquina = 0

atualizarPlacar()
atualizaQuantidadeDeCartas()

function atualizarPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = 'Jogador ' + pontosJogador + '/' + pontosMaquina + ' Máquina'
  
  divPlacar.innerHTML = html
}

function atualizaQuantidadeDeCartas(){
   var divQuantidadeCartas = document.getElementById('quantidade-cartas')
   var html = 'Quantidade de cartas no jogo: ' + cartas.length
   divQuantidadeCartas.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0){
      alert('Fim de Jogo!')
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">O Jogador venceu!</p>'
      }else if(pontosJogador == pontosMaquina){
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
      }else{
         htmlResultado = '<p class="resultado-final">O Jogador perdeu!</p>'
      }
    }else{
      document.getElementById('btnProximaRodada').disabled = false
    }
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
  
    atualizarPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div> <div id='carta-maquina' class='carta'></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}