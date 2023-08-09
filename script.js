// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function () {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let list = document.getElementById("faultyItems");

      formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
      event.preventDefault();
   })

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
   })
   // let listedPlanets;
   // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
 
   // console.log(listedPlanetsResponse);
   //    listedPlanetsResponse.then(function (result) {
   //        listedPlanets = result;
   //        console.log(listedPlanets);
   //    }).then(function () {
   //        console.log(listedPlanets);
   //        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   //       const randomPlanet = pickPlanet(listedPlanets);
   //        addDestinationInfo(document, randomPlanet.name, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.imageUrl);
   //    })
   // add prevent default somewhere here

});