// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let numberTestInput = Number(testInput);

       if(testInput === "") {
            return "Empty";
       } else if (isNaN(numberTestInput)) {
            return "Not a Number";
       } else if (!isNaN(numberTestInput)) {
            return "Is a Number";
       }
    
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
       if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
       } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"  || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
     
        alert("Make sure to enter valid information for each field!");
       } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "C7254E";
       } 
        if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "#C7254E";
       } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#419F6A";
       }
        // list.style.visibility = "visible";
        // pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        // copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       }
      
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
