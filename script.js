const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lampada = document.getElementById("lampada");
ligar.addEventListener("click", ligada);
desligar.addEventListener("click", desligada);
lampada.addEventListener("mouseup", quebrada);
lampada.addEventListener("mouseover", ligada);
lampada.addEventListener("mouseout", desligada);

function ligada() {
    if (!estaQuebrada()) {
        lampada.src = "img/ligada.jpg";
    }
}

function desligada() {
    if (!estaQuebrada()) {
        lampada.src = "img/desligada.jpg";
    }
}

function quebrada() {
    lampada.src = "img/quebrada.jpg";
}

function estaQuebrada() {
    return lampada.src.indexOf("img/quebrada.jpg") > -1;
}
console.log(estaQuebrada());
