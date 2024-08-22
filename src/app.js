/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pajaro"];
  let action = [" comió", " pisó", " aplastó", " rompió"];
  let what = [" mi trabajo", " mi telefono", " el coche"];
  let when = [
    " antes de la clase",
    " cuando dormía",
    " mientras hacía ejercicio",
    " durante el desayuno",
    " mientras rezaba"
  ];

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[random1] + action[random2] + what[random3] + when[random4];
};
