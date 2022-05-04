import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { id } = this.props;
    return nextProps.id !== id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} onKeyPress={this.handleClick}/>
    );
  }
}

export default Gif;
