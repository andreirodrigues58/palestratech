$(document).ready(function(){
    // Toggle do menu móvel
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        // Alterna o ícone entre barras e x
        $('#mobile_btn i').toggleClass('fa-bars fa-times');
    });
});

function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário se a validação falhar

    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var ingresso = document.getElementById("ingresso").value;

    // Verifica se todos os campos estão preenchidos
    if (nome === "" || email === "" || telefone === "" || ingresso === "") {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
    }

    // Expressão regular para validar o email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Expressão regular para validar o telefone
    var telefoneRegex = /\(\d{2}\)\s\d{5}-\d{4}/;
    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.");
        return;
    }

    // Se tudo estiver correto, redireciona para a página de pagamento
    window.location.href = 'pagamento.html';
}

