<script>
    import questions from '../../stores/questions.js';
    import survey from '../../stores/survey.js';
    import SCREENS from '../../constants/screens.js';
    import currentScreen from '../../stores/currentScreen.js';

    const lastQuestionIndex = $questions.length - 1;

    let questionIndex = 0;
    let currentQuestion = $questions[questionIndex];
    let currentAnswer = undefined;

    function setAnswer(answer) {
      currentAnswer = answer;
    }

    function processResult() {
      if (currentAnswer) {
        currentQuestion.scalesTrue.forEach(survey.incScale);
      } else {
        currentQuestion.scalesFalse.forEach(survey.incScale);
      }
      next();
    }

    function next() {
      if (questionIndex === lastQuestionIndex) {
        survey.finish();
        currentScreen.change(SCREENS.RESULT)
      }
      currentAnswer = undefined;
      questionIndex += 1;
      currentQuestion = $questions[questionIndex];
    }
</script>

<article>
    <h3> { $survey.person.name } </h3>
    <h4> Вопрос { questionIndex + 1 } из { $questions.length }</h4>
    <p>
      { currentQuestion.text }
    </p>
    <button on:click={ () => setAnswer(true) }> Верно </button>  
    <button on:click={ () => setAnswer(false) }> Неверно </button>  
    <button on:click={ processResult } disabled={ currentAnswer === undefined }> Ответить </button> 
</article>