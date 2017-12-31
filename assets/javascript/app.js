
// var countdownElement = getElementById("countdown");


function submitAnswers(){
  var total = 8;
  var score = 0;

//obtaining user input
  var q1 = document.forms["quizform"]["q1"].value;
  var q2 = document.forms["quizform"]["q2"].value;
  var q3 = document.forms["quizform"]["q3"].value;
  var q4 = document.forms["quizform"]["q4"].value;
  var q5 = document.forms["quizform"]["q5"].value;
  var q6 = document.forms["quizform"]["q6"].value;
  var q7 = document.forms["quizform"]["q7"].value;
  var q8 = document.forms["quizform"]["q8"].value;


// validation

// this is the for loop that will run the function that says you can't miss selecting any of the questions. Below however, only applies to one question but we want it to run thru all eight, so in order to change q1 the q2, q3, ect, we need to put an eval on it. See below

    // for (i = 0; i <= total; i++) {
    //    if (q1 == null || q1 == ""){
    //        alert("you missed q1");
    //        return false;
    //      }
    for(i = 1; i <= total; i++){
       if (eval("q"+ i) == null || eval("q" + i) == ""){
           alert("you missed question " + i);
           return false;
         }


    }

    // Establish correct answers in arrray
    var answers = ["b","c","b","c","c","b","b","c"];

    // check awnsers
    // if(q1 == answers[0]){
    //   scores++;
    // }
// once again, we shouldn't write 8 if statements, so we will be doing a for loop. So from directly above, we are going to do a for loop so it can run thru and check all the correct answers.
    for(i = 1; i <= total; i++){
    if(eval("q" + i) == answers[i - 1]){
    score++;
    }

  }

// display results
var results = document.getElementById("results");
results.innerHTML = "<p>you scored <span>" +score+ "</span> out of <span>" +total+"</span></p>";
alert("you scored " +score+ " out of " +total);
return false;

}
