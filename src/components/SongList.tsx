import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Song } from '../common';
import { selectSongAction } from '../actions';

type PropsType = {
  songs: Song[];
  selectSong: (song: Song) => void;
};

type StateType = {
  songs: Song[];
};

class SongList extends PureComponent<PropsType, StateType> {
  renderList() {
    const { songs, selectSong } = this.props;
    return songs.map((song) => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            type="submit"
            className="ui button primary"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render(): React.ReactNode {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// 將抓到的 state map 到 props
const mapStateToProps = (state: StateType) => ({
  songs: state.songs,
});

// connect：連接在 App 的 Provider
export default connect(
  mapStateToProps,
  {
    selectSong: selectSongAction,
  },
)(SongList);
