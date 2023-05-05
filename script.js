const quizDB = [
    {
        question: "What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "What is the full form of CSS?",
        a: "Cascading Style Sheeps",
        b: "Cascading Style Sheets",
        c: "Cascading Super Sheets",
        d: "Cartoon Style Sheets",
        ans: "ans2"
    },
    {
        question: "What is the full form of HTTP?",
        a: "Hey Transfer Protocol",
        b: "Hyper Transfer  Transmission Protocol",
        c: "HyperTime Transfer Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "What is the full form of JS?",
        a: "JavarScript",
        b: "JavaScript",
        c: "JavaStyle",
        d: "JavaStore",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    
    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = ` <h3> You Scored ${score}/${quizDB.length} !!</h3><button class ="btn" onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea');
    }
    return false;
});