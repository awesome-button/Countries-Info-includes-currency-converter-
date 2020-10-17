
import React from 'react'

const Country = ({ country, setSearchChange }) => {
    return (
        <div className="country">
            <button onClick={() => { setSearchChange(country.name)}}>
                <img src={country.flag} alt="" style={{ width: 40 }}></img>
                <span>{country.name}</span>
            </button>     
        </div>
        
    )
}

export default Country