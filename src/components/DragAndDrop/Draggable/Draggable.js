import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlexVertical} from '../../App/AppGlam'

export default class Draggable extends Component {

  drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id)
    console.log(e)
  }

  noAllowDrop = (e) => {
    e.stopPropagation()
  }


  render() {
    return (
      <div>
        <FlexVertical id={this.props.id} draggable={true} onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
          {this.props.children}
        </FlexVertical>
      </div>
    );
  }
}

Draggable.propTypes = {
  id: PropTypes.number,
  style: PropTypes.object,
  childre: PropTypes.node
}