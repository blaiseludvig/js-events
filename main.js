let fogomb = document.querySelector("#fogomb");
let bekezdes = document.querySelector("#bekezdes");
let egyik = document.querySelector("#egyik");
let masik = document.querySelector("#masik");
let eredmeny = document.querySelector("#eredmeny");
let kivonas = document.querySelector("#kivonas");
let szinezo_cim = document.querySelector("#szinezo-cim");
let hatterszin = document.querySelector("#hatterszin");
let szinezo = document.querySelector("#szinezo");


function katt() {
  console.log("Katt!");
  fogomb.classList.toggle("fontos");

  if (fogomb.classList.contains("fontos")) {
    fogomb.textContent = "Ez egy fontos gomb";
  } else {
    fogomb.textContent = "Ez egy sima gomb";

  }

}

function duplakatt() {
  console.log("Dupla!")
}

function folotte() {
  console.log("Fölötte!");
}

function update_szamologep() {
  egyik_szam = parseInt(egyik.value);
  masik_szam = parseInt(masik.value);

  eredmeny.value = egyik_szam + masik_szam;
  kivonas.textContent = egyik_szam - masik_szam;
}

function szamologep_init() {
  egyik.addEventListener("input", update_szamologep)
  masik.addEventListener("input", update_szamologep)
  update_szamologep();
}

function szinezo_init() {
  hatterszin.addEventListener("change", update_szinezo);
  szinezo.style.backgroundColor = hatterszin.value;
  szinezo_cim.style.color = "white";
  szinezo_cim.style["mix-blend-mode"] = "difference";
}

function update_szinezo() {
  szinezo.style.backgroundColor = this.value;
}


function init() {
  fogomb.addEventListener("click", katt);
  fogomb.addEventListener("dblclick", duplakatt);
  bekezdes.addEventListener("pointerover", folotte);
  szamologep_init();
  szinezo_init();
  console.log("init!");
}

document.addEventListener("DOMContentLoaded", init);

console.log("js fájl vége!");