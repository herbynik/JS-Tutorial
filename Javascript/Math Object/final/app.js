/**
 * Thema: JS Math Object
 *
 * Dokumentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * Deutsch: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math
 *
 */

const number = 4.815162342;
// Gibt den AB-gerundeten Wert einer Zahl zurück
// const result = Math.floor(number);

// Gibt den AUF-gerundeten Wert einer Zahl zurück
// const result = Math.ceil(number);

// Gibt die KLEINSTE aller eingegebenen Zahlen Zurück
// const result = Math.min(4, 8, 15);

// Gibt die GRÖSSTE aller eingegebenen Zahlen zurück
// const result = Math.max(4, 8, 15);

// Gibt einer Zufallszahl (Kommazahl) zwischen 0-1 zurück
// const result = Math.random();

// Gibt einer Zufallszahl (Kommazahl) zwischen 0-10 zurück
// const result = Math.random() * 10;

// ==> Ganze Zahl zwischen 0-9
// const result = Math.floor(Math.random() * 10);

// ==> Ganze Zahl zwischen 1-10
// const result = Math.ceil(Math.random() * 10);
const result = Math.floor(Math.random() * 10) + 1;

console.log(result);
