$(document).ready(function() {
    $('botao-abrir-1').click(function() {
        var show = $(this).attr('show').replace('botao-abrir-1', 'section-1');
        $('#show').slideDown();
    });

    $('botao-fechar-1').click(function() {
        var hidden = $(this).attr('hidden').replace('botao-fechar-1', 'section-1');
        $('#hidden').slideUp();
    });
});