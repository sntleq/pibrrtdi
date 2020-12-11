/* sksksksmskakamakakakakakakakakakakakakakakakakakakakakakamama */

$(document).on('scroll',function(){
  $(".a").css("opacity",100/window.scrollY);
  $(".prlxup").css("right",-10+0.1*-1*window.scrollY+"vw");
  $(".prlxupoutline").css("right",-10+0.1*-1*window.scrollY+"vw");
  $(".prlxdown").css("left",-10+0.1*-1*window.scrollY+"vw");
  $(".prlxdownoutline").css("left",-10+0.1*-1*window.scrollY+"vw");
  $(".one").css("opacity",Math.max(-65+0.07*window.scrollY,0));
  $(".fiveoutline").css("opacity",Math.max(-65+0.07*window.scrollY,0));
  $(".two").css("opacity",Math.max(-70+0.07*window.scrollY,0));
  $(".fouroutline").css("opacity",Math.max(-70+0.07*window.scrollY,0));
  $(".three").css("opacity",Math.max(-75+0.07*window.scrollY,0));
  $(".threeoutline").css("opacity",Math.max(-75+0.07*window.scrollY,0));
  $(".four").css("opacity",Math.max(-80+0.07*window.scrollY,0));
  $(".twooutline").css("opacity",Math.max(-80+0.07*window.scrollY,0));
  $(".five").css("opacity",Math.max(-85+0.07*window.scrollY,0));
  $(".oneoutline").css("opacity",Math.max(-85+0.07*window.scrollY,0));
  $("#gift").css("opacity",Math.max(-90+0.06*window.scrollY,0));
})
