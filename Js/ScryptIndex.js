

var caminho = "https://formsubmit.co/";

var inputEmail = document.getElementById("txtEmail");
var inputSenha = document.getElementById("txtSenha");

var email;
var senha;

var check = document.getElementById("view_Pass");

var MostraSenha = () => {
    debugger

    if (check.checked == true) {
        inputSenha.type = "text";
    } else {
        inputSenha.type = "password";
    }
}

var ResetaForm = () => {

    inputEmail.innerText = "";
    inputSenha.innerText = "";
    check.checked = false;
}