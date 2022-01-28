const calcular = document.getElementById("calcular");

function imc() {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if ( altura !== "" && peso !== "") {
    document.getElementById("container").style.display = "none";
    document.getElementById("container_resultado").style.display = "flex";

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacaoIMC = "";

    if (valorIMC < 18.5) {
      classificacaoIMC = "peso abaixo do ideal.";
    } else if (valorIMC < 25) {
      classificacaoIMC = "peso ideal, Parabéns!! :)";
    } else if (valorIMC < 30) {
      classificacaoIMC = "sobrepeso.";
    } else if (valorIMC < 35) {
      classificacaoIMC = "Obesidade Grau I.";
    } else if (valorIMC < 40) {
      classificacaoIMC = "Obesidade Grau II.";
    } else if (valorIMC >= 40) {
      classificacaoIMC = "Obesidade Grau III ou Mórbida, ATENÇÃO!!";
    }

    resultado.textContent = `Seu IMC é ${valorIMC} e você está com ${classificacaoIMC}`;
  } else {
    alert("Preencha os campos solicitados.");
  }
}

calcular.addEventListener("click", imc);



// <!--
//         function calcula(pesoideal)
//         {
//                 var pi;
//                 var h = eval(document.pesoideal.altura.value.replace(/,/g,"."));
//                 var s = document.pesoideal.sexo.value;

// 			if (s=="f")
// 			{
// 			   pi = ((62.1 * h)-44.7);
// 			   alert("Seu peso ideal é: " + parseInt(pi));
// 			}
// 			else
// 			{
// 			   pi = (72.7*h)-58;
// 			   alert("Seu peso ideal é: " + pi);
// 			}
// 		return false;
//         }             
// -->
