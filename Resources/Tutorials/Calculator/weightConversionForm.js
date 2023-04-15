"use strict";
let weightVal = document.getElementById("weightValue");

let form = document.getElementById("weightConversionForm");
form.addEventListener("submit", weightConversionUpdate);

//TODO 3: Add an event listener for the input text field that runs the weightConversionUpdate function on change (user entering any character)
form.addEventListener("change", weightConversionUpdate);

// Helper Functions (Make use of them for your unit conversions)
function convertKiloToLbs(kilo) {
  return kilo * 2.20462;
}
function convertLbsToKilo(lbs) {
  return lbs * 0.453592;
}
function convertKiloToStone(kilo) {
  return kilo * 0.157473;
}
function convertKiloToGrams(kilo) {
  return kilo * 1000;
}
function convertGramsToKilo(grams) {
  return grams * 0.001;
}
function convertStoneToKilo(stone) {
  return stone * 6.35029;
}

function getCheckedValue(radioBtnName) {
  // find the selected radio button
  let radioBtns = document.getElementsByName(radioBtnName);
  for (let i = 0; i < radioBtns.length; i++) {
    // check if the button has been selected
    if (radioBtns[i].checked == true) {
      return radioBtns[i].value;
    }
  }
}
function weightConversionUpdate(evt) {
  // by default, the form will submit and the page will reload
  // we want to stop this "default" behaviour
  // therefore, any function that is attached to a form submit event should call the preventDefault() method on the event object
  evt.preventDefault();


  let value = document.getElementById("weightValue").value;
  let unit = getCheckedValue("weightRadioBtn");
  let result = document.getElementById("result");
  // TODO 2: ensure that results are not appended (added on) when the user clicks the submit button, but rather replaced
  result.innerHTML = "";


  // define the variables to be used in the switch statement
  let lbsVal;
  let stoneVal;
  let kiloVal;
  let gramVal;
  let lbsParagraph;
  let stoneParagraph;
  let kiloParagraph;
  let gramParagraph;


  switch (unit) {
    case "kilo":
      lbsVal = convertKiloToLbs(value);
      stoneVal = convertKiloToStone(value);
      gramVal = convertKiloToGrams(value);
      lbsParagraph = createResultParapgraph(unit, "LBS", value, lbsVal);
      stoneParagraph = createResultParapgraph(unit, "Stone", value, stoneVal);
      gramParagraph = createResultParapgraph(unit, "Grams", value, gramVal);

      //add the results to the result element
      result.appendChild(lbsParagraph);
      result.appendChild(stoneParagraph);
      result.appendChild(gramParagraph);

      break;
    // TODO 1: add switch cases for lbs and stone
    // TODO 1: don't forget to include a break-statement as well
    case "lbs":
      kiloVal = convertLbsToKilo(value);
      stoneVal = convertKiloToStone(kiloVal);
      gramVal = convertKiloToGrams(kiloVal);
      gramParagraph = createResultParapgraph(unit, "Grams", value, gramVal);
      kiloParagraph = createResultParapgraph(unit, "Kilo", value, kiloVal);
      stoneParagraph = createResultParapgraph(unit, "Stone", value, stoneVal);
    
      //add the results to the result element
      result.appendChild(kiloParagraph);
      result.appendChild(stoneParagraph);
      result.appendChild(gramParagraph);

      break;
  
    case "stone":
      kiloVal = convertStoneToKilo(value);
      lbsVal = convertKiloToLbs(kiloVal);
      gramVal = convertKiloToGrams(kiloVal);
      kiloParagraph = createResultParapgraph(unit, "Kilo", value, kiloVal);
      lbsParagraph = createResultParapgraph(unit, "LBS", value, lbsVal);
      gramParagraph = createResultParapgraph(unit, "Grams", value, gramVal);

      //add the results to the result element
      result.appendChild(kiloParagraph);
      result.appendChild(lbsParagraph);
      result.appendChild(gramParagraph);

      break;
     // TODO 4: add a way to converts the weights into grams   
    case "gram":
      kiloVal = convertGramsToKilo(value);
      lbsVal = convertKiloToLbs(kiloVal);
      stoneVal = convertKiloToStone(kiloVal);
      kiloParagraph = createResultParapgraph(unit, "Kilo", value, kiloVal);
      lbsParagraph = createResultParapgraph(unit, "LBS", value, lbsVal);
      stoneParagraph = createResultParapgraph(unit, "Stone", value, stoneVal);

      //add the results to the result element
      result.appendChild(kiloParagraph);
      result.appendChild(lbsParagraph);
      result.appendChild(stoneParagraph);

      break;
    
      



  }
}


/**
 * Creates a paragraph element with the result of the conversion. 
 * The paragraph element is returned and can be added to the DOM. It contains the initial values/unit and the converted values/unit
 * @param {String} initialUnit - the unit of the initial value
 * @param {String} convertedUnit - the unit of the converted value
 * @param {Number} initialValue - the initial value
 * @param {Number} convertedValue - the converted value
 * @returns {HTMLElement} - the paragraph element containing the result of the conversion
 */
function createResultParapgraph(initialUnit, convertedUnit, initialValue, convertedValue) {
  let p = document.createElement("p");
  p.innerHTML = initialValue + " " + initialUnit + " = " + convertedValue + " " + convertedUnit;
  return p;
}


