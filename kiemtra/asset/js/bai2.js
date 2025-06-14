const questions = [
  {
    title: "Câu 1: 1 + 1 = ?",
    answers: ["1", "2", "3", "4"]
  },
  {
    title: "Câu 2: 2 + 2 = ?",
    answers: ["2", "3", "4", "5"]
  },
  {
    title: "Câu 3: 3 + 3 = ?",
    answers: ["3", "4", "5", "6"]
  }
];


const container = document.getElementById("quiz-container");

questions.forEach((q, index) => {
  const qDiv = document.createElement("div");
  const qTitle = document.createElement("h3");
  qTitle.textContent = q.title;
  qDiv.appendChild(qTitle);

  q.answers.forEach((ans, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = ans;
    label.appendChild(input);
    label.append(ans);
    qDiv.appendChild(label);
    qDiv.appendChild(document.createElement("br"));
  });

  container.appendChild(qDiv);
});

document.getElementById("random-btn").addEventListener("click", () => {
  questions.forEach((q, index) => {
    const options = document.getElementsByName(`question${index}`);
    const randIndex = Math.floor(Math.random() * options.length);
    options.forEach(opt => opt.checked = false);
    options[randIndex].checked = true;
  });
});
