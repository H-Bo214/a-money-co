import './Input.css'
import Select from 'react-select'
import arrows from '../../assets/images/switch-arrows.svg'
import { customStyles } from '../../styles'

const Input = ({
  options,
  handleChange,
  formData,
  handleFromCurrencyChange,
  handleToCurrencyChange,
  handleFocus,
}) => {
  const optionLabel = (country) => (
    <div className='flag-image-container'>
      <img src={country.flag} alt='country flag' className='flag-image' />
      <span>{country.label}</span>
    </div>
  )

  return (
    <>
      <div className='amount-input-container'>
        <label htmlFor='amount' className='category-title-amount'>
          Amount
        </label>
        <input
          type='number'
          onChange={handleChange}
          name='amount'
          value={formData.amount}
          placeholder='1.00'
          min='1'
          max='999999'
          className='amount-input'
          onFocus={handleFocus}
          id='amount'
        />
      </div>
      <div className='select-img-container'>
        <div>
          <label htmlFor='from' className='category-title-from'>
            From
          </label>
          <Select
            formatOptionLabel={optionLabel}
            options={options}
            onChange={handleFromCurrencyChange}
            styles={customStyles}
            onFocus={handleFocus}
            noOptionsMessage={() => 'No results found'}
            placeholder='Select a currency'
            className='select'
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
          <label htmlFor='to' className='category-title-to'>
            To
          </label>
          <Select
            formatOptionLabel={optionLabel}
            options={options}
            onChange={handleToCurrencyChange}
            styles={customStyles}
            onFocus={handleFocus}
            noOptionsMessage={() => 'No results found'}
            placeholder='Select a currency'
            className='select'
          />
        </div>
      </div>
    </>
  )
}

export default Input
