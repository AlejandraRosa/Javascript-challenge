// from data.js
var tableData = data;
//reference table body
var tBody = d3.select("tbody");
// using activity 3.3 as starting point, create function to obtain ufo data and log it in console
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    // Append tr for each ufo sighting
    var row = tBody.append("tr");
    //print to console each entry
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // append cell for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
// using activty 3.9 as example for how to select/filter 
var button = d3.select("#filter-btn");
button.on("click", function() {
    tBody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // filter data based on date selected
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // show the filtered data in console
    console.log(filteredData);
    //same as initial function
    filteredData.forEach(function(selections) {
    console.log(selections);
    var row = tBody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});
