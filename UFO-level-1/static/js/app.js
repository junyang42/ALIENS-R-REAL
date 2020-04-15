// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

//* Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
var tbody = d3.select("tbody");

// set default page
tableData.forEach(function(alien) {
    // console.log(alien);
    var row = tbody.append("tr");

    Object.entries(alien).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");

  // Select the input element and get the raw HTML node
  var inputField = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputField.property("value");
  console.log(inputValue);

  d3.selectAll("td").remove();
  if (inputValue.length !== 0) {

    var dataFilted = tableData.filter(d => {
        return d.datetime === inputValue;
    });

    console.log(dataFilted);

    dataFilted.forEach(function(alien) {
            // console.log(alien);
            var row = tbody.append("tr");

            Object.entries(alien).forEach(function([key, value]) {
                // console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    } else {
        tableData.forEach(function(alien) {
            // console.log(alien);
            var row = tbody.append("tr");
        
            Object.entries(alien).forEach(function([key, value]) {
                // console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    
}

button.on("click", handleClick);