var cont = 0;

var CheckC;
var CheckV;

var clicou = false;

var fundo = document.getElementById("fundo");

var area_ = null;


function Add() {
    debugger
    var Area = document.getElementById(`${area_}`);

    txtNome = document.getElementById("txtNome").nodeValue;

    var Item = document.createElement('div');
    var nomeItem = document.createElement('div');

    nomeItem.innerHTML = "AAAAA";
    nomeItem.classList.add("nomeItem");
    Item.classList.add("Item");

    Area.appendChild(Item);

    cont++;
    fundo.style.display = "none";
    fundo.style.visibility = "hidden";
    txtNome.innerText = "";
}

var Criar = (area) => {

    fundo.style.display = "block";
    fundo.style.visibility = "visible";
    area_ = area;
}


var BtnCheckV = () => {
    debugger
    CheckC = document.getElementById(`btnCheckC1`);
    CheckV = document.getElementById(`btnCheckV1`);

    CheckC.style.display = "block";
    CheckV.style.display = "none";
}

var BtnCheckC = () => {
    debugger
    CheckC = document.getElementById(`btnCheckC1`);
    CheckV = document.getElementById(`btnCheckV1`);

    CheckC.style.display = "none";
    CheckV.style.display = "block";
}

var Cancelar = () => {

    fundo.style.display = "none";
    fundo.style.visibility = "hidden";
}

var Abre_Menu = () => {

    PegaId();
}

var PegaId = () => {

    document.querySelectorAll("button").forEach( function(button) {
    
        button.addEventListener("click", function(event) {
    
        const el = event.target || event.srcElement;
    
        const id = el.id;
    
        console.log(id);
    
      });
      
    });
}

var AbreFecha = () => {
    debugger
    var AL = document.getElementById("aberturaLateral");
    var btnAL = document.getElementById("abreFecha");

    if (clicou == false) {

    AL.style.transition = "1s";
    AL.style.transform = "translateX(0%)";
    btnAL.innerHTML = "";
    btnAL.innerHTML = "<box-icon name='chevron-right'  size='50px' color='#898989' ></box-icon>";
    clicou = true;
    } else {

    AL.style.transition = "1s";
    AL.style.transform = "translateX(95%)";
    btnAL.innerHTML = "";
    btnAL.innerHTML = "<box-icon name='chevron-left'  size='50px' color='#898989' ></box-icon>";
    clicou = false;
    }
}