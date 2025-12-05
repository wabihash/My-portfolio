import React, { Component } from 'react';
import './Evan.css';

export default class Evan extends Component {
  render() {
    let {title, price, desc, img} = this.props;

    return (
      <div >
        <div className="single-food">
          <div className="img">
            <img
              src={img}  
              alt={title}
            />
          </div>
          <div className="title-price">
            <h3> {title}</h3>
            <p> {price}</p>
          </div>

          <div className="food-desc">
            {desc}
          </div>
        </div>

      </div>
    );
  }
}
