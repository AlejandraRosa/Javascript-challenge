// from data.js
var tableData = data;
//reference table body
var tableBody = d3.select("tbody");
// using activity 3.3 as starting point, create function to obtain ufo data and log it in console
tableData.forEach(function(ufo) {
    console.log(ufo);
    // Append tr for each ufo sighting
    var row = tableBody.append("tr");
    //print to console each entry
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      // append cell for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
// using activty 3.7 as example for how to select/filter 
var button = d3.select("#filter-btn");
button.on("click", function() {
    tableBody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // filter data 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // show in console
    console.log(filteredData);
    //same as initial function
    filteredData.forEach(function(selections) {
    console.log(selections);
    var row = tableBody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});
