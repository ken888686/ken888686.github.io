export const SONG_CREATOR: string = 'SONG_CREATOR';
export const FOO_CREATOR: string = 'FOO_CREATOR';

export type Song = {
  title: string;
  duration: string;
};

interface SelectSongAction {
  type: 'SONG_CREATOR';
  payload: Song;
}
export type Action = SelectSongAction;
