import CurrencyRow from "components/Home/CurrencyRow/CurrencyRow";
import { useState, useEffect } from "react";
import classes from "./Converter.module.css";

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/71d8ca75e23a07bd222123aa/latest/USD";

const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  const [toAmount, setToAmount] = useState(0);
  const [fromAmount, setFromAmount] = useState(0);

  useEffect(() => {
    if (amountFromCurrency) {
      const fromAmount = amount;
      const toAmount = amount * exchangeRate;
      setToAmount(toAmount);
      setFromAmount(fromAmount);
    } else {
      const toAmount = amount;
      const fromAmount = amount / exchangeRate;
      setToAmount(toAmount);
      setFromAmount(fromAmount);
    }
  }, [amount, exchangeRate, amountFromCurrency]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const firstCurrency = Object.keys(data.conversion_rates)[102];
        const conversionRates = [];
        for (let item in data.conversion_rates) {
          conversionRates.push({
            key: item,
            value: data.conversion_rates[item],
          });
        }
        console.log(conversionRates);
        setCurrencyOptions(conversionRates);
        setFromCurrency(data.base_code);
        setToCurrency(firstCurrency);
        setExchangeRate(data.conversion_rates[firstCurrency]);
        setToAmount(data.conversion_rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((response) => response.json())
        .then((data) => setExchangeRate(data.conversion_rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e, type) => {
    if (type === "from") {
      setAmountFromCurrency(true);
      setAmount(e.target.value);
    } else {
      setAmountFromCurrency(false);
      setAmount(e.target.value);
    }
  };

  const handleChangeCurrency = (e, type) => {
    console.log(currencyOptions);
    if (type === "from") {
      const amount = currencyOptions.find(
        (item) => item.key === e.target.value
      ).value;
      setFromAmount(amount);
      setFromCurrency(e.target.value);
    } else {
      const amount = currencyOptions.find(
        (item) => item.key === e.target.value
      ).value;
      setToAmount(amount);
      setToCurrency(e.target.value);
    }
  };

  return (
    <div class="animate__animated animate__fadeInRight animate__delay-800ms">
      <div className={classes.convertbox}>
        <div className={classes.sendtext}>
          <h2>Send Money Now</h2>
        </div>
        <p>You Send</p>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectCurrency={fromCurrency}
          onChangeCurrency={(e) => handleChangeCurrency(e, "from")}
          onChangeAmount={(e) => handleAmountChange(e, "from")}
          amount={fromAmount}
        />
        <p>Receiver Get</p>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectCurrency={toCurrency}
          onChangeCurrency={(e) => handleChangeCurrency(e, "to")}
          onChangeAmount={(e) => handleAmountChange(e, "to")}
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
    </div>
  );
};

export default Converter;
