const otazky = [
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'salvej.jpg',
    odpovedi: ['Levandule', 'Šalvěj lékařská', 'Hluchavka'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'bez.jpg',
    odpovedi: ['Bez černý', 'Ostružiník', 'Bolševník obecný'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'bazalka.jpg',
    odpovedi: ['Levandule', 'Konopí', 'Bazalka pravá'],
    spravna: 3,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'briza.jpg',
    odpovedi: ['Lípa', 'Olše', 'Bříza'],
    spravna: 3,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'mata.jpg',
    odpovedi: ['Máta peprná', 'Šalvěj', 'Mateřídouška'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'petrklic.jpg',
    odpovedi: ['Pryskyřník', 'Petrklíč', 'Kapustka'],
    spravna: 2,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'jitrocel.jpg',
    odpovedi: ['Ambrozie peliňkolistá', 'Osladič obecný', 'Jitrocel větší'],
    spravna: 3,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'hermanek.jpg',
    odpovedi: ['Heřmánek pravý', 'Vlčí bob', 'Janovec metlatý'],
    spravna: 1,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'cesnek.jpg',
    odpovedi: ['Hluchavka pravá', 'Vavřín ušlechtilý', 'Česnek medvědí'],
    spravna: 3,
  },
  {
    problem: 'Která bylina je na obrázku?',
    obrazek: 'borovice.jpg',
    odpovedi: ['Jedle bělokorá', 'Borovice lesní', 'Smrk ztepilý'],
    spravna: 2,
  },
];

// // vybereme všechny elementy li pomocí querySelectorAll
// let vybrano = document.querySelectorAll("#odpovedi li");
// console.log(vybrano);

// // každé položce nastavíme textContent Ahoj
// vybrano.forEach((e) => (e.textContent = "Ahoj"));

// vytvořit odkazy na HTML elementy

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

  // doplnime odpovedi do stranky
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
  // skrýt otázky
  document.querySelector('.kviz').style.display = 'none';

  // zobrazit stránku s vyhodnocením
  document.querySelector('.vysledek').style.display = 'block';

  // najdeme si div do ktereho budem vypisovat výsledky
  let hodnoceni = document.querySelector('#hodnoceni');

  // načíst na jaké odpovědi jsem klikla
  console.log(mojeOdpovedi);

  // vyhodnotit, jestli jsou odpovědi správné
  let mojeBody = 0;
  for (i = 0; i < otazky.length; i++) {
    if (mojeOdpovedi[i] === otazky[i].odpovedi[otazky[i].spravna]) {
      mojeBody++;
    }
  }

  // vypsat otázky H3 a odpovědi P a jestli jsou správné
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

  // vypsat H2, kolik je správných + procentuální hodnocení
  hodnoceni.innerHTML += `<h2>Správně ${mojeBody} ze ${
    otazky.length
  } otázek. Úspěšnost ${Math.floor((mojeBody / otazky.length) * 100)}%.</h2>`;
}
