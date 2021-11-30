const myQuizApp = document.querySelector('.my_quiz_app'); // quiz app home page
const myBtn = document.querySelector('.my_btn button');  // quiz app first page next button
const rulesBox = document.querySelector('.rules_box');   //rules box start hare
const exitBtn = document.querySelector('.buttons .exit_quiz');  //exit button
const continueBtn = document.querySelector('.buttons .continue'); //continue button
const questionBox = document.querySelector('.quiestions_box');  //question box


myBtn.onclick = () => {
    rulesBox.classList.add('active_rules_box');
    myQuizApp.classList.add('inactive_my_quiz_app');
}

exitBtn.onclick = () => {
    rulesBox.classList.remove('active_rules_box');
    myQuizApp.classList.remove('inactive_my_quiz_app');
}

continueBtn.onclick = () => {
    questionBox.classList.add('questions_box_active');
    rulesBox.classList.remove('active_rules_box');
    myQuizApp.classList.add('inactive_my_quiz_app');
    showQuestions(0);
}


const nextBtn = document.querySelector('.nxt_btn button');

let questionCount = 0;

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);       
    } else {
        console.log("You have complete your Task 🥰");
    }

}



function showQuestions(index) {
    const mainQuestion = document.querySelector('.main_question'); // main quention here
    let  queTag = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";
    mainQuestion.innerHTML = queTag; //main question here
    const optionList = document.querySelector('.my_options'); //option list here
    let optionTag = '<div class="option">' + questions[index].options[0] + '</div>'
    +'<div class="option">' + questions[index].options[1] + '</div>'
    +'<div class="option">' + questions[index].options[2] + '</div>'
    +'<div class="option">' + questions[index].options[3] + '</div>'
    optionList.innerHTML = optionTag;


    const totalQuestion = document.querySelector('.total_question');
    let totalQuestionTag = '<p>' + questions[index].numb + ' Of 5 Question' + '</p>';
    totalQuestion.innerHTML = totalQuestionTag;
}