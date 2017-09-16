$('button').click(function(){
  var color = $('input').val() + ' ';
  $('.color-picker').css("background-color", color);
  $('.picked-color ul').append('<li>' + color + '</li>');
  $('ul').children().last().css("background-color", color);
  
  $( "li" ).draggable({
    snap: 'li',
    snapMode: 'outer'
  });
});

 $("button").click(function(){
	$(".nav-tabs").append("<li></li>");
	$(".nav-tabs li").addClass('circle');
});