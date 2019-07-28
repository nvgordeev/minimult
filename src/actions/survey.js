import survey from '../stores/survey.js';
import SCREENS from '../constants/screens.js';
import currentScreen from '../stores/currentScreen.js';

export default {
  start: (person) => {
    survey.init();
    survey.setPerson(person);
    currentScreen.change(SCREENS.SURVEY);
  },
  setAnswer: (question, answer) => {
    if (typeof answer !== 'boolean') {
      throw new Error('Got non-boolean answer');
    }
    if (answer) {
      question.scalesTrue.forEach(survey.incScale);
    } else {
      question.scalesFalse.forEach(survey.incScale);
    }
  },
  finish: () => {
    currentScreen.change(SCREENS.RESULT);
  },
};
