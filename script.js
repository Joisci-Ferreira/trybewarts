function login() {
  const nomeUsuario = document.getElementById('nomeUsuario').value;
  const senha = document.getElementById('senha').value;

  if (nomeUsuario === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function chamaLogin() {
  const recebe = document.getElementById('login-btn');
  recebe.addEventListener('click', login);
}

function habilitaBotao() {
  const recebe = document.getElementById('agreement');
  const recebeBotao = document.getElementById('submit-btn');
  if (recebe.checked === true) {
    recebeBotao.disabled = false;
  } else {
    recebeBotao.disabled = true;
  }
}

function chamaHabilitaBotao() {
  const recebe = document.getElementById('agreement');
  recebe.addEventListener('click', habilitaBotao);
}

function contaCaracteres() {
  const maxCar = 500;
  const recebeTextarea = document.getElementById('textarea').value;
  const recebe = document.getElementById('counter');
  recebe.innerText = maxCar - (recebeTextarea.length);
}

function chamaContaCaracteres() {
  const recebe = document.getElementById('textarea');
  recebe.addEventListener('keyup', contaCaracteres);
}

// function showName() {
//   const recebe = document.getElementById('show-info');
//   const recebeNome = document.getElementById('input-name');
//   const recebeSobrenome = document.getElementById('input-lastname');
//   const cria = document.createElement('p');

//   cria.innerText = `Nome:  ${recebeNome.value} ' ' ${recebeSobrenome.value}`;

//   recebe.appendChild(cria);
// }

// function showEmail() {
//   const recebe = document.getElementById('show-info');
//   const recebeInput = document.getElementById('input-email');
//   const cria = document.createElement('p');

//   cria.innerText = `Email:  ${recebeInput.value}`;

//   recebe.appendChild(cria);
// }

// function showHouse() {
//   const recebe = document.getElementById('show-info');
//   const recebeInput = document.getElementById('house');
//   const cria = document.createElement('p');

//   cria.innerText = `Casa: ${recebeInput.value}`;

//   recebe.appendChild(cria);
// }

// function showFamily() {
//   const recebe = document.getElementById('show-info');
//   const recebeInput = document.querySelectorAll('.family');
//   const cria = document.createElement('p');
//   cria.innerText = 'Família: ';
//   for (let index = 0; index < recebeInput.length; index + 1) {
//     if (recebeInput[index].checked === true) {
//       cria.innerText += recebeInput[index].value;
//     }
//   }
//   recebe.appendChild(cria);
// }

// function showContent() {
//   const recebe = document.getElementById('show-info');
//   const recebeInput = document.querySelectorAll('.subject');
//   const cria = document.createElement('p');
//   cria.innerText = 'Matérias:';
//   for (let index = 0; index < recebeInput.length; index + 1) {
//     if (recebeInput[index].checked === true) {
//       cria.innerText += ` ${recebeInput[index].value}`;
//     }
//     recebe.appendChild(cria);
//   }
// }

// function showRate() {
//   const recebe = document.getElementById('show-info');
//   const recebeInput = document.querySelectorAll('.rate');
//   const cria = document.createElement('p');
//   cria.innerText = 'Avaliação: ';
//   for (let index = 0; index < recebeInput.length; index + 1) {
//     if (recebeInput[index].checked === true) {
//       cria.innerText += recebeInput[index].value;
//     }
//   }
//   recebe.appendChild(cria);
// }

// function showObserves() {
//   const recebe = document.getElementById('show-info');
//   const recebeInput = document.getElementById('textarea');
//   const cria = document.createElement('p');

//   cria.innerText = `Observações: ${recebeInput.value}`;

//   recebe.appendChild(cria);
// }

// function criaRetorno() {
//   showName();
//   showEmail();
//   showHouse();
//   showFamily();
//   showContent();
//   showRate();
//   showObserves();
// }

// function chamaCriaRetorno() {
//   const recebe = document.getElementById('submit-btn');
//   recebe.addEventListener('click', criaRetorno);
// }

window.onload = () => {
  chamaLogin();
  chamaHabilitaBotao();
  chamaContaCaracteres();
  // chamaCriaRetorno();
};
