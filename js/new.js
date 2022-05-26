$("#tab li").on("click", function () {
  $("#tab .active").removeClass("active");
  $(this).addClass("active");
});
// 2021/12/17 修改
var innerHtml =
'<div class="item" >' +
'<div class="card" >' +
'<img class="cardImg" src="Portfolio/images/翻牌遊戲.gif" alt="">' +
'<div class="cardtitle">翻牌配對遊戲</div>' +
'<div class="cardContent">' +
"<p>運用click 改變class的樣式，呈現配對正確出現恭喜!恭喜提示，配對錯誤出現再試試吧。</p>" +
"</div>" +
"</div>" +
"</div>"+
  '<div class="item">' +
  '<div class="card">' +
  '<img class="cardImg" src="Portfolio/images/手風琴動畫.gif" alt="">' +
  '<div class="cardtitle">手風琴動畫</div>' +
  '<div class="cardContent">' +
  "<p>用運click 改變class的樣式.active 及hover 。</p>" +
  "</div>" +
  "</div>" +
  "</div>"+
  '<div class="item">' +
  '<div class="card">' +
  '<img class="cardImg" src="Portfolio/images/我的調色盤.gif" alt="">' +
  '<div class="cardtitle">我的調色盤</div>' +
  '<div class="cardContent">' +
  "<p>用運click 改變class的樣式，感應所選顏色。</p>" +
  "</div>" +
  "</div>" +
  "</div>"+
  '<div class="item">' +
  '<div class="card">' +
  '<img class="cardImg" src="Portfolio/images/購物車價格加總.gif" alt="">' +
  '<div class="cardtitle">購物車價格加總及視窗進度條</div>' +
  '<div class="cardContent">' +
  "<p>用運scrollTop，取得目前在視窗的位置，運用keyup及find 取得水果價格，並進行加總。</p>" +
  "</div>" +
  "</div>" +
  "</div>";
$("#jqueryCarousel")[0].innerHTML = innerHtml;
// 2021/12/17 修改
var rwdinnerHtml =
'<div class="item">' +
'<div class="card">' +
'<img class="cardImg" src="Portfolio/images/美髮網站切版.gif" alt="">' +
'<div class="cardtitle">美髮網站切版</div>' +
'<div class="cardContent">' +
"<p>運用HTML及CSS，進行RWD切版</p>" +
"</div>" +
"</div>" +
"</div>"+
  '<div class="item">' +
  '<div class="card">' +
  '<img class="cardImg" src="Portfolio/images/Bootstrap.gif" alt="">' +
  '<div class="cardtitle">網站切版</div>' +
  '<div class="cardContent">' +
  "<p>運用bootstrap，進行切版。</p>" +
  "</div>" +
  "</div>" +
  "</div>";
$("#RWDCarousel")[0].innerHTML = rwdinnerHtml;
var JQueryListHtml=
'<div class="listCard row">'+
'<img class="listCardImg" src="Portfolio/images/翻牌遊戲.gif" alt="">' +
'<div class="listCardContent">'+
    '<div class="listCardtitle">翻牌配對遊戲</div>'+
   '<p>運用click 改變class的樣式，呈現配對正確出現恭喜!恭喜提示，配對錯誤出現再試試吧。</p>' +
'</div>'+
'</div>'+
'<div class="listCard row">'+
'<img class="listCardImg" src="Portfolio/images/手風琴動畫.gif" alt="">' +
'<div class="listCardContent">'+
    '<div class="listCardtitle">手風琴動畫</div>'+
   '<p>用運click 改變class的樣式.active 及hover 。</p>' +
'</div>'+
'</div>'+
'<div class="listCard row">'+
'<img class="listCardImg" src="Portfolio/images/我的調色盤.gif" alt="">' +
'<div class="listCardContent">'+
    '<div class="listCardtitle">我的調色盤</div>'+
   '<p>用運click 改變class的樣式，感應所選顏色。</p>' +
'</div>'+
'</div>'+
'<div class="listCard row">'+
'<img class="listCardImg" src="Portfolio/images/購物車價格加總.gif" alt="">' +
'<div class="listCardContent">'+
    '<div class="listCardtitle">購物車價格加總及視窗進度條</div>'+
   '<p>用運scrollTop，取得目前在視窗的位置，運用keyup及find 取得水果價格，並進行加總。</p>' +
'</div>'+
'</div>'

$("#JQuerytotalList")[0].innerHTML = JQueryListHtml;

var RwdListHtml=
'<div class="listCard row">'+
'<img class="listCardImg" src="Portfolio/images/美髮網站切版.gif" alt="">' +
'<div class="listCardContent">'+
    '<div class="listCardtitle">美髮網站切版</div>'+
   '<p>運用HTML及CSS，進行RWD切版。</p>' +
'</div>'+
'</div>'+
'<div class="listCard row">'+
'<img class="listCardImg" src="Portfolio/images/Bootstrap.gif" alt="">' +
'<div class="listCardContent">'+
    '<div class="listCardtitle">網站切版</div>'+
   '<p>運用bootstrap，進行切版。</p>' +
'</div>'+
'</div>'

$("#rwdtotalList")[0].innerHTML = RwdListHtml;
// Go to the next item
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".customPrevBtn").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});


$("#carousel").click(function () {
  $("#jquery_carousel")[0].style.display = "block";
  $("#JQuerytotalList")[0].style.display = "none";
});
$("#list").click(function () {
  $("#jquery_carousel")[0].style.display = "none";
  $("#JQuerytotalList")[0].style.display = "block";
});

$("#rwdcarouselBtn").click(function () {
  $("#rwd_carousel")[0].style.display = "block";
  $("#rwdtotalList")[0].style.display = "none";
});
$("#rwdlistBtn").click(function () {
  $("#rwd_carousel")[0].style.display = "none";
  $("#rwdtotalList")[0].style.display = "block";
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true, // 循環播放
  margin: 10, // 外距 10px
  responsive: {
    0: {
      items: 1, // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
    },
    900: {
      items: 3, // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      items: 4, // 螢幕大小為 1000 以上 顯示 5 個項目
    },
  },
});

{/* <div class="listCard row">
<img class="listCardImg" src="" alt="">
<div class="listCardContent">
    <div class="listCardtitle">推動原民會</div>
    <p>2021/11/22</p>
    <p>推動原民會推動原民會推動原民會推動原民會推動原民會推動原民會推動..............</p>
</div>
</div>
<div class="listCard row">
<img class="listCardImg" src="" alt="">

<div class="listCardContent">
    <div class="listCardtitle">推動原民會</div>
    <p>2021/11/22</p>
    <p>推動原民會..............</p>
</div>
</div> */}