// catching our elements :)

const tasklist = document.querySelector(".task-list");

const first = document.querySelector(".first");
const Previous = document.querySelector(".Previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");

let arraylist = [];
let page = 0;
for (let i = 1; i <= 100; i++) {
  let li = document.createElement("li");
  li.textContent = `List item number ${i}`;
  arraylist.push(li);
}

for (let i = 0; i <= page + 10; i++) {
  tasklist.appendChild(arraylist[i]);
}

// console.log(arraylist);
