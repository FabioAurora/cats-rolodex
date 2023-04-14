import { Component } from "react";
import './card.styles.css';

export default class Card extends Component {
  render() {
    const {name, id, email} = this.props.cat;
    
    return (
      <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`cat ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}