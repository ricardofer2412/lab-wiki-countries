import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="countryList">
          <CountriesList />
        </div>
        <div>
          <Route
            path="/details/:CountryId"
            render={(props) => (
              <CountryDetails countries={countries} {...props} />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
