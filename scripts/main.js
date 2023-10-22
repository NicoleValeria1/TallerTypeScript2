import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var seriesCbody = document.getElementById('cards');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"bg-light\">".concat(c.id, "</td>\n                           <td class=\"bg-light\"><a href=# class=\"link-underline link-underline-opacity-0\" id=\"serie").concat(c.id, "\">").concat(c.name, "</p></td>\n                           <td class=\"bg-light\">").concat(c.channel, "</td>\n                           <td class=\"bg-light\">").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var serieName = document.getElementById("serie" + c.id);
        addFuncionalityToSerieName(c, serieName);
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
function addFuncionalityToSerieName(serie, serieName) {
    serieName.onclick = function () { return renderCardSeries(serie); };
}
function renderCardSeries(serie) {
    clearCard();
    var divElement = document.createElement("div");
    divElement.setAttribute('class', 'card');
    divElement.innerHTML = "<img scr=\"./images/".concat(serie.image, "\" alt=\"...\">\n                        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                        <p class=\"card-text\">").concat(serie.description, "</p>\n                        <a href=\"#\" class=\"card-link\">").concat(serie.link, "</a>");
    seriesCbody.appendChild(divElement);
}
function clearCard() {
    while (seriesCbody.hasChildNodes()) {
        if (seriesCbody.firstChild != null) {
            seriesCbody.removeChild(seriesCbody.firstChild);
        }
    }
}
renderSeriesInTable(dataSeries);
renderAverageSeasons();
