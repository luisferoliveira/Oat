function gerarTabuada() {
  const num = document.getElementById('numero').value;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "";

  if (num === "") {
    resultado.innerHTML = "<p>Digite um número válido!</p>";
    return;
  }

  let tabuada = "<h3>Tabuada do " + num + "</h3>";
  for (let i = 1; i <= 10; i++) {
    tabuada += num + " x " + i + " = " + (num * i) + "<br>";
  }

  resultado.innerHTML = tabuada;
}
