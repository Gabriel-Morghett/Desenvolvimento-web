class Signo{
    constructor(name){
        this.name = name;
    }
   
    signoUsuario(nascimento){
        let signoU;

        if ((nascimento.getMonth()+1 == 3 && nascimento.getDate()+1 >= 21) || (nascimento.getMonth()+1 == 4 && nascimento.getDate()+1 <= 20)){
            signoU = new Signo("Áries");
        }
        else if ((nascimento.getMonth()+1 == 4 && nascimento.getDate()+1 >= 21) || (nascimento.getMonth()+1 == 5 && nascimento.getDate()+1 <= 20)){
            signoU = new Signo("Touro");
        }
        else if ((nascimento.getMonth()+1 == 5 && nascimento.getDate()+1 >= 21) || (nascimento.getMonth()+1 == 6 && nascimento.getDate()+1 <= 20)){
            signoU = new Signo("Gêmeos");
        }
        else if ((nascimento.getMonth()+1 == 6 && nascimento.getDate()+1 >= 21) || (nascimento.getMonth()+1 == 7 && nascimento.getDate()+1 <= 20)){
            signoU = new Signo("Câncer");
        }
        else if ((nascimento.getMonth()+1 == 7 && nascimento.getDate()+1 >= 21) || (nascimento.getMonth()+1 == 8 && nascimento.getDate()+1 <= 22)){
            signoU = new Signo("Leão");
        }
        else if ((nascimento.getMonth()+1 == 8 && nascimento.getDate()+1 >= 23) || (nascimento.getMonth()+1 == 9 && nascimento.getDate()+1 <= 22)){
            signoU = new Signo("Virgem");
        }
        else if ((nascimento.getMonth()+1 == 9 && nascimento.getDate()+1 >= 23) || (nascimento.getMonth()+1 == 10 && nascimento.getDate()+1 <= 22)){
            signoU = new Signo("Libra");
        }
        else if ((nascimento.getMonth()+1 == 10 && nascimento.getDate()+1 >= 23) || (nascimento.getMonth()+1 == 11 && nascimento.getDate()+1 <= 21)){
            signoU = new Signo("Escorpião");
        }
        else if ((nascimento.getMonth()+1 == 11 && nascimento.getDate()+1 >= 22) || (nascimento.getMonth()+1 == 12 && nascimento.getDate()+1 <= 21)){
            signoU = new Signo("Sagitário");
        }
        else if ((nascimento.getMonth()+1 == 12 && nascimento.getDate()+1 >= 22) || (nascimento.getMonth()+1 == 1 && nascimento.getDate()+1 <= 20)){
            signoU = new Signo("Capricórnio");
        }
        else if ((nascimento.getMonth()+1 == 1 && nascimento.getDate()+1 >= 21) || (nascimento.getMonth()+1 == 2 && nascimento.getDate()+1 <= 19)){
            signoU = new Signo("Aquário");
        }
        else if ((nascimento.getMonth()+1 == 2 && nascimento.getDate()+1 >= 20) || (nascimento.getMonth()+1 == 3 && nascimento.getDate()+1 <= 20)){
            signoU = new Signo("Peixes");
        }
        else{
            signoU = new Signo("... nenhum... eu acho que você nunca nasceu amigo, é isso");
        }
    
        return signoU;
    }
}


function descobrirSigno() {
    let nascimento = new Date(document.getElementById("inputNascimentoUsuario").value);
    let myImage = document.getElementById("imagemSigno");
    let myText = document.getElementById("textoSigno");

    let s = new Signo();
    let nomeSigno = s.signoUsuario(nascimento).name;

    myImage.setAttribute("src", "images/" + nomeSigno + ".jpg");

    myText.innerHTML = "O seu signo é " + nomeSigno + "!!";
}


/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/Áries.jpg') {
        myImage.setAttribute('src', 'images/Peixes.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/Áries.jpg');
    }
}
*/


let myButton = document.querySelector("button");

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    
    let myname = prompt('Digite o seu nome.');
    if (!myname) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myname);
        myHeading.textContent = "Os signos. Usuário: " + myname;

    }
}

let myHeading = document.querySelector("h1");

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Os signos. Usuário: " + storedName;
}


