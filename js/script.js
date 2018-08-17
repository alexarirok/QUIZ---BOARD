
$(document).ready(function()

function buildQuiz(){

}
function.showResults(); {

}
 quiz();
 submitButton.addEventListener("click", showResults);

var myQuestions = [

function buildQuiz() {
  var output =[];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      var answers=[];
      for(letter in currentQuestion.answers) {
        answers.push(
          <label>
          <input type="radio"
          name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>
        );
      }
    }
    output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
);
}
