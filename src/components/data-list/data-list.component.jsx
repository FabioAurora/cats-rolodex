import { Component } from "react";

import Card from "../card/card.component";
import './data-list.styles.css';

export default class DataList extends Component {
  render() {
    const { cats } = this.props;
    return (
      <div className="card-list">
        {
          cats.map(cat => {
            return ( 
            <Card cat={cat}/>
            )
          })
        }
      </div>
    )
  }
}