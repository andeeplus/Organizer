import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Droppable extends Component {

  drop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('transfer')
    const nodeId = e.currentTarget.parentNode.id

    this.props.status(data, nodeId)
  }

  allowDrop = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div id={this.props.identifier} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  childre: PropTypes.node
}


