import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js"

const seriesTbody: HTMLElement = document.getElementById('series')!;
const seriesCbody: HTMLElement = document.getElementById('cards')!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class="bg-light">${c.id}</td>
                           <td class="bg-light"><a href=# class="link-underline link-underline-opacity-0" id="serie${c.id}">${c.name}</p></td>
                           <td class="bg-light">${c.channel}</td>
                           <td class="bg-light">${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    let serieName: HTMLElement = document.getElementById("serie" + c.id)!;
    addFuncionalityToSerieName(c, serieName);
  });
}


function getAverageSeasons(series: Serie[]): number {
  let averageSeasons: number = 0;
  let totalSeasons: number = 0;
  let counter: number = 0;
  series.forEach(serie => {
    totalSeasons = totalSeasons + serie.seasons;
    counter = counter + 1;
  });
  averageSeasons = totalSeasons / counter;
  return averageSeasons;
}

function renderAverageSeasons(): void {
  let average : number = getAverageSeasons(dataSeries);
  let trElement = document.createElement("tr");
    trElement.innerHTML = `Seasons average: ${average}`;
    seriesTbody.appendChild(trElement);
}

function addFuncionalityToSerieName(serie: Serie, serieName: HTMLElement): void {
  serieName.onclick = () => renderCardSeries(serie);
}

function renderCardSeries(serie: Serie): void {
  clearCard();
  let divElement = document.createElement("div");
  divElement.setAttribute('class', 'card');
  divElement.innerHTML =`<img scr="./images/${serie.image}" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${serie.name}</h5>
                          <p class="card-text">${serie.description}</p>
                          <a href="#" class="card-link">${serie.link}</a>
                          </div>`;
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