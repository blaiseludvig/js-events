let fogomb = document.querySelector("#fogomb");
let bekezdes = document.querySelector("#bekezdes");
let egyik = document.querySelector("#egyik");
let masik = document.querySelector("#masik");
let eredmeny = document.querySelector("#eredmeny");

function katt() {
  console.log("Katt!");
}

function duplakatt() {
  console.log("Dupla!")
}

function folotte() {
  console.log("Fölötte!");
}

function update_eredmeny() {
  eredmeny.value = parseInt(egyik.value) + parseInt(masik.value);
}

function szamologep_init(){
  egyik.addEventListener("change", update_eredmeny)
  masik.addEventListener("change", update_eredmeny)
}


function init() {
  szamologep_init();
  fogomb.addEventListener("click", katt);
  fogomb.addEventListener("dblclick", duplakatt);
  bekezdes.addEventListener("pointerover", folotte);
  console.log("init!");
}

document.addEventListener("DOMContentLoaded", init);

console.log("js fájl vége!")