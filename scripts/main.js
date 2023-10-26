import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var totalSeasons = 0;
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
//btnfilterByName.onclick = () => applyFilterByName();
renderseriesInTable(series);
series.forEach(function (serie) {
    totalSeasons += serie.seasons;
});
function renderseriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(course.num, "</td>\n                            <td>").concat(course.name, "</td>\n                           <td>").concat(course.channel, "</td>\n                           <td>").concat(course.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearseriesInTable();
    var seriesFiltered = searchCourseByName(text, series);
    renderseriesInTable(seriesFiltered);
}
function searchCourseByName(nameKey, series) {
    return nameKey === '' ? series : series.filter(function (c) {
        return c.name.match(nameKey);
    });
}
var averageSeasons = totalSeasons / series.length;
var averageElement = document.getElementById('averageSeasons');
if (averageElement) {
    averageElement.textContent = "Seasons average: ".concat(averageSeasons);
}
function clearseriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
