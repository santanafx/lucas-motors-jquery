$(function () {
    $("#carousel-imagens").slick({
        autoplay: true,
    });

    $(".menu-hamburguer").on("click", function () {
        $("nav").slideToggle();
    });

    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(XX) XXXXX-XXXX",
    });

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            },
        },
        messages: {
            nome: "Por favor, insira o seu nome",
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
    });

    $(document).on("click", ".lista-veiculos button", function () {
        const destino = $("#contato");

        const nomeVeiculo = $(this).parent().find("h3").text();

        $("#veiculo-interesse").val(nomeVeiculo);

        $("html").animate(
            {
                scrollTop: destino.offset().top,
            },
            1000
        );
    });
});
