const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const Question = document.querySelector("#question");
const text_a = document.querySelector("#a_text");
const text_b = document.querySelector("#b_text");
const text_c = document.querySelector("#c_text");
const text_d = document.querySelector("#d_text");
const faq = document.getElementsByTagName("ul");
const submitBtn = document.querySelector("#submit");
const rad = document.querySelectorAll("input");

let num = 0;
Question.innerHTML = quizData[num].question;
text_a.innerHTML = quizData[num].a;
text_b.innerHTML = quizData[num].b;
text_c.innerHTML = quizData[num].c;
text_d.innerHTML = quizData[num].d;

let count = 1;
const change = () => {
  num += 1;
  count = count + 1;
  Question.innerHTML = quizData[num].question;
  text_a.innerHTML = quizData[num].a;
  text_b.innerHTML = quizData[num].b;
  text_c.innerHTML = quizData[num].c;
  text_d.innerHTML = quizData[num].d;
};

let score = 0;

const handleChange = () => {
  rad.forEach((item) => {
    let answer = quizData[num].correct;
    if (item.checked) {
      if (item.id == answer) {
        score += 1;
      }
    }
  });
};

function deselectAnswers() {
  rad.forEach((item) => {
    item.checked = false;
  });
}

const final = () => {
  Question.innerHTML = `Score = ${score}/${quizData.length}`;
  faq[0].style.display = "none";
  submitBtn.innerHTML = "Your Result";
};

const result = () => {
  handleChange();
  if (count < quizData.length) {
    change();
    deselectAnswers();
  } else {
    final();
  }
};

submitBtn.addEventListener("click", result);
