// Captura de evento submit do formulário
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido.', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida;.', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelImc}). `
    setResultado(mensagem, true, nivelImc);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo(className) {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, validador, nivelImc) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';


    const p = criarParagrafo();

    switch (nivelImc) {
        case 'Abaixo do peso':
            p.classList.add('imc-abaixo-peso');
            break;
        case 'Peso normal':
            p.classList.add('imc-peso-normal');
            break;
        case 'Sobrepeso':
            p.classList.add('imc-sobrepeso');
            break;
        case 'Obesidade grau 1':
            p.classList.add('imc-obesidade-grau1');
            break;
        case 'Obesidade grau 2':
            p.classList.add('imc-obesidade-grau2');
            break;
        case 'Obesidade grau 3':
            p.classList.add('imc-obesidade-grau3');
            break;
        default:
            p.classList.add('bad');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

