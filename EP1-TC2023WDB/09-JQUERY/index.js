
$("body").keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});



//$("h1").css("color", "blue");
