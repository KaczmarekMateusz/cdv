/*
uzytkownik wprowadza w polach tekstowych 3 ulubione kolory
dodaj kolory do tablicy (nie moga się powtarzac)
utworz funkcje dodajaca kolory do tablicy i wyswietlajaca tablice
wyswietl dane w formacie:
Kolor 1: ...
kolor 2: ...
...
*/

let elColor1=document.getElementById('kolor1');
let elColor2=document.getElementById('kolor2');
let elColor3=document.getElementById('kolor3');
let elButton=document.getElementById('button');

let color1,color2,color3;
let tab = new Array();

function addColors()
{
  tab=[];
  color1=elColor1.value;
  color2=elColor2.value;
  color3=elColor3.value;

  tab.push(color1);
  if(tab.indexOf(color2) == -1)
  {
    tab.push(color2)
  }

  if(tab.indexOf(color3) == -1)
  {
    tab.push(color3)
  }
console.log(tab);
}

elButton.addEventListener('click',addColors);
