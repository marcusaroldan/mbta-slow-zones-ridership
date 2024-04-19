const daily = d3.csv("data/daily_counts.csv");

// Once the data is loaded, proceed with plotting
daily.then(function(data) {
    // Convert string values to numbers
    data.forEach(function(d) {
        d.index = new Date(d.index);;
        d.active = +d.active;
        d.net_closed = +d.net_closed
    });

    // Set up SVG dimensions
    var margin = {top: 60, right: 200, bottom: 60, left: 70},
        width = 1500 - margin.left - margin.right,
        height = 700 - margin.top - margin.bottom;

    // Create SVG container
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Define color scales
    var colorScale = d3.scaleOrdinal()
        .domain(["active", "net_closed"])
        .range(["#FFC20A", "#0C7BDC"]);

    // Define x and y scales
    var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.index; }))
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain([0, 700]) // Adjust the domain for stacked area
        .range([height, 0]);

    // Define area generators for both variables
    var areaCount = d3.area()
        .x(function(d) { return x(d.index); })
        .y0(height)
        .y1(function(d) { return y(d.active); });

    var areaCleared = d3.area()
        .x(function(d) { return x(d.index); })
        .y0(function(d) { return y(d.active); }) // Stack on top of 'count'
        .y1(function(d) { return y(d.active + d.net_closed); });

    // Append areas for 'count' and 'cleared'
    svg.append("path")
        .datum(data)
        .attr("class", "area")
        .style("fill", colorScale("active"))
        .attr("d", areaCount);

    svg.append("path")
        .datum(data)
        .attr("class", "area")
        .style("fill", colorScale("net_closed"))
        .attr("d", areaCleared);


    // Style and customize as needed

    // Add legend title
    svg.append("text")
        .attr("x", width + 10)
        .attr("y", -5)
        .attr("text-anchor", "start")
        .style("font", "20px sans-serif")
        .text("Restriction Type");

    // Add legend
    var legend = svg.selectAll(".legend")
    .data(["Active", "Closed"]) // Updated legend labels
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(" + (width + 10) + "," + (i * 30 + 10) + ")"; });

    legend.append("rect")
        .attr("x", 0)
        .attr("width", 25)
        .attr("height", 25)
        .style("fill", colorScale);

    legend.append("text")
        .attr("x", 30)
        .attr("y", 12)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .style("font", "15px sans-serif") // Set font size and family
        .text(function(d) { return d; }); // Display legend label based on data

    svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + 50) + ")") // Position the label at the bottom center
        .style("text-anchor", "middle")
        .style("font", "18px sans-serif")
        .text("Month", );

    svg.append("text")
        .attr("transform", "translate(" + 0 + " ," + (-25) + ")")
        .style("text-anchor", "left")
        .style("font", "30px sans-serif")
        .text("Active and Closed Restrictions Throughout 2023", );

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 10 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font", "18px sans-serif")
        .text("Total Speed Restrictions Count");

    

    // Add gridlines for y-axis
    svg.append("g")
        .attr("class", "grid")
        .call(d3.axisLeft(y)
            .tickSize(-width)
            .tickValues(d3.range(0, 750, 100)) // Set tick values to intervals of 100 up to maxYAdjusted
            .tickFormat(""))
        .selectAll("line")
        .style("stroke", "#ccc"); 

        // Add x axis
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
        .tickFormat(d3.timeFormat("%B"))).style("font", "13px sans-serif"); // Customize tick labels to display month names

    // Add y axis
    svg.append("g")
        .call(d3.axisLeft(y)).style("font", "13px sans-serif");

 
});