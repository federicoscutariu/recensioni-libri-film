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
      titolo: "Emozionante e Coinvolgente",
      contenuto: "Un film emozionante dall'inizio alla fine.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Trama Avvincente",
      contenuto: "Trama avvincente e ottima recitazione.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Divertente e Ben Fatto",
      contenuto: "Molto divertente e ben realizzato.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Finale Prevedibile",
      contenuto: "Storia interessante ma finale prevedibile.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Effetti Straordinari",
      contenuto: "Effetti speciali straordinari!",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Storia Lenta",
      contenuto: "Ottimo cast, ma la storia è un po' lenta.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Fa Riflettere",
      contenuto: "Un film che fa riflettere molto.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Dialoghi Fantastici",
      contenuto: "Dialoghi fantastici e ben scritti.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Aspettative Deluse",
      contenuto: "Poteva essere migliore, mi aspettavo di più.",
      stelle: 2,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Azione Mozzafiato",
      contenuto: "Scene d'azione mozzafiato!",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Un Po' Troppo Lungo",
      contenuto: "Il film è bello ma un po' troppo lungo.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Un Capolavoro",
      contenuto: "Un capolavoro che consiglio a tutti.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Ottima Colonna Sonora",
      contenuto: "Attori bravissimi, colonna sonora stupenda.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Non Mi Ha Colpito",
      contenuto: "Non mi ha colpito come pensavo.",
      stelle: 2,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Azione e Umorismo",
      contenuto: "Un mix perfetto di azione e umorismo.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Personaggi Piatti",
      contenuto: "Bella la trama, ma alcuni personaggi sono piatti.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Da Rivedere",
      contenuto: "Un film che rivedrei volentieri.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Finale Affrettato",
      contenuto: "Peccato per il finale, troppo affrettato.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Adattamento Eccellente",
      contenuto: "Eccellente adattamento del libro.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Tensione Costante",
      contenuto: "Un film che tiene incollati alla sedia.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Trama Confusa",
      contenuto: "Buoni effetti, ma trama un po' confusa.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Thriller Coinvolgente",
      contenuto: "Un thriller coinvolgente e pieno di colpi di scena.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Recitazione Eccellente",
      contenuto: "La recitazione è stata la parte migliore del film.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Buchi di Trama",
      contenuto: "Non lo consiglierei, troppi buchi nella trama.",
      stelle: 2,
      autore: "https://placehold.co/1000x1000",
    },
  ];

  const sliderTrack = document.getElementById("sliderTrack2");

  const creaFilmHTML = (film) => {
    const index = films.indexOf(film);
    const recensione = recensioni[index];
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
    const recensione = recensioni[index];
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
