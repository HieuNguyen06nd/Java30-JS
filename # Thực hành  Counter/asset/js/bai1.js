 const counterEl = document.getElementById("counter");
  const buttons = document.querySelectorAll(".counterBtn");

  let count = 0;

  const updateDisplay = () => {
    counterEl.textContent = count;

    if (count > 0) {
      counterEl.style.color = "green";
    } else if (count < 0) {
      counterEl.style.color = "red";
    } else {
      counterEl.style.color = "#333333";
    }
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("prevBtn")) {
        count--;
      } else if (button.classList.contains("nextBtn")) {
        count++;
      }
      updateDisplay();
    });
  });