import React from 'react';
import ReactDOM from 'react-dom';

class Player extends React.Component {
  constructor (props) {
    super(props);

    console.log(props);

    this.state = {
      cx: 50
    };

    if (props.x) {
      this.state.cx = props.x;
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
    this.setState((state, props) => {
      if (props.x) {
        this.state.cx = props.x;
        return this.state;
      }
    })
  }

  componentWillUnmount () {
  }

  componentDidMount () {
  }

  componentDidCatch () {
  }

  render () {
    return (
      <circle
      r='50'
      cx={this.state.cx}
      cy='50'
      fill='red'
      ></circle>
    );
  }
}

export default Player;