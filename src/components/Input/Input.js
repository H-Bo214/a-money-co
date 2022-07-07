import Select from 'react-select'
import arrows from '../../assets/images/switch-arrows.svg'

const Input = ({
  options,
  handleBaseSelection,
  handleConvertSelection,
  handleAmount,
  baseCurrency,
  amount,
}) => {
  return (
    <>
      <input
        type='number'
        onChange={handleAmount}
        name='amount'
        value={amount}
      />
      <Select
        options={options}
        onChange={handleBaseSelection}
        defaultValue={options[149]}
      />
      <img src={arrows} alt='Two green arrow going in opposing directions' />
      <Select
        options={options}
        onChange={handleConvertSelection}
        defaultValue={baseCurrency}
      />
    </>
  )
}

export default Input
