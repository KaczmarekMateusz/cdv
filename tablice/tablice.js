//tworzenie tablicy za pomoca literału

let colors = ['red','green','blue'];
console.log(colors[1]);

//tworzenie tablicty za pomoca konstruktora Array

let cars = new Array('Porshe','Ferrari','Fiat');
console.log(cars);

cars.push('Polonez');
console.log(cars);

let lastCar= cars[cars.length-1];
console.log(lastCar);

// tablice wymiarowe
let tab = new Array(
  new Array('Janusz','Kowalski','Poznan'),
  new Array('Anna','Potok','Poznan'),
  new Array('Janusz','Tracz','Gniezno')
);

console.log(tab[1]);

let name  = ['Julia','Tomasz','Anna'];
console.log(name);
let sortName = name.sort();
console.log(sortName);

let rsortName = name.reverse();
console.log(rsortName);

console.log(name.indexOf('Anna'));

name.pop();
console.log(name);

name.unshift('Janusz');
console.log(name);

//tablica z liczbami

let numbers = [1,3,30,150,-10,1400];
console.log(numbers);

let numberSort = numbers.sort();
console.log(numberSort);

numbers.sort(function(a,b)
{return (a-b);})

console.log(numbers);
