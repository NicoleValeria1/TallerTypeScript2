import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var averageSeasons = 0;
    var totalSeasons = 0;
    var counter = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
        counter = counter + 1;
    });
    averageSeasons = totalSeasons / counter;
    return averageSeasons;
}
function renderAverageSeasons() {
    var average = getAverageSeasons(dataSeries);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "Seasons average: ".concat(average);
    seriesTbody.appendChild(trElement);
}
renderSeriesInTable(dataSeries);
renderAverageSeasons();
