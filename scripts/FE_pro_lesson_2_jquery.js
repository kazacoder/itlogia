$(document).ready(function(){
    $('h1').click(function(){

        $('h1').animate({
            fontSize: '70px',
            marginleft: '+=50px'
        }, 'slow', 'swing', () => {alert('done')});
    })
    $( "#accordion" ).accordion();
    $('#show_dialog').click(function(){
        $( "#dialog" ).dialog();
    })

    $('#hide_all').click(function(){
        $('#jquery_content').slideToggle()
    })



    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

})