// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
var numeriLista = "";
for (var i = 1; i <= 100; i++) {

  // definire multipli di 3 e 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    numeriLista = numeriLista + "<li>" + "FizzBuzz" + "</li>";

    // definire multipli di 3
  } else if (i % 3 === 0) {
    console.log("Fizz");
    numeriLista = numeriLista + "<li>" + "Fizz" + "</li>";

    // definire multipli di 5
  } else if (i % 5 === 0) {
    console.log("Buzz");
    numeriLista = numeriLista + "<li>" + "Buzz" + "</li>";

  }else {
    console.log(i);
    numeriLista = numeriLista + "<li>" + i + "</li>";
  }

  // stampare lista di numeri
  document.getElementById('lista').innerHTML = numeriLista;
}
