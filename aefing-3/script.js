function sayHello() {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("nameOutput");

  if (name === "") {
    output.textContent = "Vinsamlegast sláðu inn nafnið þitt!";
  } else {
    output.textContent = "Halló, " + name + "!";
  }
}

function checkAge() {
  const age = document.getElementById("ageInput").value;
  const output = document.getElementById("ageOutput");

  if (age === "") {
    output.textContent = "Vinsamlegast sláðu inn aldurinn þinn!";
  } else if (Number(age) < 0) {
    output.textContent = "Aldur getur ekki verið neikvæður!";
  } else if (Number(age) >= 18) {
    output.textContent = "Þú ert fullorðinn!";
  } else {
    output.textContent = "Þú ert barn!";
  }
}

function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const output = document.getElementById("calcOutput");

  if (
    document.getElementById("num1").value === "" ||
    document.getElementById("num2").value === ""
  ) {
    output.textContent = "Vinsamlegast sláðu inn báðar tölurnar!";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        output.textContent = "Ekki er hægt að deila með núlli!";
        return;
      }
      result = num1 / num2;
      break;
    default:
      output.textContent = "Ógild aðgerð!";
      return;
  }

  output.textContent = "Niðurstaða: " + result;
}

function giveCompliment() {
  const compliments = [
    "Þú ert frábær forritari!",
    "Þú getur þetta!",
    "Þú ert mjög klár!",
    "Haltu áfram að standa þig vel!",
    "Þú ert einstök/einstakur!",
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);

  document.getElementById("complimentOutput").textContent =
    compliments[randomIndex];
}

function checkScore() {
  const scoreInput = document.getElementById("scoreInput").value;
  const output = document.getElementById("scoreOutput");

  if (scoreInput === "") {
    output.textContent = "Vinsamlegast sláðu inn stigin þín!";
    return;
  }

  const score = Number(scoreInput);

  if (score < 0 || score > 100) {
    output.textContent = "Stig verða að vera á bilinu 0–100!";
  } else if (score >= 90) {
    output.textContent = "Einkunn: A";
  } else if (score >= 80) {
    output.textContent = "Einkunn: B";
  } else if (score >= 70) {
    output.textContent = "Einkunn: C";
  } else if (score >= 60) {
    output.textContent = "Einkunn: D";
  } else {
    output.textContent = "Einkunn: F";
  }
}

