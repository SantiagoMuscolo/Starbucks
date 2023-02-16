const email = document.querySelector(`#email`),
user = document.querySelector(`#usuario`),
password = document.querySelector(`#password`),
btn = document.querySelector(`#btn`);

let usuarios = [];

localStorage.getItem(`usuarios`) ? usuarios = JSON.parse(localStorage.getItem(`usuarios`)) : usuarios = [];

class usuario{
    constructor(email, usuario, password){
        this.email = email;
        this.usuario = usuario;
        this.password = password;
    }
}

function limpiarCampos (){
    email.value = "";
    user.value = "";
    password.value = "";
}

function guardarUsuario (usuario){
    return usuarios.push(usuario);
}

function guardarEnStorage(elemento){
    return localStorage.setItem(`usuarios`, JSON.stringify(elemento))
}

btn.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let nuevoUsuario = new usuario(email.value, user.value, password.value);
    console.log(nuevoUsuario);
    guardarUsuario(nuevoUsuario);
    guardarEnStorage(usuarios);
    limpiarCampos();
    window.location.href = "../html/login.html"
})