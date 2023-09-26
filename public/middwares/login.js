document.addEventListener("DOMContentLoaded", function () {
  const inputSenha = document.querySelector("#senha");
  const inputEmail = document.querySelector("#email");
  var email;
  var senha;

  console.log("oi");

  inputSenha.addEventListener("change", (e) => {
    senha = e.target.value;
    console.log(senha);
  });

  inputEmail.addEventListener("change", (e) => {
    email = e.target.value;
    console.log(email);
  });

  var usuarios;

  fetch("public/data/users.json")
    .then((response) => response.json())
    .then((data) => {
      usuarios = data;
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao carregar o arquivo .json:", error);
    });

  function verificarUsuario(email, senha) {
    for (const usuario of usuarios) {
      if (usuario.Email === email && usuario.Senha === senha) {
        console.log("caiu aq");
        return true;
      }
    }
    return false;
  }
  var botao = document.getElementById("Confirmar");
  botao.addEventListener("click", function () {
    var emailDigitado = inputEmail.value;
    var senhaDigitada = inputSenha.value;

    if (verificarUsuario(emailDigitado, senhaDigitada)) {
      window.location.href = "/adm";
      console.log("aaaaaaaaaaaaaa");
    } else {
      window.location.href = "/home";
    }
  });
});
