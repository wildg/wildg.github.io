// Scale of map
var scale = 69000;

// Width and height of map
var width = scale * (-0.575);
var height = scale * (0.1452);

// Map projection based on scale
var projection = d3.geoAlbers()
    .translate([width / 2, height / 2])
    .scale(scale);

var dataViewing = ['']

// Generate projection
var geoGenerator = d3.geoPath()
    .projection(projection);

var mostAffectedValues = ["White", "Black", "Hispanic", "Unknown", "Asian", "Other"];
var mostAffectedColors = ['#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17'];

var mostFindingsValues = ["Substantiated", "Unsubstantiated", "Exonerated"];
var mostFindingsColors = ['#ef8a62','#f7f7f7','#67a9cf']
console.log(mostFindingsValues);

var affectedColor = d3.scaleOrdinal()
    .domain(mostAffectedValues)
    .range(mostAffectedColors);

var findingsColor = d3.scaleOrdinal()
    .domain(mostFindingsValues)
    .range(mostFindingsColors);

function getComplaintInfo(precinct) {
    return complaintByPrecinct[precinct];
}

function precinctDataToHtml(precinct) {
    var output = "<b>Precinct " + precinct + "</b><br>";

    var precinctData = getComplaintInfo(precinct);

    if (precinctData === undefined) {
        output += "Number of Complaints: 0<br>";
        output += "Most Affected Demographic: N/A<br>";
        output += "In Most Cases, Complaints Were: N/A";
        return (output);
    }

    output += "Number of Complaints: " + precinctData.complaints + "<br>";
    output += "Most Affected Demographic: " + precinctData.mostAffected + "<br>";
    output += "In Most Cases, Complaints Were: " + precinctData.mostDispositions;
    return output;
}

function hello() {

    // Define the popup info
    var popupInfo = d3.select("body")
        .append("div")
        .attr("class", "tooltip");

    d3.selectAll('g')
        .on("mouseover", function(d) {
            var precinctNumber = this.id;
            var toPrint = precinctDataToHtml(precinctNumber);

            popupInfo.html(toPrint)
                .style("opacity", .8)
                .style("left", d.clientX + "px")
                .style("top", d.clientY + "px");

            d3.selectAll('g')
                .style("opacity", 0.5);

            d3.select(this)
                .style("opacity", 1);
        })
        .on("mouseleave", function(d) {
            d3.selectAll('g')
                .style("opacity", 1);

            popupInfo.style("opacity", 0)
                .html("");
        });

    d3.select('.map')
        .append('g')
        .attr('id', 'sizes')
        .attr('transform', function() {
            var par = this.parentNode.getBBox();
            var ans = 'translate(';
            ans += par.width + 410 + ', ';
            ans += par.height - 280 + ')';
            return ans;
        })

    var sizes = d3.select('#sizes')
        .selectAll('circle')
        .data([10, 20, 30, 40, 50, 60])
        .enter();

    sizes.append('circle')
        .attr('cy', function(d, i) {
            return i * 5;
        })
        .attr('r', function(d, i) {
            return 30 - i * 5
        })
        .attr('fill', 'none')
        .attr('stroke', function(d, i) {
            if (i % 2 === 0) {
                return "white"
            }
        });

    sizes.append('text')
        .text(function(d, i) {
            if ((i % 2) === 0) {
                return d;
            }
        })
        .attr('font', '10px')
        .attr('transform', function(d, i) {
            return 'translate(-9, ' + (7 - i * 10) + ')';
        })
        .attr('fill', 'white')

    sizes.append('text')
        .text('Number Of Complaints')
        .attr('fill', 'white')
        .attr('transform', 'translate(-80, -60)');
}

function changeDemographic( dem ) {

    // Get the associated X
    var associatedX = $('#' + dem + 'X');

    var circles = d3.selectAll('.map')
        .selectAll('.precinct')
        .select('circle');

    if (associatedX.css('opacity') == 1) {
        associatedX.css('opacity', 0);
        mostAffectedValues.push(dem);

        circles.attr('r', function(d) {
            var precinctNumber = this.parentNode.id;
            var precinctData = getComplaintInfo(precinctNumber);
            var totalSize = $(this).attr('r') * 2;

            if (precinctData !== undefined) {
                return (totalSize + precinctData[dem]) / 2;
            }

            return 0;
        }).attr('fill', function(d) {
            var precinctNumber = d.properties.precinct;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData !== undefined) {
                var item = calculateNewMax(precinctData);
                return affectedColor(item);
            }
        });
    }

    else {
        associatedX.css('opacity', 1);
        var index = mostAffectedValues.indexOf(dem);
        mostAffectedValues.splice(index, 1);

        circles.attr('r', function(d) {
            var precinctNumber = this.parentNode.id;
            var precinctData = getComplaintInfo(precinctNumber);
            var totalSize = $(this).attr('r') * 2;

            if (precinctData !== undefined) {
                return (totalSize - precinctData[dem]) / 2;
            }

            return 0;
        }).attr('fill', function(d) {
            var precinctNumber = d.properties.precinct;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData !== undefined) {
                var item = calculateNewMax(precinctData);
                return affectedColor(item);
            }
        });
    }
}

