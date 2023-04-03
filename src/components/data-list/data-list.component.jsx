import { Component } from "react";

import './data-list.styles.css';

export default class DataList extends Component {
  render() {
    const { cats } = this.props;
    return (
      <div>
        {
          cats.map(cat => {
            return <h1 key={cat.id}>{cat.name}</h1>
          })
        }
      </div>
    )
  }
}