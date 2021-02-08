import React from 'react';
import ReactDOM from 'react-dom';

import Controller from '../scripts/Controller';

class Player extends React.Component {
  constructor (props) {
    super(props);
    this.ref = React.createRef();

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
    // this.setState((state, props) => {
    //   if (props.x) {
    //     this.state.cx = props.x;
    //     return this.state;
    //   }
    // });

  }

  componentWillUnmount () {
  }

  componentDidMount () {
    var circle = this.ref.current;

    document.addEventListener('keydown', (event) => {
      console.log("keydown");
    });
    document.addEventListener('keypress', (event) => {
      console.log("keypress");
    });
    document.addEventListener('keyup', (event) => {
      console.log("keyup");
    });
  }

  componentDidCatch () {
  }

  render () {
    return (
      <circle
      ref={this.ref}
      r='50'
      cx={this.state.cx}
      cy='50'
      fill='red'
      ></circle>
    );
  }
}

export default Player;