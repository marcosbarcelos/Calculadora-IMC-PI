const buttonCalcular = document.getElementById('calcular');

function calcular() {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');
  const select = document.getElementById('sexo');
  const selectValue = select.options[select.selectedIndex].value;

  if (altura !== '' && peso !== '' && selectValue !== '') {
    document.getElementById('container').style.display = 'none';
    document.getElementById('container_resultado').style.display = 'flex';

    // fórmula que calcula o IMC
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacaoIMC = '';

    if (valorIMC < 18.5) {
      classificacaoIMC = 'peso abaixo do normal';
    } else if (valorIMC < 25) {
      classificacaoIMC = 'a classificação excelente';
    } else if (valorIMC < 30) {
      classificacaoIMC = 'sobrepeso';
    } else if (valorIMC < 35) {
      classificacaoIMC = 'Obesidade Grau I';
    } else if (valorIMC < 40) {
      classificacaoIMC = 'Obesidade Grau II';
    } else if (valorIMC >= 40) {
      classificacaoIMC = 'Obesidade Mórbida';
    }

    let valorPI = '';

    if (selectValue == 'feminino') {
      //fórmula de peso ideal para sexo feminino
      valorPI = (21 * (altura * altura)).toFixed(1);
    } else {
      //fórmula de peso ideal para sexo masculino
      valorPI = (22 * (altura * altura)).toFixed(1);
    }

    resultado.textContent = `Seu IMC é ${valorIMC}, você está com ${classificacaoIMC} e seu peso ideal é ${valorPI}Kg`;

  } else {
    alert('Preencha os campos solicitados.');
  }
}

buttonCalcular.addEventListener('click', calcular);