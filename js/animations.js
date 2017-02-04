$('.tweet-compose').on('click', function(){
  $('#tweet-controls').css('visibility','visible');
  $('#char-count').css('visibility','visible');

});

var maxLength = 140;
$('textarea').keyup(function(){
  var length = $(this).val().length;
  var charsTyped = maxLength-length;
  $('#char-count').text(charsTyped);
  if(charsTyped < 11){
    $('#char-count').css('color','red')
  }
  else if (charsTyped > 10) {
    $('#char-count').css('color','black')
  }
  if(length > maxLength){
    $('#tweet-submit').hide();
  }
});

$('#tweet-submit').on('click',function(){
  var value = $('.tweet-compose').val();
  var content = $('#stream');
  $(content).prepend(value);
})
