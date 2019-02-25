import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlexVertical} from '../../../styles/emotion'

const placeholder = document.createElement("li");
placeholder.className = "placeholder";


export default class Draggable extends Component {

  drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id)
  }



  noAllowDrop = (e) => {
    e.stopPropagation()
    if(e.target.className === "placeholder") return;
  }


  render() {
    return (
      <div>
        <FlexVertical 
          id={this.props.id} 
          draggable={true} 
          onDragStart={this.drag} 
          onDragOver={this.noAllowDrop} 
          style={this.props.style}>
          {this.props.children}
        </FlexVertical>
      </div>
    );
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  childre: PropTypes.node
}