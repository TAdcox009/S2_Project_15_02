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

// Adds an event listener for the load event and applies an anonymous function to the load event.
window.addEventListener("load", function () {
      // Matches all input elements in the travelExp table.
      var changingCells = document.querySelectorAll('table#travelExp input.sum');
      // Every item in the changingCells collection, adds an onchange event handler that runs calcExp() function.
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      // Adds an event handler for the click event that will run the validateSummary() function when the button is clicked.
      document.getElementById("submitButton").onclick = function () {
            validateSummary();
      };
});

// Displays the custom message if the validation state of the summary field value is missing.
function validateSummary() {
      var summary = document.getElementById("summary");
      if (summary.validity.valueMissing) {
            summary.setCustomValidity("You must include a summary of the trip in your report.")
      } else {
            summary.setCustomValidity("");
      }
}

// This function is to sum the values of input elements.
function calcClass(sumClass) {
      // Contains the object collection of all elements belonging to the sumClass class.
      var sumFields = document.getElementsByClassName(sumClass);
      // Sets the value of sumTotal to 0. 
      var sumTotal = 0;
      // Declares a variable named itemvalue equal to the value of the input element in the sumFields array using the parseFloat() function to get the value. If itemValue is a numeric value, it will add it to itemValue using the isNaN() function to determine whether itemValue is a number or not.
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            if (!isNaN(itemValue)) {
                  sumTotal += itemValue;
            }
      }
      // Returna the value of sumTotal.
      return sumTotal;
}

// This function is to calculate the row and column totals from the travelExp table.
function calcExp() {
      var expTable = document.querySelectorAll("table#travelExp tbody tr");
      // Loops through the rows in the expTable collection and sets the value of the input element with the ID subtotalIndex to the value returned by the calcClass() function 
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subtotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }
      // Sets the values of the transTotal, lodgeTotal, mealTotal, and otherTotal input elements using the formatNumber() to 2 decimal places.
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);
      // Sets the value of the expTotal input element to the value returned by the calcClass() function. it is being formatted using the formatUSCurrency() function.
      document.getElementById("expTotal").value = formatUSCurrency(calcClass("sum"));
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