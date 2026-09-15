"use strict";

const totalTasks = 12;
const completedTasks = 5;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: количество задач должно быть числом.");
}
else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: количество задач должно быть целым числом.");
}
else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение.");
}
else if (totalTasks < 0 || totalTasks > 1000) {
  console.log("Ошибка: totalTasks вне диапазона 0…1000.");
}
else if (completedTasks < 0 || completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше, чем существует, или отрицательное значение.");
}
else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
}
else {
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