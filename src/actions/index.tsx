import { Action, SONG_CREATOR } from '../common';

// Action Creator
export const selectSong = (song: string): Action => ({
  // Return an Action
  type: SONG_CREATOR,
  payload: song,
});

export const fooFunc = () => ({});
