var planets = [['Pluto', 0.06],['Neptune', 1.148],['Uranus', 0.917],
  ['Saturn', 1.139],['Jupiter', 2.640],['Mars', 0.3895],['Moon', 0.1655],
  ['Earth', 1],['Venus', 0.9032],['Mercury', 0.377],['Sun', 27.9]];
  
planets.reverse().forEach(function(planet) {
  var newList = document.createElement("option");
  newList.text = planet[0];
  document.getElementById("planets").add(newList);   
});

function calculateWeight(weight, planetName) {
  var result = '';
  planets.forEach(function(name) {
    if (planetName == name[0]) {
      result = (name[1] * +weight);
    }
  });
  return result
}

function handleClickEvent(e) {
  var userWeight = document.getElementById("user-weight").value; 
  var planetName = document.getElementById("planets").value;
  var result = calculateWeight(userWeight, planetName);

  document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result +"lbs!";
}
  
document.getElementById("calculate-button").onclick = function() {handleClickEvent()};

if (document.getElementById("checkbox").checked) {
  console.log(document.getElementById("planets").options);   
}