import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';

import DataList from './components/data-list/data-list.component';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return { cats: users}
        }
      ))
  }

  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredCats = cats.filter(cat => {
      return cat.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <SearchBox 
        className= 'cats-search-box' 
        placeholder= 'cat search' 
        onChangeHandler={onSearchChange}/>
        
        <DataList cats={filteredCats}/>
      </div>
    );
  }
}