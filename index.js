const skill = {
  value: document.getElementById("skill"),
  isHide: true,
  point1: { value: "calc(50% - 200px)", animName: "Show" },
  point2: { value: "-1200px", animName: "Hide" },
};

document.getElementById("btn-skill").addEventListener("click", (e) => {
  //   if (!taskList.isHide) return;

  let point = skill.isHide ? skill.point1 : skill.point2;

  skill.value.style.animationName = point.animName;
  skill.value.style.top = point.value;

  skill.isHide = !skill.isHide;
});

document.onselectstart = new Function ("return false")

// const taskList = {
//   value: document.getElementById("task-list"),
//   isHide: true,
//   point1: { value: "calc(50% - 200px)", animName: "Show" },
//   point2: { value: "-1200px", animName: "Hide" },
// };

document.getElementById("btn-task_list").addEventListener("click", (e) => {
  //   if (!skill.isHide) return;

  //   let point = taskList.isHide ? taskList.point1 : taskList.point2;

  //   taskList.value.style.animationName = point.animName;
  //   taskList.value.style.top = point.value;

  //   taskList.isHide = !taskList.isHide;

  window.location.href = "./assets/Practices/PracticeD/practice.html";
});

// const Tasker = {
//   value: document.getElementById("tasker"),
//   btn: document.getElementById("add"),
//   input: document.getElementById("input"),
//   temlate: document.getElementById("template"),
// };

// Tasker.temlate.remove();

// input.addEventListener("keydown", (e) => {
//   Tasker.btn.disabled = input.value.length < 5;
// });

// Tasker.btn.addEventListener("click", () => {
//   Tasker.temlate.children[0].textContent = Tasker.input.value;
//   Tasker.input.value = "";

//   Tasker.temlate.children[1].addEventListener("click", () => {

//   });

//   Tasker.value.appendChild(Tasker.temlate.cloneNode(true));
// });
