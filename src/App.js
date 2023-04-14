import { useState, useEffect } from 'react'; // this is a hook

import SearchBox from './components/search-box/search-box.component';

import CardList from './components/card-list/card-list.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // useState give us back an array of 2 values [value, setValue]
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilterCats] = useState(cats);

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setCats(users));
  }, []);

 useEffect(() => {
   const newFilteredCats = cats.filter(cat => {
     return cat.name.toLocaleLowerCase().includes(searchField)
   });

   setFilterCats(newFilteredCats)
 }, [cats, searchField]);
  
  
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

        <CardList cats={filteredCats}/>
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