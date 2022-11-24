export const SONG_CREATOR: string = 'SONG_CREATOR';
export const FOO_CREATOR: string = 'FOO_CREATOR';

interface SelectSongAction {
  type: 'SONG_CREATOR';
  payload: string;
}
export type Action = SelectSongAction;

export type Song = {
  title: string;
  duration: string;
};
