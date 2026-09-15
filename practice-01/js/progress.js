"use strict";

const totalTasks = 20;
const completedTasks = 11;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
} else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
} else if (totalTasks < 0 || totalTasks > 1000) {
} else if (completedTasks < 0 || completedTasks > totalTasks) {
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remaining = totalTasks - completedTasks;
  const percentage = completedTasks / totalTasks * 100;

  let status;
  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log("Всего задач:", totalTasks);
  console.log("Выполнено:", completedTasks);
  console.log("Осталось:", remaining);
  console.log("Прогресс:", percentage.toFixed(1) + "%");
  console.log("Статус:", status);
}