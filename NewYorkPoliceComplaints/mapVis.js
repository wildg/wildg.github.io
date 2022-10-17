function mapVis(data) {
    var u = d3.select('.map')
        .selectAll('g')
        .data(data.features)
        .enter()
        .append('g')
        .attr('class', 'precinct');

    u.append('path')
        .attr('d', geoGenerator)
        .attr('fill', 'white')
        .attr('id', function (d) {
            this.parentNode.id = d.properties.precinct.toString();
        })
        .attr("opacity", 0.1);

    u.append('circle')
        .attr("fill", function (d) {
            var precinctNumber = d.properties.precinct;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData !== undefined) {
                return affectedColor(precinctData.mostAffected);
            }
        })
        .attr("opacity", 0.70)
        .attr("cx", function (d) {
            var view = this.parentNode.getBBox();
            return view.x + (view.width / 2);
        })
        .attr("cy", function (d) {
            var view = this.parentNode.getBBox();
            return view.y + (view.height / 2);
        })
        .attr("r", function (d) {
            var precinctNumber = this.parentNode.id;
            var precinctData = getComplaintInfo(precinctNumber);
            if (precinctData === undefined) {
                return 0;
            }

            return precinctData.complaints / 2;
        });

    hello();
}