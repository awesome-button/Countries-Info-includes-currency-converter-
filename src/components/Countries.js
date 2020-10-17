
import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({showAll, countriesToShow, setSearchChange, currencyRateOneSEKToLocal}) => {

    if (showAll) {
        return (
            <div></div>
        )
    }

    if (countriesToShow.length > 9) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )

    } else if (countriesToShow.length === 1) {
        return (
        <CountryDetails country={countriesToShow[0]} currencyRateOneSEKToLocal={currencyRateOneSEKToLocal} />
        )

    } else {
        return (
            <div className = "countryList">
                {countriesToShow.map((country) => {
                    return (
        
                        <Country key={country.name}
                            country={country}
                            setSearchChange={setSearchChange}
                        />                         
                  
                    )
                })}
            </div>
        )
    }
}

export default Countries
