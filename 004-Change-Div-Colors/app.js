$(document).ready(function () {
  $(".change-color").click(function () {
    var colors = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#6A5ACD"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var group = $(this).data("group");
    $(group).find(".color-box").css("background-color", randomColor);
  });
});
