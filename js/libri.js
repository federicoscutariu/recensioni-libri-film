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
      titolo: "Avvincente e Inaspettato",
      contenuto: "Un libro che ti cattura fin dalle prime pagine.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Ben Scritto",
      contenuto: "Stile narrativo coinvolgente e ben costruito.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Divertente e Leggero",
      contenuto: "Una lettura piacevole e spensierata.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Finale Deludente",
      contenuto: "Il libro parte bene, ma il finale lascia a desiderare.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Intrigante Mistero",
      contenuto: "Un mistero che ti tiene con il fiato sospeso fino alla fine.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Troppo Lungo",
      contenuto: "Bella storia, ma poteva essere più breve.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Un Classico da Leggere",
      contenuto: "Un classico che non può mancare nella libreria.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Storia Originale",
      contenuto: "Una trama originale e ben sviluppata.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Aspettative Tradite",
      contenuto: "Mi aspettavo di più dopo le recensioni positive.",
      stelle: 2,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Colpi di Scena",
      contenuto: "Pieno di colpi di scena imprevedibili.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Lento a Ingrana",
      contenuto: "Parte lentamente, ma migliora verso la fine.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Un Capolavoro Letterario",
      contenuto: "Una storia che rimane nel cuore a lungo.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Personaggi Memorabili",
      contenuto: "I personaggi sono realistici e ben caratterizzati.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Non Coinvolgente",
      contenuto: "Non sono riuscito a entrare nella storia.",
      stelle: 2,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Emozioni a Fiumi",
      contenuto: "Un libro che emoziona e fa riflettere.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Buona Trama, Personaggi Piatti",
      contenuto:
        "La trama è interessante, ma i personaggi mancano di profondità.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Da Rileggere",
      contenuto: "Un libro che merita di essere riletto più volte.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Finale Frettoloso",
      contenuto: "Tutto bello fino al finale troppo frettoloso.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Adattamento di Successo",
      contenuto: "Ottima trasposizione da un'altra opera letteraria.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Suspense Continua",
      contenuto: "Tensione costante dalla prima all'ultima pagina.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Confuso e Complesso",
      contenuto: "Troppo complesso da seguire, trama confusa.",
      stelle: 3,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Thriller Coinvolgente",
      contenuto: "Un thriller che tiene incollati alle pagine.",
      stelle: 5,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Ben Scritti i Dialoghi",
      contenuto: "Dialoghi realistici e coinvolgenti.",
      stelle: 4,
      autore: "https://placehold.co/1000x1000",
    },
    {
      titolo: "Troppi Stereotipi",
      contenuto: "Trama interessante, ma troppi stereotipi sui personaggi.",
      stelle: 2,
      autore: "https://placehold.co/1000x1000",
    },
  ];

  const sliderTrack = document.getElementById("sliderTrack");

  const creaLibroHTML = (libro) => {
    const index = libri.indexOf(libro);
    const recensione = recensioni[index];
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
    const recensione = recensioni[index];
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
