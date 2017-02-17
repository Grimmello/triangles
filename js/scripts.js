$(function(){
  $("form").submit(function () {
    event.preventDefault();
    var firstInput = $("input#firstSide").val();
    var secondInput = $("input#secondSide").val();
    var thirdInput = $("input#thirdSide").val();
    if ( thirdInput<=firstInput+secondInput || firstInput<=secondInput+thirdInput || secondInput<=firstInput+thirdInput) {
      if (firstInput===secondInput && secondInput===thirdInput){ //equalateral
        alert("Equalateral");
      } else if (firstInput===secondInput && secondInput!==thirdInput || firstInput===thirdInput && firstInput!==secondInput || secondInput===thirdInput && thirdInput!==firstInput) { //isosceles
        alert("Isosceles")
      } else if (firstInput!==secondInput && firstInput!==thirdInput && secondInput!==thirdInput) { //scalene
        alert("Scalene")
      }}

    else { //not a triangle
      alert("Not a triangle")
      }
    console.log(firstInput);
  });
});
