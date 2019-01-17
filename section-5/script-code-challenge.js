function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    this.showQuestion = function () {
        console.log('Question = ' + question);

        for (var i = 0; i < answers.length; i++) {
            var answer = answers[i];
            console.log('Answer №' + i + ' is a ' + answer);
        }
    };
}

var question1 = new Question('2 + 2 = ?', ['2', '3', '4'], 2);
var question2 = new Question('3 + 3 = ?', ['5', '6', '7'], 1);
var question3 = new Question('4 + 4 = ?', ['8', '9', '10'], 0);

var questions = [question1, question2, question3];

(function (questions) {
    // while (true) {
        console.log('>>>>>>>>>');
        var randomIndex = Math.round(Math.random() * (questions.length - 1));
        questions[randomIndex].showQuestion();
        var exitGame = checkAnswer(questions[randomIndex]);
        // if (exitGame) {
        //     console.log('You exit the game :(');
        //     break;
        // }
    // }
})(questions);

function checkAnswer(question) {
    var userAnswer = prompt('Set your answer № here...', '');
    console.log('user answer = ' + userAnswer + ' correct answer = ' + question.correctAnswer);

    if (userAnswer === 'exit') {
        return true;
    }
    if (userAnswer == question.correctAnswer) {
        console.log('Your answer is correct!');
    } else {
        console.log('Your answer is NOT correct!');
    }
    return false;
};