"use strict";

const totalTasks = 20;
const completedTasks = 11;
const dailyLimit = 6;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
} else if (totalTasks < 0 || totalTasks > 1000) {
} else if (completedTasks < 0 || completedTasks > totalTasks) {
} else if (typeof dailyLimit !== "number") {
} else if (!Number.isInteger(dailyLimit)) {
} else if (dailyLimit < 1 || dailyLimit > 1000) {
} else if (completedTasks === totalTasks) {
  console.log("Все задачи уже выполнены.");
  console.log("Потребуется дней: 0");
} else {
  let remaining = totalTasks - completedTasks;
  let day = 0;

  console.log("Осталось задач:", remaining);

  while (remaining > 0) {
    day += 1;
    const today = Math.min(dailyLimit, remaining);
    remaining -= today;
    console.log(`День ${day}: выполнено ${today}, осталось ${remaining}`);
  }

  console.log("Потребуется дней:", day);
}