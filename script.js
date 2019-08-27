let allStudents = [];
document.addEventListener("DOMContentLoaded", start);

function start() {
  let dest = document.querySelector("#list");
  async function getJson() {
    let jsonData = await fetch("http://petlatkea.dk/2019/students1991.json");
    allStudents = await jsonData.json();
    showStudent();
  }

  function showStudent() {
    allStudents.forEach(student => {
      dest.innerHTML += `
              <div class="student">
                  <h2>${student.fullname}</h2>
                  <h3>${student.house}</h3
              </div>
`;
    });
  }
  getJson();
}
