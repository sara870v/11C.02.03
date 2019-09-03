"use strict";

let allStudents = [];

let housebtn = document.querySelector(".housebtn");
let housecontent = document.querySelector(".housedropdown");

housebtn.addEventListener("click", dropHouse);

function dropHouse() {
  // display the content of different houses
  housecontent.classList.toggle("show");
}
let house = "All";

document.addEventListener("DOMContentLoaded", start);

function start() {
  // Fetch Json data and let it await, and create div with list
  let dest = document.querySelector("#list");
  async function getJson() {
    let jsonData = await fetch("http://petlatkea.dk/2019/students1991.json");
    allStudents = await jsonData.json();
    showStudent();
  }

  function showStudent() {
    // Make sure it starts empty, and afterwards shows students with "all" houses,
    //and each students fullname and house
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
    // show what house is specific to the content you filter
    house = this.textContent;

    showStudent();
  }

  getJson();
}
