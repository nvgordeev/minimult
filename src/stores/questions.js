import { readable } from 'svelte/store';

import questions from '../data/questions.json';

export default readable(questions);
