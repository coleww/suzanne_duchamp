

var mirrorClicked = false;
var scaffoldClicked = false;
var balloonsClicked = false;
var starsClicked = false;



var check_forFinality = function(){
  if(is_finality()){
    installFinality();
  }
};

var is_finality = function(){
  return balloonsClicked && starsClicked && scaffoldClicked && mirrorClicked;
};

var installFinality = function(){
  // activating hover listeners for Restored and Broken
  $(".future-siggy").addClass("siggy");

  // listener for Restored
  $('.signature-top-right').click(function(){
    $(".item").css({position: 'static'});
  });

  // listener for Broken
  $(".signature-bot-right").click(function(){
    $(".item").css({position: 'absolute'});
    $bars.css({opacity: 1});
    $('iframe').attr('src', '//www.youtube.com/embed/zUbKbhyEZYY?autoplay=1&controls=0&loop=1&playlist=zUbKbhyEZYY');
    $('.tower').css({fontSize: '100px', top: 0});
    $(".stars").css({opacity: 1});
    $('.circle').each(function(){
      $(this).parent().css({top: '1000px'});
    });
  });
};





  // CIRCLE SHIMMER! WILL BE BETTER WITH MORE LAYERS?!?!?!
    var $circles = $('.circle');
    window.setInterval(function(){

      var circle = _.sample($circles);

      var width = $(circle).css("width").replace('px', '') | 0;

      var turvy = (width -= 10) + 'px'
      $(circle).css({opacity: Math.random()})
      // $(circle).css({width: turvy, height: turvy});
    }, 300);

// BALLOONS WILL FLY AWAY!



// DECO ALL ZEE TEXTS! ADD MORE COLOR!
    var $texts = $('.text');
    $('.text').hover(function(){
       var textDeco = _.sample(['line-through', 'overline', 'underline', 'none'])
      $(this).css({textDecoration: textDeco});
    }, function(){
      $(this).css({textDecoration: 'none'})
    });
    // window.setInterval(function(){

    //   var text = _.sample($texts);
    //   var textDeco = _.sample(['line-through', 'overline', 'underline', 'none'])
    //   $(text).css({textDecoration: textDeco});
    // }, 500);





// scaffolding totters!
// travers the spans inside of
// for each of them, remove it and insert it inside it's next lowest sibling
// add CSS to tower to make the text overlay on each other and stuff (line0height...text-spacing?)


// mirror would shatter
// swap out iframe for things?
// overlay duchamp esque cracks?
// <iframe src="http://www.moma.org/audios/embed/29/734" width="480" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
// let that play


// STAR WOULD DIM






// WRECK THE TEXT
  $borebore = $(".boring");
  var $bars = $(".bars");
  $mirrorShatters =$(".left-text");

  $mirrorShatters.click(function(e){
    if(!mirrorClicked){
      mirrorClicked = true;
      check_forFinality();
      $mirrorShatters.addClass('fade');
      window.setTimeout(function(){
        $borebore.css({opacity: 0.7, borderRadius: '5%'})
        $borebore.append(_.shuffle($mirrorShatters.text().split("")));
        $mirrorShatters.remove();//css({opacity: 1})
      }, 5500)

      $('iframe').attr('src', "http://www.moma.org/audios/embed/29/734?autoplay=1")

      $bars.addClass('fade')
    }
  })

  $scaffoldTots =$(".mid-left-text")
  $scaffoldTots.click(function(e){
    if(!scaffoldClicked){
      scaffoldClicked = true;
      check_forFinality();
      $scaffoldTots.addClass('fade');
      window.setTimeout(function(){
        $borebore.css({opacity: 0.7, borderRadius: '5%'})
        $borebore.append(_.shuffle($scaffoldTots.text().split("")));
        $scaffoldTots.remove();//css({opacity: 1})
      }, 5500)

      $towers = $('.tower').find('span');
      window.setInterval(function(){
        if($towers.length > 1) {
          var tower_index = ~~(Math.random() * ($towers.length - 1));
          var $tower = $($towers[tower_index]);
          var text = $tower.text();
          var chars = text.split('');
          var next_tower_text = $($towers[tower_index + 1]).text();

          $($towers[tower_index + 1]).text(next_tower_text + _.sample(chars));

          if (text.length > 1) {
            $tower.text(text.substr(1,text.length -1))
          } else {
            var top = $('.tower').css('top').replace('px', '') | 0;
            $('.tower').css({top: top + 5 + 'px'});


            var f_size = $tower.css('fontSize').replace('px', '') | 0;
            $('.tower').css({fontSize: f_size - 1 + 'px'});
            $towers.css({fontSize: f_size - 1 + 'px'});
            $tower.remove();
          }
        }
      }, 30)
    }
  })


  $ballFly =$(".mid-right-text");
  $ballFly.click(function(e){
    if(!balloonsClicked){
      balloonsClicked = true;
      check_forFinality();
      $ballFly.addClass('fade');
      window.setTimeout(function(){
        $borebore.css({opacity: 0.7, borderRadius: '5%'});
        $borebore.append(_.shuffle($ballFly.text().split("")));
        $ballFly.remove();//css({opacity: 1})
      }, 5500);

      window.setInterval(function(){

        var $bigCircle = $(_.sample($circles)).parent();
        var top = $bigCircle.css("top").replace('px', '') | 0;
        // console.log(top, left)
        var topsy = (top -= 10) + 'px';


        $bigCircle.css({top: topsy});
      }, 5);
    }
  });


  $stardim =$(".right-text");
  $stardim.click(function(e){
    if(!starsClicked){
      starsClicked = true;
      check_forFinality();
      $stardim.addClass('fade');
      window.setTimeout(function(){
        $borebore.css({opacity: 0.7, borderRadius: '5%'});
        $borebore.append(_.shuffle($stardim.text().split("")));
        $stardim.remove();//css({opacity: 1})
      }, 5500);
      var $stars = $('.star');
      window.setInterval(function(){

        var $star = $(_.sample($stars));
        var opac = $star.css('opacity');
        $star.css({opacity: opac -= 0.01});

      }, 30);
    }
  });





var BUBBLE_COUNT = 0;
var bubble_done = false;
var $circs = $('.circle');
$('.signature-multi').click(function(){
  if(!BUBBLE_COUNT){
    $('.bubble').css({opacity: 1});
  }
  BUBBLE_COUNT++;
  if(BUBBLE_COUNT < 16){
    $('.bubble').append(_.shuffle($circs.clone().css({position: 'static', width: '20px', height: '20px', display: 'inline-block'})));
  } else {
    bubble_done = true;
    $('.artbanner').css({opacity: 1});
  }
  var saved = false;
  if (bubble_done){
    $("#btnSave").click(_.throttle(function() {
        $("#btnSave").remove();
        if(!saved){
          saved = true;
          html2canvas($(".bubble"), {
              onrendered: function(canvas) {
                  theCanvas = canvas;
                  canvas.toBlob(function(blob) {
                      saveAs(blob, "a_bubble_art.png");
                      saveAs = undefined;

                  });
              }
          });
        }
    }, 5000));
  }
});



//