var total = 8;
var score = 0;

function submitAnswers(){


  var q1 = document.forms["quizform"]["q1"].value;
  var q2 = document.forms["quizform"]["q2"].value;
  var q3 = document.forms["quizform"]["q3"].value;
  var q4 = document.forms["quizform"]["q4"].value;
  var q5 = document.forms["quizform"]["q5"].value;
  var q6 = document.forms["quizform"]["q6"].value;
  var q7 = document.forms["quizform"]["q7"].value;
  var q8 = document.forms["quizform"]["q8"].value;



    for(i = 1; i <= total; i++){
       if (eval("q"+ i) == null || eval("q" + i) == ""){
           alert("you missed question " + i);
           return false;
         }


    }


    var answers = ["b","c","b","b","c","b","b","b"];


    for(i = 1; i <= total; i++){
    if(eval("q" + i) == answers[i - 1]){
    score++;
    }

  }


var results = document.getElementById("results");
results.innerHTML = "<p>you scored <span>" +score+ "</span> out of <span>" +total+"</span></p>";
alert("you scored " +score+ " out of " +total);
return false;


}
var results = document.getElementById("results");

var number = 60;
var intervalId;
$("#countdown").on("click", run);
function run() {
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
  $("#countdown").html("<h2>" + number + "</h2>");
  if (number === 0) {

    results.innerHTML = "<p>you scored <span>" +score+ "</span> out of <span>" +total+"</span></p>";
    alert("you scored " +score+ " out of " +total);
    clearInterval(intervalId);

  }
}
run();
