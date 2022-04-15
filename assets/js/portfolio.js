

document.addEventListener("scroll", function(){
    let elms = $('.move-fadeIn');
    let screen_height = window.innerHeight;
    let offset_top;

    for (let i=0; i<elms.length; i++){
        offset_top = $(elms[i]).offset().top;
        if (window.scrollY > offset_top - screen_height + 100){
            if ($(elms[i]).attr('class').search('animated') == -1){
                $(elms[i]).removeClass('move-fadeIn');
                $(elms[i]).addClass('animated');
                $(elms[i]).addClass('fadeInUp');
            }
        }
    }
});
