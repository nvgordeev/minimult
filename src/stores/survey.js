import { writable } from 'svelte/store';
import uuid from '../helpers/uuid'

const initialState = {
  id: null,
  currentQuestionNumber: 0,
  person: {},
  scales: {},
}

function createSurvey() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    init: () => set({ ...initialState, id: uuid() }),
    incScale: (scale) => update(
      (survey) => ({
        ...survey,
        scales: {
          ...survey.scales,
          [scale]: survey.scale ? + survey.scale + 1 : 1,
        },
      })
    ),
    setPerson: (person) => update(
      (survey) => ({
        ...survey,
        person,
      }),
    ),
  };
}

export default createSurvey()