import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Song } from '../common';

type StateType = {
  songs: Song[];
};

class SongList extends PureComponent {
  render(): React.ReactNode {
    return <div>Song List</div>;
  }
}

// 將抓到的 state map 到 props
const mapStateToProps = (state: StateType) => ({
  songs: state.songs,
});

// connect：連接在 App 的 Provider
export default connect(mapStateToProps)(SongList);
