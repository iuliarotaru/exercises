"use strict";
//....................
/*function greeting(firstName) {
  return `Hello ${firstName}`;
}
const txt = `Greeting is ${greeting("Iulia")}`;
console.log(txt); */

/*function getColorString(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}
console.log(getColorString()); */
//.................................
/*function getColorString(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const value = getColorString(red, green, blue);
  return value;
}

function randomBackground() {
  document.querySelector("body").style.backgroundColor = randomColor();
}
randomBackground();
console.log(randomColor());
console.log(randomBackground()); //return undefined because we didnt specifiy what it should return
*/

function hex2rgb(hexcolor) {
  const r = Number.parseInt(hexcolor.substring(1, 3), 16);
  const g = Number.parseInt(hexcolor.substring(3, 5), 16);
  const b = Number.parseInt(hexcolor.substring(5, 7), 16);
  return { r, g, b };
}
console.log(hex2rgb("#228B22"));
