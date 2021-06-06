let otazky = [
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'salvej.jpg',
    odpovedi: ['Levandule lékařská', 'Šalvěj lékařská', 'Hluchavka skvrnitá'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'bez.jpg',
    odpovedi: ['Bez černý', 'Ostružiník křovitý', 'Bolševník obecný'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'bazalka.jpg',
    odpovedi: ['Levandule lékařská', 'Konopí indické', 'Bazalka pravá'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'briza.jpg',
    odpovedi: ['Lípa srdčitá', 'Olše lepkavá', 'Bříza bělokorá'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'mata.jpg',
    odpovedi: ['Máta peprná', 'Šalvěj lékařská', 'Mateřídouška citronová'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'petrklic.jpg',
    odpovedi: ['Pryskyřník prudký', 'Petrklíč jarní', 'Kapustka obecná'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'jitrocel.jpg',
    odpovedi: ['Ambrozie peliňkolistá', 'Osladič obecný', 'Jitrocel větší'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'hermanek.jpg',
    odpovedi: ['Heřmánek pravý', 'Vlčí bob', 'Janovec metlatý'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'cesnek.jpg',
    odpovedi: ['Hluchavka pravá', 'Vavřín ušlechtilý', 'Česnek medvědí'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'borovice.jpg',
    odpovedi: ['Jedle bělokorá', 'Borovice lesní', 'Smrk ztepilý'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'kostival.jpg',
    odpovedi: ['Kostival lékařský', 'Kamejka lékařská', 'Otočník peruánský'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'mesicek.jpg',
    odpovedi: ['Lichořeřišnice větší', 'Měsíček lékařský', 'Lvoušek oranžový'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'medunka.jpg',
    odpovedi: ['Kopřiva dvoudommá', 'Máta pravá', 'Meduňka lékařská'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'santa.jpg',
    odpovedi: ['Šanta kočičí', 'Levandule pravá', 'Zběhovec planný'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'brslicekozinoha.jpg',
    odpovedi: ['Kerblík lesní', 'Bršlice kozí noha', 'Bolehlav plamatý'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'kopriva.jpg',
    odpovedi: ['Kopřiva dvoudomá', 'Máta planá', 'Konopí indické'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'pampeliska.jpg',
    odpovedi: ['Měsíček zahradní', 'Podběl lékařský', 'Pampeliška smetánka'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'lipasrdcita.jpg',
    odpovedi: ['Lípa srdčitá', 'Bříza bělokorá', 'Vrba jíva'],
    spravna: 0,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'pelynek.jpg',
    odpovedi: ['Devětsil lékařský', 'Pelyněk pravý', 'Ambrozie peřenolistá'],
    spravna: 1,
  },
];

// nahodne zamichani otazek
otazky.sort(() => Math.random() - 0.5);

// zobraz jen prvnich nekolik otazek
otazky = otazky.slice(0, 5);

let poradi = document.querySelector('#poradi');
let problem = document.querySelector('#problem');
let obrazek = document.querySelector('#obrazek');
let odpovedi = document.querySelector('#odpovedi');

let aktualniOtazka = 0;
let mojeOdpovedi = [];

zobrazOtazku(aktualniOtazka);

function zobrazOtazku(index) {
  poradi.textContent = `Otázka ${index + 1} / ${otazky.length}`;
  problem.textContent = otazky[index].problem;
  obrazek.src = 'obrazky/' + otazky[index].obrazek;

  //odpovedi
  let obsahOdpovedi = '';
  for (i = 0; i < otazky[index].odpovedi.length; i++) {
    obsahOdpovedi += ` <li data-odpoved="${i}">${otazky[index].odpovedi[i]}</li>`;
  }
  odpovedi.innerHTML = obsahOdpovedi;

  let seznamOdpovedi = document.querySelectorAll('#odpovedi li');
  seznamOdpovedi.forEach((e) => (e.onclick = klikNaOdpoved));
}

function klikNaOdpoved() {
  mojeOdpovedi.push(this.textContent);
  console.log(mojeOdpovedi);
  aktualniOtazka++;
  if (aktualniOtazka < otazky.length) {
    zobrazOtazku(aktualniOtazka);
  } else {
    zobrazVyhodnoceni();
  }
}

function zobrazVyhodnoceni() {
  document.querySelector('.kviz').style.display = 'none';

  //stránka s vyhodnocením
  document.querySelector('.vysledek').style.display = 'block';

  let hodnoceni = document.querySelector('#hodnoceni');

  console.log(mojeOdpovedi);

  // vyhodnotit
  let mojeBody = 0;
  for (i = 0; i < otazky.length; i++) {
    if (mojeOdpovedi[i] === otazky[i].odpovedi[otazky[i].spravna]) {
      mojeBody++;
    }
  }

  let hodnoceniTemp = '';
  for (i = 0; i < otazky.length; i++) {
    hodnoceniTemp += `<h3>${i + 1}. ${otazky[i].problem}</h3>
    <p>Tvoje odpověď: ${mojeOdpovedi[i]}</p>`;
    if (mojeOdpovedi[i] === otazky[i].odpovedi[otazky[i].spravna]) {
      hodnoceniTemp += '<p>To je SPRÁVNĚ.</p>';
    } else {
      hodnoceniTemp += `<p>Správná odpověd: ${
        otazky[i].odpovedi[otazky[i].spravna]
      }</p>`;
    }
  }
  hodnoceni.innerHTML += hodnoceniTemp;

  // správné + procentuální hodnocení
  hodnoceni.innerHTML += `<h2>Správně ${mojeBody} z ${
    otazky.length
  } otázek. Úspěšnost ${Math.floor((mojeBody / otazky.length) * 100)}%.</h2>`;
}