function changeFindings( dem ) {

    // Get the associated X
    var associatedX = $('#' + dem + 'X');

    var circles = d3.selectAll('.map')
        .selectAll('.precinct')
        .select('circle');

    if (associatedX.css('opacity') == 1) {
        associatedX.css('opacity', 0);
        mostFindingsValues.push(dem);

        circles.attr('r', function(d) {
            var precinctNumber = this.parentNode.id;
            var precinctData = getComplaintInfo(precinctNumber);
            var totalSize = $(this).attr('r') * 2;

            if (precinctData !== undefined) {
                return (totalSize + precinctData[dem]) / 2;
            }

            return 0;
        }).attr('fill', function(d) {
            var precinctNumber = d.properties.precinct;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData !== undefined) {
                var item = findingsNewMax(precinctData);
                return findingsColor(item);
            }
        });
    }

    else {
        associatedX.css('opacity', 1);
        var index = mostFindingsValues.indexOf(dem);
        mostFindingsValues.splice(index, 1);

        circles.attr('r', function(d) {
            var precinctNumber = this.parentNode.id;
            var precinctData = getComplaintInfo(precinctNumber);
            var totalSize = $(this).attr('r') * 2;

            if (precinctData !== undefined) {
                return (totalSize - precinctData[dem]) / 2;
            }

            return 0;
        }).attr('fill', function(d) {
            var precinctNumber = d.properties.precinct;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData !== undefined) {
                var item = findingsNewMax(precinctData);
                return findingsColor(item);
            }
        });
    }
}

function findingsNewMax( data ) {
    var max = data[mostFindingsValues[0]];
    var finding = mostFindingsValues[0];

    for (var i = 1; i < mostFindingsValues.length; i++) {
        if (data[mostFindingsValues[i]] > max) {
            max = data[mostFindingsValues[i]];
            finding = mostFindingsValues[i];
        }
    }

    return finding;
}

function calculateNewMax( data ) {
    var max = data[mostAffectedValues[0]];
    var race = mostAffectedValues[0];

    for (var i = 1; i < mostAffectedValues.length; i++) {
        if (data[mostAffectedValues[i]] > max) {
            max = data[mostAffectedValues[i]];
            race = mostAffectedValues[i];
        }
    }
    return race;
}

function changeData( selection ) {
    if (!selection.classList.contains('selectedData')) {
        $('#race').toggleClass('selectedData');
        $('#finding').toggleClass('selectedData');

        if (selection.id === 'finding') {
            d3.select('#demographicFilter')
                .style('display', 'none');

            d3.select('#findingsFilter')
                .style('display', 'block');

            var circles = d3.selectAll('.map')
                .selectAll('.precinct')
                .select('circle');

            circles.attr('fill', function(d) {
                var precinctNumber = d.properties.precinct;
                var precinctData = getComplaintInfo(precinctNumber);
                if (precinctData !== undefined) {
                    var item = findingsNewMax(precinctData);
                    return findingsColor(item);
                }
            }).attr('r', function(d) {
                var precinctNumber = d.properties.precinct;
                var precinctData = getComplaintInfo(precinctNumber);
                var sum = 0;
                if (precinctData !== undefined) {
                    for (var i = 0; i < mostFindingsValues.length; i++) {
                        sum += precinctData[mostFindingsValues[i]];
                    }
                }
                return (sum / 2);
            });
        }
        else {
            d3.select('#demographicFilter')
                .style('display', 'block');

            d3.select('#findingsFilter')
                .style('display', 'none');

            var circles = d3.selectAll('.map')
                .selectAll('.precinct')
                .select('circle');

            circles.attr('fill', function(d) {
                var precinctNumber = d.properties.precinct;
                var precinctData = getComplaintInfo(precinctNumber);
                if (precinctData !== undefined) {
                    var item = calculateNewMax(precinctData);
                    return affectedColor(item);
                }
            }).attr('r', function(d) {
                var precinctNumber = d.properties.precinct;
                var precinctData = getComplaintInfo(precinctNumber);
                var sum = 0;
                if (precinctData !== undefined) {
                    for (var i = 0; i < mostAffectedValues.length; i++) {
                        sum += precinctData[mostAffectedValues[i]];
                    }
                }
                return (sum / 2);
            });
        }
    }
}