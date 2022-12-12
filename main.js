const moviesList = document.getElementById("movie-list");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#movie-form").addEventListener("submit", handleQuery);
});
function handleQuery(event) {
  event.preventDefault();
  const movieInput = document.getElementById(search);
  const query = movieInput.value;

  fetch(`http://localhost:3000/films/search/title?q=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((film) => renderFilm(film));
    });
}
function renderFilm(film){
    const cardDiv = document.createElement(div);
    div.classList.add('card');
    div.style.width ="18rem;";
    moviesList.appendChild(cardDiv);

    const poster = document.createElement(img);
    poster.src = film.poster;
    cardDiv.appendChild(poster);

    const cardBody = document.createElement(div);
    cardBody.classList.add('card-body');
    cardDiv.appendChild(cardBody);

    const h5 =document.createElement(h5);
    h5.classList.add('card-title');
    h5.innerText = film.title;
    cardBody.appendChild(h5);

    const p = document.createElement(p);
    p.classList.add('card-text');
    p.innerText = film.description;
    cardBody.appendChild(p);

    const ul = document.createElement(ul);
    ul.classList.add('list-group list-group-flush');
    cardDiv.appendChild(ul);

    const runTime = document.createElement(li);
    runTime.classList.add('list-group-item');
    runTime.innerText = film.runtime;
    ul.appendChild(runTime);

    const capacity = document.createElement(li);
    capacity.classList.add('list-group-item');
    capacity.innerText = film.capacity;
    ul.appendChild(capacity);

    const showTime = document.createElement(li);
    showTime.classList.add('list-group-item');
    showTime.innerText = `show time: ${film.showtime}`;
    ul.appendChild(showTime);

    const ticketsSold = document.createElement(li);
    ticketsSold.classList.add('list-group-item');
    ticketsSold.innerText = `tickets sold:${film.tickets_sold}`;
    ul.appendChild(ticketsSold);




}