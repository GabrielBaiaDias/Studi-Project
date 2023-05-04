

var caminho = "https://formsubmit.co/";

var inputEmail = document.querySelector("#txtEmail");
var inputSenha = document.querySelector("#txtSenha");

check.addEventListener('click', MostraSenha);

function MostraSenha() {
    debugger
    if (inputSenha.type == "password") {
        inputSenha.type = "text";
    } else {
        inputSenha.type = "password";
    }
}

function ResetaForm() {

    inputEmail.value = "";
    inputSenha.value = "";
    check.checked = false;
}