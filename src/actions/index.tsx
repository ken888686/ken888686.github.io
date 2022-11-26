import { Action, Song, SONG_CREATOR } from '../common';

// Action Creator
export const selectSongAction = (song: Song): Action => ({
  // Return an Action
  type: SONG_CREATOR,
  payload: song,
});

export const fooFunc = () => ({});
