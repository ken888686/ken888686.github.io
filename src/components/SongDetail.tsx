import React from 'react';
import { connect } from 'react-redux';
import { Song } from '../common';

type PropsType = {
  song: Song;
};

type StateType = {
  selectedSong: string
};

function SongDetail({ song }: PropsType) {
  // console.log(props.song);
  if (!song) {
    return <div>Select a song</div>;
  }
  return <div>{song.title}</div>;
}

const mapStateToProps = (state) =>
  // console.log(state);
  ({
    song: state.selectedSong,
  });
export default connect(mapStateToProps)(SongDetail);
