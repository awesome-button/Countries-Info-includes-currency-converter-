import React, { useState } from 'react';

const Converter = ({country, currencyRateOneSEKToLocal}) => {
    const [amount, setAmount] = useState(1);

    const calcConverstion = (amountInSEK) => {
        return amountInSEK * currencyRateOneSEKToLocal;
    }

    return (
        <div className="converter">
            <h2>Currency Converter</h2>
            <span>Enter amount in SEK:</span>
            <input
                        value={amount}
                        onChange={(e) => {
                            const amount = e.target.value;
                            setAmount(amount);
                        }}
                    />
            <h2>{calcConverstion(amount)} {`${country.currencies[0].name}s`}</h2>        
        </div>
    )

}

export default Converter