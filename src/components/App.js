import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Countries from './Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchChange, setSearchChange] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [currencyRateOneSEKToLocal, setcurrencyRateOneSEKToLocal] = useState(0);

  let countriesToShow = showAll 
    ? countries 
    : countries.filter(country => country.name.toLowerCase().includes(searchChange.toLowerCase()));

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data);
    })
  }, [])

  useEffect(() => {

    if (countriesToShow.length === 1) {
      const api = process.env.REACT_APP_API_KEY;
      const countryCurrency = countriesToShow[0].currencies[0].code;
      
      axios
        .get(`https://free.currconv.com/api/v7/convert?q=SEK_${countryCurrency}&compact=ultra&apiKey=${api}`)
        .then(response => setcurrencyRateOneSEKToLocal(response.data[`SEK_${countryCurrency}`]));

    }
  }, [countriesToShow])

  const handleSearchChange = (event) => {
    setSearchChange(event.target.value);
    setShowAll(false);
  }

  return (
    <div className="app">
      <Filter handleSearchChange={handleSearchChange} />
      <Countries 
        showAll={showAll}
        countriesToShow={countriesToShow} 
        setSearchChange={setSearchChange}
        currencyRateOneSEKToLocal = {currencyRateOneSEKToLocal} 
      />
    </div>
  );
}

export default App;
