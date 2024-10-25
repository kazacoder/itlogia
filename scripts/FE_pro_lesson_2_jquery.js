$(document).ready(function(){
    $('h1').click(function(){

        $('h1').animate({
            fontSize: '70px',
            marginleft: '+=50px'
        }, 'slow', 'swing', () => {alert('done')});
    })
    $( "#accordion" ).accordion();
})