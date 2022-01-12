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

function contaCaracteres (textArea, idContador) {
  let maxCar = 500;
  let recebe = document.getElementById(idContador);
  recebe.innerText = maxCar - (textArea.value.length);
}

function showName () {
  let recebe = document.getElementById('show-info');
  let recebeNome = document.getElementById('input-name');
  let recebeSobrenome = document.getElementById('input-lastname');
  let cria = document.createElement('p');
  cria.innerText = 'Nome: ' + recebeNome.value + ' ' + recebeSobrenome.value;
  recebe.appendChild(cria);
}

function showEmail () {
  let recebe = document.getElementById('show-info');
  let recebeInput = document.getElementById('input-email');
  let cria = document.createElement('p');
  cria.innerText = 'Email: ' + recebeInput.value;
  recebe.appendChild(cria);
}

function showHouse () {
  let recebe = document.getElementById('show-info');
  let recebeInput = document.getElementById('house');
  let cria = document.createElement('p');
  cria.innerText = 'Casa: ' + recebeInput.value;
  recebe.appendChild(cria);
}

function showFamily () {
  let recebe = document.getElementById('show-info');
  let recebeInput = document.querySelectorAll('.family');
  let cria = document.createElement('p');
  cria.innerText = 'Família: ';
  for (let index = 0; index < recebeInput.length ; index++){
    if (recebeInput[index].checked === true) {
      cria.innerText+= recebeInput[index].value;
    }
  }
  recebe.appendChild(cria);
}

function showContent () {
  let recebe = document.getElementById('show-info');
  let recebeInput = document.querySelectorAll('.subject');
  let cria = document.createElement('p');
  cria.innerText = 'Matérias:';
  for (let index = 0; index < recebeInput.length; index++) {
    if (recebeInput[index].checked === true)
    cria.innerText+= ' ' + recebeInput[index].value;
  }
  recebe.appendChild(cria);
}

function showRate () {
  let recebe = document.getElementById('show-info');
  let recebeInput = document.querySelectorAll('.rate');
  let cria = document.createElement('p');
  cria.innerText = 'Avaliação: ';
  for ( let index = 0 ; index < recebeInput.length ; index++) {
    if (recebeInput[index].checked === true) {
      cria.innerText+= recebeInput[index].value;
    }
  }
  recebe.appendChild(cria);
}

function showObserves () {
  let recebe = document.getElementById('show-info');
  let recebeInput = document.getElementById('textarea');
  let cria = document.createElement('p');
  cria.innerText = 'Observações: ' + recebeInput.value;
  recebe.appendChild(cria);
}

function criaRetorno () {
  showName();
  showEmail();
  showHouse();
  showFamily();
  showContent();
  showRate();
  showObserves();
}