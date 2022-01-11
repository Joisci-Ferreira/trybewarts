function login() {
    let nomeUsuario = document.getElementById('nomeUsuario').value;
    let senha = document.getElementById('senha').value;

    if (nomeUsuario === "tryber@teste.com" && senha === "123456"){
       alert("Olá, Tryber!")
    }
    else{
        alert("Email ou senha inválidos.")
    }
}

function habilitaBotao () {
  let recebe = document.getElementById('agreement');
  let recebeBotao = document.getElementById('submit-btn');
  if (recebe.checked === true) {
    recebeBotao.disabled = false;
  } else {
    recebeBotao.disabled = true;
  }
}