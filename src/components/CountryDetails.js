import React from 'react';
import Converter from './Converter'

const CountryDetails = ({country, currencyRateOneSEKToLocal}) => {

    return (
        <div className="countryInfo">

                <h1>{country.name}</h1>
                <div className="info">
                    <p>Capital: <strong>{country.capital}</strong></p>
                    <p>Population: <strong>{country.population}</strong></p>
                    <p>Currencies: <strong>{country.currencies[0].name}</strong></p>
                    <h2>Languages</h2>
                    <ul>
                        {country.languages.map(language => {
                            return (<li key={language.name}>{language.name}</li>)
                        })}
                    </ul>
                </div>

                <div className="flag">
                    <img src={country.flag} alt="" style={{ width: 200 }}></img>
                </div>
                
                <Converter currencyRateOneSEKToLocal={currencyRateOneSEKToLocal} country={country} />
                
        </div>
    )
}
export default CountryDetails