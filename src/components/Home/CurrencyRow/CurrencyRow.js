import classes from './CurrencyRow.module.css';

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div className={classes.CurrencyRow}>
      <input type="number" value={amount} onChange={onChangeAmount} />
      <div className={classes.option}>
      <select value={selectCurrency} onChange={onChangeCurrency}>
        {currencyOptions?.map((option, index) => (
          <option key={index} value={option.key}>
            {option.key}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default CurrencyRow;
