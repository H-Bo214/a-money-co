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
  const optionLabel = (option) => (
    <div className='flag-image-container'>
      <img
        src={option.flag}
        alt='option flag'
        className='flag-image'
        width='23px'
        height='23px'
      />
      <span>{option.label}</span>
    </div>
  )

  return (
    <>
      <section className='amount-input-container'>
        <label htmlFor='amount' className='category-title-amount'>
          Amount
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
        </label>
      </section>
      <section className='select-inputs-container'>
        <div>
          <label htmlFor='from' className='category-title-from'>
            From
            <Select
              formatOptionLabel={optionLabel}
              options={options}
              onChange={handleFromCurrencyChange}
              styles={customStyles}
              onFocus={handleFocus}
              noOptionsMessage={() => 'No results found'}
              placeholder='Select a currency'
              id='from'
            />
          </label>
        </div>
        <div className='image-container'>
          <img
            src={arrows}
            alt='Two green arrow going in opposing directions'
            className='arrows-image'
            width='48px'
            height='48px'
          />
        </div>
        <div>
          <label htmlFor='to' className='category-title-to'>
            To
            <Select
              formatOptionLabel={optionLabel}
              options={options}
              onChange={handleToCurrencyChange}
              styles={customStyles}
              onFocus={handleFocus}
              noOptionsMessage={() => 'No results found'}
              placeholder='Select a currency'
              id='to'
            />
          </label>
        </div>
      </section>
    </>
  )
}

export default Input
