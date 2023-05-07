let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual foi a principal contribuição de Grace Hopper para a computação?",
    alternativaA : "Ela foi a primeira mulher a programar um computador",
    alternativaB : "Ela criou a primeira linguagem de programação comercial: COBOL",
    alternativaC : "Ela inventou o primeiro computador pessoal",
    alternativaD : "Ela desenvolveu o primeiro sistema operacional",
    correta      : "Ela criou a primeira linguagem de programação comercial: COBOL",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Como Grace Hopper descreveu o 'bug' em um computador?",
    alternativaA : "Um inseto preso em uma peça do hardware",
    alternativaB : "Um erro no código de programação",
    alternativaC : "Um problema na rede de computadores",
    alternativaD : "Um defeito na unidade central de processamento (CPU)",
    correta      : "Um inseto preso em uma peça do hardware",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual foi a posição militar que Grace Hopper ocupou durante a Segunda Guerra Mundial?",
    alternativaA : "Major",
    alternativaB : "Capitão",
    alternativaC : "Tenente",
    alternativaD : "General",
    correta      : "Major",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual a formação de Grace Hopper?",
    alternativaA : "Ciência da Computação",
    alternativaB : "Matemática",
    alternativaC : "Engenharia Elétrica",
    alternativaD : "Química",
    correta      : "Matemática",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Em qual ramo do exército dos Estados Unidos Grace Hopper serviu durante a Segunda Guerra Mundial?",
    alternativaA : "Marinha",
    alternativaB : "Exército de terra",
    alternativaC : "Força Aérea",
    alternativaD : "Guarda Costeira",
    correta      : "Marinha",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual foi a contribuição de Grace Hopper para o desenvolvimento de compiladores?",
    alternativaA : "Ela ajudou a desenvolver o primeiro compilador de linguagem de programação, chamado A-0.",
    alternativaB : "Ela desenvolveu o primeiro compilador de linguagem de programação, chamado COBOL.",
    alternativaC : "Ela criou o primeiro sistema operacional para computadores.",
    alternativaD : "Ela ajudou a projetar o primeiro computador eletrônico.",
    correta      : "Ela ajudou a desenvolver o primeiro compilador de linguagem de programação, chamado A-0.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Quais medalhas Grace Hopper ganhou durante sua vida?",
    alternativaA : "Medalha de Honra do Congresso e Medalha Fields",
    alternativaB : "Medalha Nobel da Física e Medalha de Ouro da Royal Society",
    alternativaC : "Medalha de Honra do Mérito e Medalha de Ouro do Prêmio Turing",
    alternativaD : "Medalha Presidencial da Liberdade e Medalha Nacional de Tecnologia e Inovação",
    correta      : "Medalha Presidencial da Liberdade e Medalha Nacional de Tecnologia e Inovação",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é o nome do navio da Marinha dos Estados Unidos que foi batizado em homenagem a Grace Hopper?",
    alternativaA : "USS Enterprise",
    alternativaB : "USS Nimitz",
    alternativaC : "USS Hopper",
    alternativaD : "USS Truman",
    correta      : "USS Hopper",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual das seguintes afirmações descreve a contribuição de Grace Hopper no desenvolvimento do UNIVAC I?",
    alternativaA : "Ela liderou a equipe que projetou a arquitetura do UNIVAC I.",
    alternativaB : "Ela programou o UNIVAC I.",
    alternativaC : "Ela trabalhou no desenvolvimento do software para o UNIVAC I.",
    alternativaD : "Ela escreveu o código-fonte para o UNIVAC I.",
    correta      : "Ela trabalhou no desenvolvimento do software para o UNIVAC I.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual das seguintes opções descreve o que COBOL significa?",
    alternativaA : "Computer-Based Online Language",
    alternativaB : "Code of Basic Operating Language",
    alternativaC : "Central Operating Base Language",
    alternativaD : "Common Business Oriented Language",
    correta      : "Common Business Oriented Language",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}