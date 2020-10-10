var svgWidth = 800;
var svgHeight = 700;

var margin = {
    top: 60,
    right: 40,
    bottom: 30,
    left: 40

};

var height = svgHeight = margin.top - margin.bottom;
var width = svgWidth = margin.right - margin.left;

var svg = d3.select("#scatter")