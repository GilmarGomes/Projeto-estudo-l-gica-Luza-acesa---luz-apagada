function ligadoo() {
  event.preventDefault;
  var ligado = document.querySelector("#Ligado");
  var luzAcesa = document.querySelector("#luzAcesa");
  var desligado = document.querySelector("#Desligado");
  var luzApagada = document.querySelector("#luzApagada");
  luzAcesa.style.display = "none";
  ligado.style.display = "none";
  luzApagada.style.display = "block";
  desligado.style.display = "block";
  document.body.style.backgroundColor = "black";
}
function desligadoo() {
  event.preventDefault;
  var ligado = document.querySelector("#Ligado");
  var luzAcesa = document.querySelector("#luzAcesa");
  var desligado = document.querySelector("#Desligado");
  var luzApagada = document.querySelector("#luzApagada");
  luzAcesa.style.display = "block";
  ligado.style.display = "block";
  luzApagada.style.display = "none";
  desligado.style.display = "none";
  document.body.style.backgroundColor = "white";
}
document.querySelector("#luzApagada").style.display = "none";

// Segunda opção de código.

/*

document.addEventListener("DOMContentLoaded", function () {
  const ligado = document.querySelector("#Ligado");
  const luzAcesa = document.querySelector("#luzAcesa");
  const desligado = document.querySelector("#Desligado");
  const luzApagada = document.querySelector("#luzApagada");

  ligado.addEventListener("click", function (event) {
    event.preventDefault();
    luzAcesa.style.display = "none";
    ligado.style.display = "none";
    luzApagada.style.display = "block";
    desligado.style.display = "block";
    document.body.style.backgroundColor = "black";
  });

  desligado.addEventListener("click", function (event) {
    event.preventDefault();
    luzAcesa.style.display = "block";
    ligado.style.display = "block";
    luzApagada.style.display = "none";
    desligado.style.display = "none";
    document.body.style.backgroundColor = "white";
  });

//   luzApagada.style.display = "none";
// });
*/
