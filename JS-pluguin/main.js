$(document).ready(() => {
    $('#carousel-images').slick({
        autoplay: true,
    })

    $('.menu-hamburger').click(() => {
        $('nav').slideToggle()
    })

    $('#campo-telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }, 
            mensagem: {
                required: true
            }, 
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira seu nome"
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`Existem campos ${camposIncorretos}, incorretos!`)
            }
        }
    });

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
    
})
