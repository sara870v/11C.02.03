"use strict";

let allStudents = [];

let housebtn = document.querySelector(".housebtn");
let housecontent = document.querySelector(".housedropdown");

housebtn.addEventListener("click", dropHouse);

function dropHouse() {
  housecontent.classList.toggle("show");
}
let house = "All";

document.addEventListener("DOMContentLoaded", start);

function start() {
  let dest = document.querySelector("#list");
  async function getJson() {
    let jsonData = await fetch("http://petlatkea.dk/2019/students1991.json");
    allStudents = await jsonData.json();
    showStudent();
  }

  function showStudent() {
    dest.innerHTML = "";
    allStudents.forEach(student => {
      if (house == "All" || house == student.house) {
        dest.innerHTML += `
              <div class="student">
                  <h2>${student.fullname}</h2>
                  <h3>${student.house}</h3
              </div>`;
      }
    });
  }

  document.querySelectorAll(".filter").forEach(elm => {
    elm.addEventListener("click", showHouse);
  });

  function showHouse() {
    house = this.textContent;

    showStudent();
  }

  getJson();
}
