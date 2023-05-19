// Array of planet names and their respective weights
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// Calculate the weight on a specific planet
function calculateWeight() {
  var weight = parseFloat(document.getElementById('weight-input').value);
  var planetIndex = document.getElementById('planet-select').selectedIndex;
  
  if (isNaN(weight)) {
    document.getElementById('result-message').innerHTML = 'Please enter a valid weight.';
  } else {
    var planetWeight = weight * planets[planetIndex][1];
    var planetName = planets[planetIndex][0];
    var message = 'Your weight on ' + planetName + ' is ' + planetWeight.toFixed(2) + ' kg.';
    document.getElementById('result-message').innerHTML = message;
  }
}

document.getElementById('calculate-button').onclick = calculateWeight;