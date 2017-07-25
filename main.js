$(document).ready(function(){
    
    $("img").click(function() {
        var temp = $(this).data('alt-src');
        $(this).data('alt-src',$(this).attr('src'));
        $(this).attr('src',temp);
    });
});