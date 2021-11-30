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
    showQuestions(1);
}


function showQuestions(index) {
    const mainQuestion = document.querySelector('.main_question');
    let  queTag = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";
    mainQuestion.innerHTML = queTag; //main question here
    const optionList = document.querySelector('.my_options'); //option list here
    let optionTag = '<div class="option">' + questions[index].options[0] + '</div>'
    +'<div class="option">' + questions[index].options[1] + '</div>'
    +'<div class="option">' + questions[index].options[2] + '</div>'
    +'<div class="option">' + questions[index].options[3] + '</div>'
    
    optionList.innerHTML = optionTag;
}