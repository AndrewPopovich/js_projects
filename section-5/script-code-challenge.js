
(function() { 
    function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.showQuestion = function() {
    console.log('Question = ' + this.question);

    for (var i = 0; i < this.answers.length; i++) {
        var answer = this.answers[i];
        console.log('Answer №' + i + ' is a ' + answer);
    }
};

Question.prototype.checkAnswer = function() {
    var userAnswer = prompt('Set your answer № here...', '');

    if (userAnswer === 'exit') {
        return true;
    }
    if (parseInt(userAnswer) === this.correctAnswer) {
        console.log('Your answer is correct!');
        userScore++;
    } else {
        console.log('Your answer is NOT correct!');
    }
    return false;
};

var question1 = new Question('2 + 2 = ?', ['2', '3', '4'], 2);
var question2 = new Question('3 + 3 = ?', ['5', '6', '7'], 1);
var question3 = new Question('4 + 4 = ?', ['8', '9', '10'], 0);

var questions = [question1, question2, question3];

var userScore = 0;

function nextQuestion () {
    console.log(question1);
    var randomIndex = Math.floor(Math.random() * questions.length);
    questions[randomIndex].showQuestion();
    var exitGame = questions[randomIndex].checkAnswer();
    if (exitGame) {
        return;
    }
    showUserScore(userScore);
    nextQuestion();
};

function showUserScore(score) {
    console.log('Your score is ' + score);
};
nextQuestion();
})();