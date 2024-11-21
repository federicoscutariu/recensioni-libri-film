document.addEventListener("DOMContentLoaded", function () {
  const libri = [
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
      contenuto: "bel libro",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
  ];

  const sliderTrack = document.getElementById("sliderTrack");

  const creaLibroHTML = (libro) => {
    const index = libri.indexOf(libro);
    const recensione = recensioni[0];
    return `
      <div class="slide">
        <div class="book">
          <div class="cover">
            <img src="${libro.copertina}" alt="${libro.titolo}" width="150" />
          </div>
          <div class="info">
            <span class="book-title">${libro.titolo}</span>
            <div class="book-other-info">
              <span class="book-author-label">Autore:</span>
              <span class="book-author">${libro.autore}</span>
              <span class="book-published-label">Data di pubblicazione:</span>
              <span class="book-published">${libro.pubblicazione}</span>
              <span class="book-link-label">Acquista ora:</span>
              <a href="${libro.link}" target="_blank" class="book-link">Amazon</a>
            </div>
          </div>
        </div>
        <div class="review">
            <div class="author"><img src="${recensione.autore}" width="50" height="50" class="author-img"></img></div>
            <div class="review-info">
                <div class="review-top">
                    <div class="book-rating"></div>
                    <span class="review-title">${recensione.titolo}</span>
                </div>
                <span class="review-content">${recensione.contenuto}</span>
            </div>
        </div>
      </div>
    `;
  };

  libri.forEach((libro) => {
    const index = libri.indexOf(libro);
    const recensione = recensioni[0];
    sliderTrack.innerHTML += creaLibroHTML(libro);

    const ratings = Array.from(document.querySelectorAll(".book-rating"));

    for (let i = 0; i < recensione.stelle; i++) {
      const star = document.createElement("img");
      star.classList.add("star");
      star.src =
        "https://i.postimg.cc/L88MYQT7/png-clipart-star-star-removebg-preview.png";
      ratings[index].append(star);
    }
  });
});
