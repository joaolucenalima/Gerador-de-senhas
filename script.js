function gerarSenha() {
  var num = document.querySelector("#length").value;
  var senha = "";

  var chars = checkbox(chars);

  for (var i = 0; i <= num; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    senha += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("senha").value = senha;
}

function checkbox() {
  var numbers = "0123456789";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var simbols = "!@#$%&*()./";
  var check = document.getElementsByName("check");

  if (check[0].checked) {
    chars += numbers;
  }

  if (check[1].checked) {
    chars += uppercase;
  }

  if (check[2].checked) {
    chars += simbols;
  }

  return chars;
}

function copytext() {
  var copyText = document.getElementById("senha");

  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}

let darkToggle = document.querySelector("#check-dark-mode");
let formSenha = document.getElementById("form-senha");

darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  formSenha.classList.toggle("dark-form");
});

function manterBotao() {
  if (darkToggle.checked) {
    document.body.classList.toggle("dark-mode");
    formSenha.classList.toggle("dark-form");
  }
}
