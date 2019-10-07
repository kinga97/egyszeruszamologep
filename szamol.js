"use strict";

function osszead() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value + +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}

function kivonas() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value - +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}

function szorzas() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value * +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}

function osztas() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value / +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}