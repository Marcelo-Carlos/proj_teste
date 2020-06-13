$(document).ready(function () {

    /* Controle de login */

    $("#Salvar").on("click", function cadastro() {

        var fnome = $.trim($("#fnome").val());
        var lnome = $.trim($("#lnome").val());
        var email = $.trim($("#email").val());
        var pwd = $.trim($("#pwd").val());
        var celular = $.trim($("#celular").val());
        var CPF = $.trim($("#CPF").val());

        if (CPF.length != 11) {
            alert("informe um CPF válido");
            return false;
        }

        if (fnome == "") {
            alert("Informe o nome");
            return false;
        }

        if (email.length < 10) {
            alert("o Email precisa ter no mínimo 10 caracteres");
            return false;
        }

        if (!"#email:contains('.com')") {
            alert("O email precisa possuir '.com'");
            return false;
        }

        if (!"#email:contains('@')") {
            alert("O email precisa possuir '@'");
            return false;
        }


        if (pwd.length < 8) {
            alert("A senha precisa ter no mínimo 8 caracteres");
            return false;

        }


        var id = email;

        var pessoa = new Object();
        pessoa.id = id;
        pessoa.CPF = CPF;
        pessoa.fnome = fnome;
        pessoa.lnome = lnome;
        pessoa.email = email;
        pessoa.celular = celular;
        pessoa.pwd = pwd;

        var pessoa = JSON.stringify(pessoa);
        localStorage.setItem(id, pessoa);

    });

});

document.getElementById("logar").addEventListener("click", function (event) {

    event.preventDefault();

    var lemail = $.trim($("#lemail").val());
    var lpwd = $.trim($("#lpwd").val());

    var pessoa = new Object();

    pessoa = JSON.parse(localStorage.getItem(lemail));

    if (pessoa == null) {
        alert("Email incorreto");
        return false;
    }

    var cpwd = pessoa.pwd;

    if (lpwd !== cpwd) {
        alert("A senha está incorreta");
        return false;
    }

    localStorage.setItem("logado", "true");
    mudabtlogin();
    location.href = "./Filmes.html";
});