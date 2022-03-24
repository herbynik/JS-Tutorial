/**
 *
 * ### Aufgaben ###
 *
 * 1. Nutze die richtige Math Methode um drei
 * Zufallszahlen zu generieren, welche zwischen
 * 1-10 liegen. Speichere diese in Variablen mit
 * folgenden Namen: num1, num2, num 3. Gib diese
 * Variablen in der Konsole aus.
 *
 * 2. Finde mit einer geeigneten Math Methode
 * heraus, welche der drei Zahlen, die größte
 * ist, speichere diese in einer Variable Namens
 * "max" und gib diese in der Konsole aus.
 *
 * 3. Schreibe eine Funktion namens "getRandomInt",
 * welche zwei Paramenter namenes "min" und "max"
 * entgegen nimmt und  eine ganze Zufallszahl
 * zwischen zwei Zahlen zurück gibt.
 *
 */

//Aufgabe 1

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let num3 = Math.ceil(Math.random() * 10);

console.log(num1, num2, num3);

//Aufgabe 2

let max = Math.max(num1, num2, num3);

console.log(max);

//Aufgabe 3

function getRandomInt(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.ceil(Math.random() * (max - min)) + min;
}

let random = getRandomInt(333, 10000);

console.log("randonm:", random);
