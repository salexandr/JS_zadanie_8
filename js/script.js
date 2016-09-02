$('.help').on('click', function (){
	$('.clarification').fadeIn();
});

$('.hint').hover(
    function(){
        $(this).next('.clarification').stop().fadeIn();
},
    function(){
        $('.clarification').stop().fadeOut();
});


$(function() {
        $("#content div").hide();
        $("#tabs li:first").attr("id","current");
        $("#content div:first").fadeIn();
 
    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#content div").hide();
        $("#tabs li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('title')).fadeIn();
    });
})();

