document.addEventListener("DOMContentLoaded", function () {
  const films = [
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
    {
      titolo: "Prova",
      autore: "Autore",
      pubblicazione: "19 novembre 2024",
      copertina: "https://placehold.co/1000x1000",
      link: "",
    },
  ];

  const recensioni = [
    {
      titolo: "recensione",
      contenuto: "bel film",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
  ];

  const sliderTrack = document.getElementById("sliderTrack2");

  const creaFilmHTML = (film) => {
    const index = films.indexOf(film);
    const recensione = recensioni[0];
    return `
      <div class="slide">
        <div class="film">
          <div class="cover">
            <img src="${film.copertina}" alt="${film.titolo}" width="150" />
          </div>
          <div class="info">
            <span class="film-title">${film.titolo}</span>
            <div class="film-other-info">
              <span class="film-author-label">Autore:</span>
              <span class="film-author">${film.autore}</span>
              <span class="film-published-label">Data di pubblicazione:</span>
              <span class="film-published">${film.pubblicazione}</span>
              <span class="film-link-label">Acquista ora:</span>
              <a href="${film.link}" target="_blank" class="film-link">Amazon</a>
            </div>
          </div>
        </div>
        <div class="review">
            <div class="author"><img src="${recensione.autore}" width="50" height="50" class="author-img"></img></div>
            <div class="review-info">
                <div class="review-top">
                    <div class="film-rating"></div>
                    <span class="review-title">${recensione.titolo}</span>
                </div>
                <span class="review-content">${recensione.contenuto}</span>
            </div>
        </div>
      </div>
    `;
  };

  films.forEach((film) => {
    const index = films.indexOf(film);
    const recensione = recensioni[0];
    sliderTrack.innerHTML += creaFilmHTML(film);

    const ratings = Array.from(document.querySelectorAll(".film-rating"));

    for (let i = 0; i < recensione.stelle; i++) {
      const star = document.createElement("img");
      star.classList.add("star");
      star.src =
        "https://i.postimg.cc/L88MYQT7/png-clipart-star-star-removebg-preview.png";
      ratings[index].append(star);
    }
  });
});
