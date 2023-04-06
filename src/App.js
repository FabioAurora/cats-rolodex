import { useState } from 'react'; // this is a hook

import SearchBox from './components/search-box/search-box.component';

import DataList from './components/data-list/data-list.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // useState give us back an array of 2 values [value, setValue]
  
  
  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
        <h1 className="app-title">Cats Rolodex</h1>
        
        <SearchBox 
        className= 'cats-search-box' 
        placeholder= 'cat search' 
        onChangeHandler={onSearchChange}/>

        {/* 
        <DataList cats={filteredCats}/> */}
      </div>
  )
}

/* export default class App extends Component {
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

  

  render() {
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredCats = cats.filter(cat => {
      return cat.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <h1 className="app-title">Cats Rolodex</h1>
        <SearchBox 
        className= 'cats-search-box' 
        placeholder= 'cat search' 
        onChangeHandler={onSearchChange}/>
        
        <DataList cats={filteredCats}/>
      </div>
    );
  }
} */

export default App;