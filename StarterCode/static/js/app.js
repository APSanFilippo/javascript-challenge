
// Starter Code
var tableData = data;

// YOUR CODE HERE!


console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
     
    // Append one table row 
    var row = tbody.append("tr");

    // Log each UFO entry
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

      // Append a cell to the row
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Set the select button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input element get the raw HTML nodes
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Use the side bar to get input date to filter data
    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);


    filterData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each object
    var row = tbody.append("tr");
    // Log each UFO  value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
      //in the UFO data
        var cell = row.append("td");
        cell.text(value);
    });
});
});

