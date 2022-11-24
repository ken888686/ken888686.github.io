import { combineReducers } from 'redux';
import { Action, SONG_CREATOR } from '../common';

// Reducer
const songsReducer = () => [
  {
    title: 'Song A',
    duration: '00:10',
  },
  {
    title: 'Song B',
    duration: '00:20',
  },
  {
    title: 'Song C',
    duration: '00:30',
  },
  {
    title: 'Song D',
    duration: '00:40',
  },
];

// Reducer
const selectedSongReducer = (action: Action, selectedSong: string | null = null) => {
  if (action?.type === SONG_CREATOR) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
