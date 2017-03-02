$(function(){
  $.get('https://www.reddit.com/r/aww/.json', function(cuteStuff){
    var redditArray = cuteStuff.data.children;

    for(i=0; i<redditArray.length; i++){
      var title = redditArray[i].data.title;
      var thumbnail = redditArray[i].data.thumbnail;
      var author = redditArray[i].data.author;
      var score = redditArray[i].data.score;
      var permalink = "https://www.reddit.com"+redditArray[i].data.permalink;

      $('section').append(
        '<div><p>Title: '+title+'<br><br>Author: '+author+'<br><br>Score: '+score+
        '</p><a href="'+permalink+'" target="_blank"><img src="'+thumbnail+'"/></a></div>');
    }
  });
});
