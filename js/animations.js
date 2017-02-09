
  $('.tweet-compose').on('click', function(){
  $('#tweet-controls').css('visibility','visible');
  $('#char-count').css('visibility','visible');
});

  $('.tweet-compose').on('click', function(){
  $(this).css('height', '150px')
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
  var tweetText = $('.tweet-compose').val();
  var newRyanTweet = $('.tweet').first().clone();

  newRyanTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
  newRyanTweet.find('.fullname').html('Ryan McDaniel');
  newRyanTweet.find('.username').html('@slcrymick');
  newRyanTweet.find('.tweet-text').html(tweetText);
  newRyanTweet.find('.num-retweets').html(0);
  newRyanTweet.find('.num-favorites').html(0);
  newRyanTweet.find('tweet-compose').html('reply to @slcrymick');
  newRyanTweet.find('.users-interact').html('<div></div>');
  $('#stream').prepend(newRyanTweet);
});

$('#tweet-submit').on('click',function(){
  $('.tweet-compose').val('');
  $('#char-count').html(lengthAllowed);
  $('#tweet-controls').hide();
  $('.tweet-compose').css('height', '60px');
});

$('.tweet').on('mouseover', function(){
  $(this).find('.tweet-actions').show();
  $(this).find('.stats').show();
});
$('.tweet').on('mouseout', function() {
    $(this).find('.tweet-actions').hide();
    $(this).find('.stats').hide();
});
$('.stats').hide();
