function calcular(event) {
  event.preventDefault();
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = peso / (altura * altura);
  let resultado = document.getElementById("resultado");

  if (imc < 18.5) {
    resultado.innerHTML = "IMC = " + imc.toFixed(2) + "<br/> Baixo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = "IMC = " + imc.toFixed(2) + "<br/> Peso normal";
  } else {
    resultado.innerHTML = "IMC = " + imc.toFixed(2) + "<br/> Sobrepeso";
  }

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
