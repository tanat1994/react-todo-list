import React, { Component } from 'react';

class LikeButton extends Component {
  constructor () {
    super();
    this.state = {
      liked: false
    };
    this.likeButton = this.likeButton.bind(this);
  }

  likeButton () {
    this.setState({ liked: !this.state.liked });
  }

  render () {
    var text = this.state.liked ? 'Unlike' : 'Like';
    return (
      <button onClick={ this.likeButton }>
        {text}
      </button>
    );
  }
}

export default LikeButton;
