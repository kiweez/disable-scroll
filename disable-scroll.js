$(document).ready(function() {
    $('button').toggle(function(){
        $('body').css('overflow', 'hidden');
        $(this).html('<i class="icon-white icon-ok"></i> Enable').removeClass('btn-warning').addClass('btn-primary');
        $(window).scroll(function(){
            $(this).scrollTop($(window).scrollTop()).scrollLeft($(window).scrollLeft());
      });
    }, function(){
        $('body').css('overflow', 'auto');
        $(window).unbind('scroll')
        $(this).html('<i class="icon-white icon-ban-circle"></i> Disable').removeClass('btn-primary').addClass('btn-warning');
    });
});
