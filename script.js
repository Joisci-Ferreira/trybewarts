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