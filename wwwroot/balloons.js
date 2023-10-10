function animate(animate){
    // make the image visible
    $('#' + animate.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(animate).is(':checked') ?
     $('#' + animate.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
     $('#' + animate.id + 'Img').addClass('animate__animated animate__bounceOutUp');

}



$(function(){
    const animations = ['bounce','flash','pulse','rubberBand','shakeX','shakeY','headShake','swing','tada','wobble','jello','heartbeat'];
    $('h1').addClass('animate__'+ animations[Math.floor(Math.random()*11)]);




    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        animate(this);
    });
    $('.form-check-input-toggle').on('change', function (){
        if ($('.form-check-input-toggle').prop('checked',)) {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
            });
        }else{
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
            });
        }
        $('.form-check-input').each(function () {
            animate(this);
        });
    });
    $('.colorOption').hover(function(){
        $('h1').css('color', $(this).prop('for'));
        }, function(){
        $('h1').css('color', 'slategray');
    });
    
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        if(!$('#red').prop('checked') || !$('#green').prop('checked') || !$('#blue').prop('checked')){
            e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });
});
