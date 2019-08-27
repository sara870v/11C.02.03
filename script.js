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
                  <h1>${student.fullname}</h1>
                  <h2>${student.house}</h2>
              </div>
`;
    });
  }
  getJson();
}
