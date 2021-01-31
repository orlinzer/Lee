import React from 'react';
import ReactDOM from 'react-dom';

import Player from './Player';

class Game extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      x: 50
    };
  }

  componentDidUpdate () {
  }

  componentWillUnmount () {
  }

  componentDidMount () {
    setInterval(() => {
      // console.log('bla bla bla I\'m alive!!!');
      this.setState((state, props) => { this.state.x++; return this.state; });
    }, 1000 / 10);
  }

  componentDidCatch () {
  }

  render () {
    return (
      <svg
      viewBox='0 0 300 300'
      style={{
        width: 300 + 'px',
        height: 300 + 'px'
      }}>
        <Player x={this.state.x} />
      </svg>
    );
  }
}

export default Game;