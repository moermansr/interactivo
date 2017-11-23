 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      document.getElementById("question1").style.display = 'none';
      document.getElementById("question2").style.display = 'none';
      document.getElementById("question3").style.display = 'none';

      document.getElementById("playerbox").style.display = 'block';

      var current = 1;

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: 'F7u6Qyp_xjw',
//'JQ1WsFNQsjA'
          playerVars: {controls:0, disablekb:1,modestbranding:1, showinfo:0, rel:0},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == 0) {
          document.getElementById("playerbox").style.display = 'none';
          if(current == 4) document.getElementById("question" + current).style.display = 'none';
          else document.getElementById("question" + current).style.display = 'block';

        }
      }
 

$( "#answer1" ).click(function() {
    document.getElementById("question" + current).style.display = 'none';
    var answer = $('input[name=answer1]:checked').val();
    if (answer == "1") {
       player.loadVideoById({'videoId': 'zBVVf6y1VVs'})
       current = 2;
    }
    else player.loadVideoById({'videoId': 'XNbqqOzr7H8'});  

    document.getElementById("playerbox").style.display = 'block';
});

$( "#answer2" ).click(function() {
    document.getElementById("question" + current).style.display = 'none';
    var answer = $('input[name=answer2]:checked').val();
    if (answer == "2") {
       player.loadVideoById({'videoId': '-n4hlWn_9as'})
       current = 3;
    }
    else player.loadVideoById({'videoId': 'XNbqqOzr7H8'});  

    document.getElementById("playerbox").style.display = 'block';
});


$( "#answer3" ).click(function() {
    document.getElementById("question" + current).style.display = 'none';
    var answer = $('input[name=answer3]:checked').val();
    if (answer == "2") {
      current = 4
       player.loadVideoById({'videoId': '-UGBfS5nHto'})
    }
    else player.loadVideoById({'videoId': 'XNbqqOzr7H8'});  

    document.getElementById("playerbox").style.display = 'block';
});