import React, { useState } from 'react';

const Converter = ({country, currencyRateOneSEKToLocal}) => {
    const [amount, setAmount] = useState(1);

    const calcConverstion = (amountInSEK) => {
        return `${amountInSEK * currencyRateOneSEKToLocal} ${country.currencies[0].name}s`;
    }

    return (
        <div className="converter">
            <h2>Currency Converter</h2>
            <span>Enter amount in SEK:</span>
            <input
                        value={amount}
                        onChange={(e) => {
                            const amount = e.target.value;
                            setAmount(parseInt(amount) || 0);
                        }}
                    />
            <h2>{calcConverstion(amount)}</h2>        
        </div>
    )

}

export default Converter