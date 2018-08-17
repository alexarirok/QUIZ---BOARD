
function check(){
var question1= document.quiz.question1.value;
var question2= document.quiz.question2.value;
var question3= document.quiz.question3.value;
var correct=0;

if (question1 === "jQuery") {
correct++;
}

if (question2 === "Brendan Eich") {
correct++;
}

if (question3 === "javaScript") {
correct++;
}

var messages = ["Exellent!", "Good job", "Good trial!! try again"];

var range;

if (correct < 1)
{
range = 2;
}
if (correct > 0 && correct < 3){
range = 1;
}
if (correct > 2){
range = 0;
}

document.getElementById("message").innerHTML= messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct ";
}
