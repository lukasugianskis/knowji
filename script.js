const questions = [
  {q: "2 + 2 = ?", a: "4"},
  {q: "3 × 5 = ?", a: "15"},
  {q: "10 ÷ 2 = ?", a: "5"},
  {q: "7 - 3 = ?", a: "4"},
  {q: "6 + 9 = ?", a: "15"},
  {q: "8 × 2 = ?", a: "16"},
  {q: "12 ÷ 3 = ?", a: "4"},
  {q: "5 + 7 = ?", a: "12"},
  {q: "9 - 4 = ?", a: "5"},
  {q: "3 × 3 = ?", a: "9"},
];

const container = document.getElementById("question-container");

questions.forEach((item, index) => {
  const qDiv = document.createElement("div");
  qDiv.innerHTML = `
    <p>${index+1}. ${item.q}</p>
    <input type="text" id="answer-${index}" />
    <button onclick="checkAnswer(${index})">Submit</button>
    <p id="feedback-${index}"></p>
  `;
  container.appendChild(qDiv);
});

function checkAnswer(i){
  const input = document.getElementById(`answer-${i}`);
  const feedback = document.getElementById(`feedback-${i}`);
  if(input.value === questions[i].a){
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Try again!";
    feedback.style.color = "red";
  }
}
