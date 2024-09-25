window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;

  // 스크롤 위치에 따라 opacity 조절
  var opacity = 1 - scrollPosition / (windowHeight * 0.5);

  // opacity가 0 이하면 완전히 투명하게, 1 이상이면 완전히 불투명하게
  opacity = Math.max(0, Math.min(1, opacity));

  header.style.opacity = opacity;
});
