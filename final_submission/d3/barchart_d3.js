//Define data
const trains = d3.csv("data/pct_diff.csv");

trains.then(function(data) {
  // Convert string values to numbers

  
  data.forEach(function(d) {
      d.pct_diff = +d.pct_diff * -1;
  });
  data.sort((a, b) => b.pct_diff - a.pct_diff);

  // Set up dimensions for the chart
var margin = {top: 60, right: 30, bottom: 50, left: 150},
width = 800 - margin.left - margin.right,
height = 900 - margin.top - margin.bottom;

// Append SVG to the body
var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Sort data based on pct_diff
data.sort(function(a, b) { return a.pct_diff - b.pct_diff; });

// Define scales
var x = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) { return d.pct_diff; })])
  .range([0, width]);

var y = d3.scaleBand()
  .domain(data.map(function(d) { return d.station_name; }))
  .range([0, height])
  .padding(0.1);

  var color = d3.scaleOrdinal()
      .domain(["Blue Line", "Green Line", "Orange Line", "Red Line"])
      .range(["#003DA5", "#00843D", "#ED8B00", "#DA291C"]);


// Add bars
svg.selectAll(".bar")
.data(data)
.enter().append("rect")
  .attr("class", "bar")
  .attr("x", function(d) { return Math.min(x(0), x(d.pct_diff)); })
  .attr("y", function(d) { return y(d.station_name); })
  .attr("width", function(d) { return Math.abs(x(d.pct_diff) - x(0)); })
  .attr("height", y.bandwidth())
  .style("fill", function(d) { return color(d.route_or_line); });

  

// Add x-axis
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add y-axis
svg.append("g")
  .attr("class", "y axis")
  .call(d3.axisLeft(y));

// Add labels
svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "middle")
  .style('font-family', 'sans-serif')
  .attr("x", width/2)
  .attr("y", height + 40)
  .style("font", "15px sans-serif") 
  .text("Percentage Decrease");

svg.append("text")
      .attr("transform", "translate(" + -140 + " ," + -20 + ")")
      .style("text-anchor", "left")
      .style("font", "18px sans-serif")
      .text("Percentage Decrease in Average Ridership from Pre-COVID to 2023 Colored by Line", );


// Add legend title
svg.append("text")
.attr("x", width - 100)
.attr("y", +32)
.attr("text-anchor", "start")
.style("font", "13px sans-serif")
.text("MBTA Line");

// Add legend
var legend = svg.selectAll(".legend")
.data(["Blue", "Green", "Orange", "Red"]) // Updated legend labels
.enter().append("g")
.attr("class", "legend")
.attr("transform", function(d, i) { return "translate(" + (width - 100) + "," + (i * 20 + 40) + ")"; });


legend.append("rect")
.attr("x", 0)
.attr("width", 18)
.attr("height", 18)
.style("fill", color);

legend.append("text")
.attr("x", 22)
.attr("y", 9)
.attr("dy", ".35em")
.style("text-anchor", "start")
.style("font", "12px sans-serif") // Set font size and family
.text(function(d) { return d; }); // Display legend label based on data


});








