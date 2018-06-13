// Sparta Javascript Prompt Calculator

// Added a prompt to ask the user to choose between advanced and basic calculator
var whichCalculator = prompt("Which calculator would you like to use?  (a) for advanced and (b) for basic ").toLowerCase();

switch (whichCalculator) {
  case "b":
  var BCalc = {
      num1: parseFloat(prompt("Whats your first number?")),
      num2: parseFloat(prompt("Whats your second number?")),
      ops: prompt("Whats your operation Add(a), Subtract(s), Multiply(m), Divide(d)"),
      result: 0,
      add: function(num1,num2,result) {
        BCalc.result = BCalc.num1 + BCalc.num2;
        alert(BCalc.result);
      },
      subtract: function(num1,num2,result) {
        BCalc.result = BCalc.num1 - BCalc.num2;
        alert(Bcalc.result);
      },
      multiply: function(num1,num2,result) {
        BCalc.result = BCalc.num1 * BCalc.num2;
        alert(BCalc.result);
      },
      divide: function(num1,num2,result) {
        BCalc.result = BCalc.num1 / BCalc.num2;
        alert(BCalc.result);
      },
    }

    var ops = ops;
    switch (BCalc.ops) {
      case "+":
      BCalc.add();
      break;
      case "-":
      BCalc.subtract();
      break;
      case "*":
      BCalc.multiply();
      break;
      case "/":
      BCalc.divide();
      break;
      default:
      alert ("invalid input please try again");
      break;
    }
  }
  var calculator = function(num1,num2,ops,result){
    this.num1 = number 1;
    this.num2 = number 2;
    this.ops = operation;
    this.result = the result is;
    this.calc = function(){
      console.log("the result is " + result);
    }
  }
}
//
//     function enterValues() {
//       var value = parseFloat(prompt("Enter your first value"));
//       console.log(value);
//       return value;
//     }
//
//     function enterOperations() {
//       var value = prompt("Enter your operator [+][-][/][*]");
//       return value;
//     }
//
//     num1 = enterValues();
//     num2 = enterValues();
//     ops = enterOperations();
//
//
//     function calc(num1, num2, ops) {
//       switch (ops) {
//         case "+":
//           Add(num1, num2);
//           break;
//         case "-":
//           subtract(num1, num2);
//           break;
//         case "/":
//           divide(num1, num2);
//           break;
//         case "*":
//           multiply(num1, num2);
//           break;
//         default:
//           console.log("don't understand");
//       }
//     }
//
//     function Add(num1, num2) {
//       result = num1 + num2;
//       alert(result);
//     }
//
//     function multiply(num1, num2) {
//       result = num1 * num2;
//       console.log(result);
//       alert(result);
//     }
//
//     function divide(num1, num2) {
//       result = num1 / num2;
//       console.log(result);
//       alert(result);
//     }
//
//     function subtract(num1, num2) {
//       result = num1 - num2;
//       console.log(result);
//       alert(result);
//     }
//
//     calc(num1, num2, ops);
//     break;
//     case "a":
//
//   default:
//     alert("Invalid input, please try again");
// }

//Basic calculator (B)

//Add
//multiply
//divide
//subtract

// Advanced Calculator (A)
//Modulus
//Power
//Sqr root
//BMI
