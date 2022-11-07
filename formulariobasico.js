const password = document.getElementById('password');
const username = document.getElementById('username');

document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();
  valid = true;

  const password_value = password.value;
  const username_value = username.value;

  if (username_value.length < 5 || password_value.length < 12) {
    alert('O formulario nao foi enviado : \n - Um campo está incorreto');
    valid = false;
  }

  if (valid)
    alert('O formulario foi pŕeenchido \n Será enviado em seguida, Obrigada!');
});

//explicação: se o usuario tiver menos que 5 caracteres, sera apresentada a mensagem de erro, se a senha for menor que 12 caracteres, erro!
