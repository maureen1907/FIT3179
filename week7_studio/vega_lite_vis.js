var vg_1 = "simple_bar_chart.vega";
// embed vg_1 in the bar_chart div
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);