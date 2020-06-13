$(document).ready(function () {
    var usuario_logado = localStorage.getItem("logado");

    var url = window.location.pathname.substr(-11);

    if (url == "compra.html") {
        if (usuario_logado != "true") {
            window.location = 'login.html';
            /* alert("Para visualizar um filme, você precisa estar logado."); */
        }
    }
});

function mudabtlogin() {
    var usuario_logado = localStorage.getItem("logado");

    if (usuario_logado == "true") {
        document.getElementById("btlogin").innerHTML = "Logoff";
    } else if (usuario_logado == "false") {
        document.getElementById("btlogin").innerHTML = "Login";
    } else {
        localStorage.setItem("logado", "false");
    }

    if (usuario_logado == "true") {
        document.getElementById("btlogin").addEventListener("click", function (event) {
            document.getElementById("btlogin").innerHTML = "Login";
            localStorage.setItem("logado", "false");
        });
    }
}


