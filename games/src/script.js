// var no = 0;
// var stopPlay = 0;
// var runTimes = 0;
// var sec = 50;

// function play() {
//   no++;
//   runTimes++;
//   if (no >= 11) {
//     no = 1;
//   }
//   // console.log("no:"+no+"      runTimes:" + runTimes+"     stopPlay:" + stopPlay);
//   if (runTimes > stopPlay) {
//     $("button").attr("disabled", false);
//     alert($(".active").text());
//   } else if (runTimes + 10 > stopPlay) {
//     $(".no" + no)
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//     setTimeout(play, (sec = sec * 1.4));
//   } else {
//     $(".no" + no)
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//     setTimeout(play, sec);
//   }
// }

// $("button").click(function() {
//   $(this).attr("disabled", true);
//   runTimes = 0;
//   sec = 50;
//   no = no - 1;
//   stopPlay = Math.floor(Math.random() * (20 - 0) + 20);
//   play();
// });

// 小倩版本
var no = 0;
var stopPlay = 0;
var runTimes = 0;
var sec = 50;

init();
function play() {
  no++;
  runTimes++;
  if (no >= 11) {
    no = 1;
  }
  //console.log("no:"+no+"      runTimes:" + runTimes+"     stopPlay:" + stopPlay);
  if (runTimes > stopPlay) {
    //$("button").attr("disabled",false);
    $(".light").css("animation-duration", "2s");
    // alert($(".active").text());
    // 彈窗效果
    var href = $("#letmeopen");
    $(href).fadeIn(250);
    $("#winPrizes").text($(".active").text());
    $(href).children$("popup-box").removeClass("transform-out").addClass("transform-in");
    e.preventDefault();
  } else if (runTimes + 10 > stopPlay) {
    $(".no" + no)
      .addClass("active")
      .siblings()
      .removeClass("active");
    setTimeout(play, (sec = sec * 1.4));
  } else {
    $(".no" + no)
      .addClass("active")
      .siblings()
      .removeClass("active");
    setTimeout(play, sec);
    $(".light").css("animation-duration", ".3s");
  }
}
function init() {
  runTimes = 0;
  sec = 50;
  no = no - 1;
  $("button").attr("disabled", false);
}
$("button").click(function() {
  if (runTimes > 0) return;
  // console.log("run");
  stopPlay = Math.floor(Math.random() * (20 - 0) + 20);
  $(this).attr("disabled", true);
  play();
});

// 彈窗效果
// $(".popup-btn").click(function() {
//   var href = $(this).attr("href");
//   $(href).fadeIn(250);
//   $(href)
//     .children$("popup-box")
//     .removeClass("transform-out")
//     .addClass("transform-in");
//   e.preventDefault();
// });

$(".popup-close").click(function() {
  init();
  $(".popup-wrap").fadeOut(200);
  $(".popup-box")
    .removeClass("transform-in")
    .addClass("transform-out");
  e.preventDefault();
});