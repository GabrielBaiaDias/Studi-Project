var cont = 0;

var CheckC;
var CheckV;

var nome, materia, descricao, professor, data_final;

var clicou = false;

var fundo = document.getElementById("fundo");

var area_ = null;

var elemento1 = document.querySelector(".azul");
var elemento2 = document.querySelector(".branco");

elemento2.style.height = elemento1.offsetHeight + "px";

function Menu() {
    debugger
    var navMenu = document.getElementById("menu");
    navMenu.style.transition = ".4s"

    if (clicou == false) {
        navMenu.style.transform = "translateX(0)";
        clicou = true
    } else {
        navMenu.style.transform = "translateX(-380px)";
        clicou = false;
    }
}

document.querySelector("#btnConcluir").addEventListener("click", Add);

function Add() {

    var nome = document.querySelector("#txtNome").value;
    
    var Area = document.querySelector("#Area1");
    
    Area.innerHTML += `<div class='Item'><div class='branco'><div class='nomeItem'>${nome}</div><button onclick='BtnCheckV() id='btnCheckV1' class='btnCheckV'><box-icon color='gray' name='play-circle'></box-icon></button><button onclick='BtnCheckC()' id='btnCheckC1' class='btnCheckC'><box-icon color='gray' name='pause-circle'></box-icon></button></div><div class='azul'><box-icon class='iconConfig' name='dots-vertical-rounded' color='#8dc1e3'></box-icon><box-icon class='Completar' id='completarV' name='check-circle' color='#8dc1e3'></box-icon><box-icon class='Completar' id='completarX' name='x-circle' color='#8dc1e3'></box-icon></div></div>`;

    cont++;
    fundo.style.display = "none";
    fundo.style.visibility = "hidden";
    txtNome.innerText = "";
}

document.querySelector("#CriarItem").addEventListener('click', Criar);

function Criar(area) {

    fundo.style.display = "block";
    fundo.style.visibility = "visible";
    area_ = area;
}


function BtnCheckV() {
    debugger
    CheckC = document.getElementById(`btnCheckC1`);
    CheckV = document.getElementById(`btnCheckV1`);

    CheckC.style.display = "inline-block";
    CheckV.style.display = "none";
}

function BtnCheckC() {
    debugger
    CheckC = document.getElementById(`btnCheckC1`);
    CheckV = document.getElementById(`btnCheckV1`);

    CheckC.style.display = "none";
    CheckV.style.display = "inline-block";
}

function Cancelar() {

    fundo.style.display = "none";
    fundo.style.visibility = "hidden";
}

function PegaId() {

    document.querySelectorAll("button").forEach(function (button) {

        button.addEventListener("click", function (event) {

            const el = event.target || event.srcElement;

            const id = el.id;

            console.log(id);

        });

    });
}

// function 