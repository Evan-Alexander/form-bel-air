$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $(".person1").append();
    $(".verb1").append();
    $(".place").append();
    $(".nouns").append();
    $(".family-names").append();

    $("#story").show();

    event.preventDefault();
  });

});
