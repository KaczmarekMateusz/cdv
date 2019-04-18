let text = 'CDV uczelnia ludzi ciekawych';

console.log(text);
let dlugosc = text.length;
console.log(`Długość: ${dlugosc}`);

let pierwszy = text.charAt(0);
console.log(`Pierwszy znak: ${pierwszy}`);

let ostatni = text.charAt(dlugosc-1);
console.log(`Ostatni znak: ${ostatni}`);

//ascii

console.log(text.charCodeAt(0));

let tekst='janUsZ';

for(let i=0; i<tekst.length;i++)
{
  let temp = tekst.charCodeAt(i);
  if(temp <=90 && temp >= 65)
  {
    console.log(`Wielka litera na ${tekst.charAt(i)} na pozycji ${i+1}`);
    break;
  }
}

let duze = tekst.toUpperCase();
console.log(duze);

let male = tekst.toLowerCase();
console.log(male);

let wycinek = tekst.substr(0,5);
console.log(wycinek);


let elPrzycisk= document.getElementById('przycisk');
let elImie= document.getElementById('imie');
let elNazwisko= document.getElementById('nazwisko');
let elKomunikat = document.getElementById('komunikat');
let imie, nazwisko;

function wyswietl()
{
  imie=elImie.value;
  nazwisko=elNazwisko.value;

  imie=imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
  if(imie.length >15)
  {
    imie=imie.substr(0,15);
  }
  nazwisko=nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();
  if(nazwisko.length >15)
  {
    nazwisko=nazwisko.substr(0,15);
  }

  let tek= `Imię ograniczone do 15 znakow: <span id="kom">${imie}</span>`;
  tek += `<br> Nazwisko ograniczone do 15 znakow: <span id="kom">${nazwisko}</span>`;
  elKomunikat.innerHTML = tek;

}

elPrzycisk.addEventListener('click',wyswietl);
