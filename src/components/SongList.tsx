import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SongList extends PureComponent {
  render(): React.ReactNode {
    return <div>Song List</div>;
  }
}

// connect：連接在 App 的 Provider
export default connect()(SongList);
