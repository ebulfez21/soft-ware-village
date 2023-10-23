const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");

let count1 = 20;
let count2 = 85;
let count3 = 0;

function updateCounters() {
  counter1.innerHTML = `${count1}`;
  counter2.innerHTML = `${count2} `;
  counter3.innerHTML = `${count3} `;
  counter1.style.fontSize = "32px";
  counter2.style.fontSize = "32px";
  counter3.style.fontSize = "32px";
  counter1.style.fontWeight = "700";
  counter2.style.fontWeight = "700";
  counter3.style.fontWeight = "700";
}

function startCounting() {
  const interval1 = setInterval(() => {
    count1++;
    updateCounters();

    if (count1 >= 85) {
      clearInterval(interval1);
    }
  }, 100);

  const interval2 = setInterval(() => {
    count2++;
    updateCounters();

    if (count2 >= 150) {
      clearInterval(interval2);
    }
  }, 100);

  const interval3 = setInterval(() => {
    count3++;
    updateCounters();

    if (count3 >= 600) {
      clearInterval(interval3);
    }
  }, 10);
}

startCounting();
