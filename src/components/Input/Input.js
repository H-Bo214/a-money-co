import Select from 'react-select'
import arrows from '../../assets/images/switch-arrows.svg'
import '../Input/Input.css'
import customStyles from '../../styles'

const Input = ({
  options,
  handleBaseSelection,
  handleConvertSelection,
  handleAmount,
  convertCurrency,
  amount,
}) => {
  return (
    <>
      <div>
        <p className='category-title'>Amount</p>
        <input
          type='text'
          onChange={handleAmount}
          name='amount'
          value={amount}
          placeholder='1.00'
          maxLength={7}
          className='amount-input'
        />
      </div>
      <div className='select-img-container'>
        <div>
          <p className='category-title'>From</p>
          <Select
            options={options}
            onChange={handleBaseSelection}
            defaultValue={options[149]}
            className='select'
            styles={customStyles}
          />
        </div>
        <div className='image-container'>
          <img
            src={arrows}
            alt='Two green arrow going in opposing directions'
            className='arrows-image'
          />
        </div>
        <div>
          <p className='category-title'>To</p>
          <Select
            options={options}
            onChange={handleConvertSelection}
            defaultValue={convertCurrency}
            placeholder='Select...'
            className='select'
            styles={customStyles}
          />
        </div>
      </div>
    </>
  )
}

export default Input
