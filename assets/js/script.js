//PASSO #1 : CALCULAR QUANTAS CERAMICAS VEM EM UMA CAIXA
function caixas(a,b,caixaa){
    var pessa = (a / 100) * (b / 100);
    var calculo = caixaa / pessa;
    calculo = Math.ceil(calculo);
    return calculo
}


//PASSO #2 : CALCULAR A AREA DO LOCAL DO CLIENTE
function areas(a,l){
    var areal = a * l;
    return areal
}

//PASSO #3 : CALCULAR A QUANTIDADE DE CAIXAS
function totalc(arr,caix){
    var calculoo = Math.ceil(arr / caix);
    return calculoo
}

//PASSO #4 : CALCULAR A QUANTIDADE DE REJUNTES
function rejunte(arre){
    var calc = Math.ceil(arre / 5);
    return calc
}

let linhaPeca = document.getElementById('linha-peca');
let btns = document.querySelectorAll("input[name='op']");
let inputs = document.getElementById('inputs');


function ver() {
    const selecionado = document.querySelector("input[name='op']:checked").value;
    if (selecionado === 'sim') {
        inputs.style.display = 'block';
        linhaPeca.style.display = 'table-row';
    } else {
        inputs.style.display = 'none';
        linhaPeca.style.display = 'none';
    }
}

btns.forEach(btn => {
    btn.addEventListener('change', ver);
});

ver();

function parseNumber(inputValue) {
    if (!inputValue) return 0;
    const cleanedValue = inputValue.replace(",", ".");
    return parseFloat(cleanedValue) || 0;
}

function calcular(){
    
    //VALORES PARA AS CONTAS:
    let ladoa = parseNumber(document.getElementById('ladoA').value);
    let ladob = parseNumber(document.getElementById('ladoB').value);
    let caixa = parseNumber(document.getElementById('caixa').value);

    let altura = parseFloat(document.getElementById('altura').value);
    let largura = parseFloat(document.getElementById('largura').value);

    
    //escreve a area o local do cliente
    const TotalArea = areas(altura,largura);
    
    //calcula quantas caixas precisam
    const CalculoCaixa = totalc(TotalArea,caixa);

    //escrever a quantidade de peças na caixa
    const PecasNaCaixa = caixas(ladoa,ladob,caixa) * CalculoCaixa;
    
    //calcula a quantidade de rejunte
    const Rejuntes = rejunte(CalculoCaixa);

    //calcula a quantidade de massa
    const MassaCola = CalculoCaixa;

    //COLOCAR AS INFORMAÇÕES NA TABELA
    //VARIAVEIS DA TABELA:
    let tcaixa = document.getElementById('tcaixa');
    let tpeça = document.getElementById('tpeca');
    let trejunte = document.getElementById('trejunte');
    let tmassa = document.getElementById('tmassa');

    tcaixa.textContent = CalculoCaixa;
    trejunte.textContent = Rejuntes;
    tmassa.textContent = MassaCola;
    

    const selecionado = document.querySelector("input[name='op']:checked").value;

    if (selecionado === 'sim') {
    
        tpeça.textContent = PecasNaCaixa;
    }

}
