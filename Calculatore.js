var Op = prompt("Welcome to the Calculatore! (It's a calculator) Enter an operation, ADD, SUBTRACT, MULTIPLY or DIVIDE:");
var no1 = parseInt(prompt("Please enter one of the numbers to " + Op + ":"));
var no2 = parseInt(prompt("Please enter another number to " + Op + ":"));
var calc = function() {
  //adding
  if (Op == "ADD") {
    var a = no1 + no2
    document.write("The sum is" + " :" + a)
  }
  //subtracting
  else if (Op == "SUBTRACT") {
    var a = no1 - no2
    document.write("The difference is" + " :" + a)
  }
  //multiplying
  else if (Op == "MULTIPLY") {
    var a = no1 * no2
    document.write("The product is" + " :" + a)
  }
  //dividing
  else if (Op == "DIVIDE") {
    var a = no1 / no2
    document.write("The quotient is" + " :" + a)
  }
}
calc()
