$('.q-lang-selector__title-wrapper').on('click', function () {
    $(this).parent().toggleClass('active')
})

$('.q-selector_type__title-wrapper').on('click', function () {
    $(this).parent().toggleClass('active')
})

$('.q-input').on('click', function () {
    $(this).toggleClass('active')
})


$('.q-input.selected').on('click', function () {
    $(this).next().toggleClass('select')
})

// show menu
$('#show-menu').on('click', function () {
    $('#menu').toggle();
    $('.header').toggleClass('active');
    if ($('.header').hasClass('active')) {
        $('body').css({    
            overflow: 'hidden'
        }); 
    } else {
        $('body').css({    
            overflow: 'auto'
        }); 
    }
})

//show modal
$('.tab-table__name').on('click', function() {
    $('.comand-modal').removeClass('hidden');   
    $('.bg-modal').removeClass('hidden');   
    document.body.classList.add('off-scroll')
})

$('.comand-modal__close').on('click', function(){
    $('.comand-modal').addClass('hidden');
    $('.bg-modal').addClass('hidden');
    document.body.classList.remove('off-scroll')
})
