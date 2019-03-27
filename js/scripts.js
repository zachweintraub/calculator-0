// BUSINESS LOGIC HERE

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// UI LOGIC HERE

$(document).ready(function() {
  $('#addbutton').click(function(event) {
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var sum = add(number1, number2);
    $('#output').text(sum);
    event.preventDefault();
  });

  $('#subtractbutton').click(function(event) {
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var difference = subtract(number1, number2);
    $('#output').text(difference);
    event.preventDefault();
  });

  $('#multiplybutton').click(function(event) {
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var product = multiply(number1, number2);
    $('#output').text(product);
    event.preventDefault();
  });

  $('#dividebutton').click(function(event) {
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var quotient = divide(number1, number2);
    $('#output').text(quotient);
    event.preventDefault();
  });
});
