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

      }

      // c. For the button with the ID “submitButton”, adds an event handler for the click event that runs the validateSummary() function when the button is clicked.


});











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