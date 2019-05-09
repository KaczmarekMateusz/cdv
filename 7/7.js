//funckja zwracajaca dwie wartosci

function poleObjetosc(szerokosc,dlugosc,wysokosc)
{
  let pole = szerokosc * dlugosc;
  let objetosc = pole * wysokosc;
  let wynik = [pole, objetosc];
  return wynik;
}

let pole = poleObjetosc(2,3,4)[0];
let objetosc = poleObjetosc(2,3,4)[1];

console.log('pole = ' + pole);
console.log('objetosc = ' + objetosc);
