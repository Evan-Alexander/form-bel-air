$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var person1Input = $("input#person1").val();
    var verb1Input = $("input#verb1").val();
    var placeInput = $("input#place").val();
    var nounsInput = $("input#nouns").val();
    var familyInput = $("input#family").val();

    $(".person1").append();
    $(".verb1").append();
    $(".place").append();
    $(".nouns").append();
    $(".family-names").append();

    $("#story").show();

    event.preventDefault();
  });

});
