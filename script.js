let enviarNombre = document.getElementById("button");
let usuario = document.getElementById("Name");

enviarNombre.addEventListener("click", saveSessionStorage);

function saveSessionStorage() {
  sessionStorage.setItem("keyName", usuario.value);
  location.href ='trivia_playa.html';

 }

let enviarNombre2 = document.getElementById("button_2");

enviarNombre2.addEventListener("click", saveSessionStorage);

function saveSessionStorage_2() {
  sessionStorage.setItem("keyName", usuario.value);
  location.href ='trivia_bebidas_tipicas.html';

 }