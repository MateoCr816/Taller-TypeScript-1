
import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let totalSeasons = 0;
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


//btnfilterByName.onclick = () => applyFilterByName();

renderseriesInTable(series);



series.forEach(serie => {
    totalSeasons += serie.seasons;
    }); 

function renderseriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.num}</td>
                            <td>${course.name}</td>
                           <td>${course.channel}</td>
                           <td>${course.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearseriesInTable();
  let seriesFiltered: Serie[] = searchCourseByName(text, series);
  renderseriesInTable(seriesFiltered);
}

function searchCourseByName(nameKey: string, series: Serie[]) {
  return nameKey === '' ? series : series.filter( c => 
    c.name.match(nameKey));
}


const averageSeasons = totalSeasons / series.length;
const averageElement = document.getElementById('averageSeasons');
if (averageElement) {
    averageElement.textContent = `Seasons average: ${averageSeasons}`;
}

function clearseriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}