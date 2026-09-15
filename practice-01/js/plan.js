"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
} else if (totalTasks < 0 || totalTasks > 1000) {
} else if (completedTasks < 0 || completedTasks > totalTasks) {
} else if (typeof dailyLimit !== "number" || !Number.isInteger(dailyLimit)) {
} else if (dailyLimit < 1 || dailyLimit > 1000) {
} else if (completedTasks === totalTasks) {
} else {
  let ostatok = totalTasks - completedTasks;
  let day = 0;

  console.log("Осталось задач:", ostatok);

  while (ostatok > 0) {
    day += 1;
    const today = Math.min(dailyLimit, ostatok);
    ostatok -= today;
    console.log(`День ${day}: выполнено ${today}, осталось ${ostatok}`);
  }

  console.log("Потребуется дней:", day);
}