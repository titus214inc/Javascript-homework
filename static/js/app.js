// from data.js
var tableData = data;
console.log(data);
// YOUR CODE HERE!
var tbody = d3.selectAll("tbody");

  // // Step 2:  Use d3 to append one table row `tr` for each weather report object
  // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
  data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
  
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var selection = tbody.selectAll('td')
    .data(sightings)
    .enter()
    .append('td')
    .html(function(d) {
        return `<td>${d.date}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`
    }
    )
;
    });
  });
