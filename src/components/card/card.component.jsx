import { Component } from "react";

export default class Card extends Component {
  render() {
    const {name, id, email} = this.props.cat;
    return (
      <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`cat ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}