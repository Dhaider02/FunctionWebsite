function sortList() {
    var input = document.getElementById('numbers').value;
    var numbers = parseNumbers(input);
  
    var sortedNumbers = numbers.sort(function(a, b) {
      return a - b;
    });
  
    displayOutput(sortedNumbers);
  }
  
  function calculateMin() {
    var input = document.getElementById('numbers').value;
    var numbers = parseNumbers(input);
  
    var minimum = Math.min(...numbers);
  
    displayOutput(minimum);
  }
  
  function calculateAvg() {
    var input = document.getElementById('numbers').value;
    var numbers = parseNumbers(input);
  
    var sum = numbers.reduce(function(a, b) {
      return a + b;
    }, 0);
    var average = sum / numbers.length;
  
    displayOutput(average.toFixed(2));
  }
  
  function parseNumbers(input) {
    var numbers = input.split(',').map(function(number) {
      return parseInt(number.trim(), 10);
    });
  
    return numbers;
  }
  
  function displayOutput(output) {
    var outputElement = document.getElementById('output');
    outputElement.textContent = 'Output: ' + output;
  }
  