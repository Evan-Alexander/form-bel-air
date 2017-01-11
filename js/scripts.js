$(document).ready(function() {
  $(".blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var verb1Input = $("input#verb1").val();
    var placeInput = $("input#place").val();
    var nounsInput = $("input#nouns").val();
    var familyInput = $("input#family").val();

    $(".person1").text(person1Input);
    $(".verb1").text(verb1Input);
    $(".place").text(placeInput);
    $(".nouns").text(nounsInput);
    $(".family").text(familyInput);

    $("#story").show();

    event.preventDefault();
  });
});
