import CurrencyRow from '../../components/CurrencyRow/CurrencyRow';
import { useState, useEffect } from 'react';
import classes from './Converter.module.css';


const BASE_URL = 'https://v6.exchangerate-api.com/v6/71d8ca75e23a07bd222123aa/latest/USD'
// const BASE_URL = 'https://api.fastforex.io/fetch-all?api_key=90b14a5cd9-7a1ba6e414-rbzfwj'
// const BASE_URL = 'https://api.currencyapi.com/v3/latest?apikey=EbKzznJWZaD4yJaGkSKf8J1cJkEu232Ib6KoJCeY'

const Converter = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountFromCurrency, setAmountFromCurrency] = useState(true)


    let toAmount, fromAmount
    if (amountFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate 
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const firstCurrency = Object.keys(data.conversion_rates)[102]
                setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates)])
                setFromCurrency(data.base_code)
                setToCurrency(firstCurrency)
                setExchangeRate(data.conversion_rates[firstCurrency])
                
            })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(response => response.json())
            .then(data => setExchangeRate(data.conversion_rates[toCurrency]))
        } 
    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountFromCurrency(true)
    }
    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountFromCurrency(false)
    }

  return (
    <div className={classes.convertbox}>
        <div className={classes.sendtext}>
        <h2>Send Money Now</h2>
        </div>
        <p>You Send</p>
        <CurrencyRow 
            currencyOptions={currencyOptions}
            selectCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
        />
        <p>Receiver Get</p>
        <CurrencyRow
            currencyOptions={currencyOptions}
            selectCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
        />
        <div className={classes.transaction}>
            <div className={classes.exchange}>
                <h4>Exchange Details</h4>
                <p>1 USD =414.50 NGN</p>
                <p>1 NGN =0.0024 USD</p>
            </div>
            <div className={classes.fee}>
                <h4>Transaction Fee</h4>
                <p>USD 0.10 - NGN 0.50</p>
            </div>
        </div>

        <button>Send Money</button>
   </div>
  )
}

export default Converter