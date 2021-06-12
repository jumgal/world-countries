import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import ShowError from './components/ShowError';


import './styles/App.scss';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err.message))
  }, [])

  const [color, setColor] = useState(true);

  return (
    <Router>
      <div className={color ? 'container-main light' : 'container-main dark'}>
        <Header color={color} setColor={setColor} />
        <main>
          {/* <Route exact path="/" component={CountriesList} /> */}
          {/* <Route exact path="/details/:country" component={CountryDetails} /> */}
          <Switch>
            <Route exact path="/">
              <CountriesList countries={countries} setCountries={setCountries} />
            </Route>
            <Route exact path="/details/:country">
              <CountryDetails countries={countries} />
            </Route>
            <Route component={ShowError} />
          </Switch>
        </main>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
