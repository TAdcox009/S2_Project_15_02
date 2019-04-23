"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

    Author: Todd Adcox Jr
    Date:   4-19-19  
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

// 5. Return to the dl_expenses.js file in your editor. Directly below the initial comment section, add an event listener for the load event. Apply an anonymous function to the load event that does the following: 
window.addEventListener("load", function () {
      //a. Declares a variable named changingcells that matches all input elements in the travelExp table that belong to the sum class.
      var changingCells = document.querySelectorAll('input[class="sum]');
      // b. For every item in the changingCells collection, adds an onchange event handler that runs calcExp() function.
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }

       // c. For the button with the ID “submitButton”, adds an event handler for the click event that runs the validateSummary() function when the button is clicked.
      document.getElementById("submitButton").onclick = validateSummary;
});

//6. Kay wants a customized validation message if employees neglect to fill out the summary field that provides a summary of the travel expenses. Create the validateSummary() function that dis- plays the message “You must include a summary of the trip in your report.” if the validation state of the summary field value is missing; otherwise set the custom validation message to an empty text string.
function validateSummary() {
      var validate = document.getElementById("summary");
      if (validate.validity.valueMissing) {
            validate.setCustomValidity("You must include a summary of the trip in your report.")
      } else {
            validate.setCustomValidity("");
      };
}

//7. Create the calcClass() function with a single parameter sumclass. The purpose of this function is to sum the values of input elements belonging to the sumClass class of elements. Add the following commands to the function:
function calcClass(sumClass) {
//a. Create a variable named sumFields containing the object collection of all elements belonging to the sumClass class.
var sumFields = document.getElementsByClassName("sumClass");

//b. Create a variable named sumtotal that will be used to keep a running total of the total values in the input elements in the sumFields object collection. Set the initial value of sumTotal to 0. 
var sumTotal = 0;

//c. Loop through the items in the sumFields object collection. For each item, declare a variable named itemvalue equal to the numeric value of the current input element in the sumFields array. (Hint: Use the parseFloat() function to extract the numeric value.) If itemValue is a numeric value, add it to itemValue. (Hint: Use the isNaN() function to determine whether itemValue is or is not a number.)
for (var i = 0; i < sumFields.length; i++) {
      var itemValue = parseFloat(sumFields);
      if (itemValue === isNaN()) {

      } else {

      }
}

//d. After the for loop, return the value of sumTotal.
return sumTotal;
}









function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}