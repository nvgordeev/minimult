import { writable } from 'svelte/store';

import SCREENS from '../constants/screens';

function createCurrentScreen() {
  const { subscribe, set } = writable(SCREENS.ROOT);

  return {
    subscribe,
    change: newScreen => set(newScreen),
  };
}

export default createCurrentScreen();
