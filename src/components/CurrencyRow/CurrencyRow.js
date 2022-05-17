import classes from './CurrencyRow.module.css';

const CurrencyRow = (props) => {

    const{
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount,
    } = props;


  return (
    <div className={classes.CurrencyRow}>
        
        <input  type="number" value={amount} onChange={onChangeAmount}/>
        <select value={selectCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map(option => (
                 <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default CurrencyRow