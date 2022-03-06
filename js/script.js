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

    // Compara se a expressão do caso é avaliada como verdadeira, caso sim, ela será correspondida.
    switch (true) {
      case (valorIMC < 18.5):
        classificacaoIMC = 'peso abaixo do normal';
        break;
      case (valorIMC < 25):
        classificacaoIMC = 'a classificação excelente';
        break;
      case (valorIMC < 30):
        classificacaoIMC = 'sobrepeso';
        break;
      case (valorIMC < 35):
        classificacaoIMC = 'Obesidade grau I';
        break;
      case (valorIMC < 40):
        classificacaoIMC = 'Obesidade grau II';
        break;
      case (valorIMC > 40):
        classificacaoIMC = 'Obesidade Mórbida'
        break;
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