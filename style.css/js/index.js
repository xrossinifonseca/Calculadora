function insert(num) {
  let number = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = number + num;
}

function clean() {
  document.querySelector("#resultado").innerHTML = "";
}
function back() {
  let resultado = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let resultado = document.querySelector("#resultado").innerHTML;
  if (resultado) {
    document.querySelector("#resultado").innerHTML = eval(resultado);
  } else {
    document.querySelector("#resultado").innerHTML = "nada para calcular";
  }
}
