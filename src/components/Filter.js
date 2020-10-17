import React from 'react'

const Filter = ({ handleSearchChange }) => {
    return (
        <div className="filter">
            <h2>Country name</h2>

            <input
                onChange={(e) => {
                    handleSearchChange(e)
                }}
            />

        </div>
    )
}

export default Filter