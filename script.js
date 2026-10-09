function abrirMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("ativo");
}


function mostrarToast() {

    const toast = document.getElementById("toast");

    toast.classList.add("mostrar");

    setTimeout(function() {

        toast.classList.remove("mostrar");

    }, 3000);
}


function abrirModal() {

    const modal = document.getElementById("modal");

    modal.classList.add("mostrar");
}


function fecharModal() {

    const modal = document.getElementById("modal");

    modal.classList.remove("mostrar");
}


function enviarFormulario(event) {

    event.preventDefault();

    const toast = document.getElementById("toast");

    toast.textContent = "Mensagem enviada com sucesso!";

    toast.classList.add("mostrar");

    document.getElementById("formContato").reset();

    setTimeout(function() {

        toast.classList.remove("mostrar");

    }, 3000);
}