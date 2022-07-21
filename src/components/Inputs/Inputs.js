import Select from 'react-select'
import arrows from '../../assets/images/switch-arrows.svg'
import './Input.css'

const Input = ({
  options,
  handleBaseSelection,
  handleConvertSelection,
  handleAmount,
  baseCurrency,
  toCurrency,
  amount,
  setError,
}) => {
  const customStyles = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px solid #463182',
      padding: '12px 12px',
    }),
    control: () => ({
      display: 'flex',
      width: '21.25rem',
      dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      height: '4rem',
      backgroundColor: '#fff',
      backgroundOrigin: 'content-box',
      fontFamily: 'Nunito, sans-serif',
      fontSize: '1.125rem',
      padding: '1rem, 1rem, 0, 0',
      border: 'none',
      cursor: 'pointer',
      boxShadow: 'none',
      '&:hover': {
        border: '2px solid #19EF88',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#51707b',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: '#FFF',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#000',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'
      return { ...provided, opacity, transition }
    },
    valueContainer: (provided, state) => ({
      ...provided,
      paddingLeft: '1rem',
    }),
  }

  console.log('toCurrency', toCurrency)
  console.log('baseCurrency', baseCurrency)
  console.log('amount', amount)
  // console.log('options', options)

  const handleFocus = () => {
    console.log('hello')
  }
  return (
    <>
      <div className='amount-input-container'>
        <label htmlFor='amount' className='category-title-amount'>
          Amount
        </label>
        <input
          type='number'
          onChange={handleAmount}
          name='amount'
          value={amount}
          placeholder='1.00'
          min='1'
          max='999999'
          className='amount-input'
          onFocus={() => setError('')}
          id='amount'
        />
      </div>
      <div className='select-img-container'>
        <div>
          <label htmlFor='from' className='category-title-from'>
            From
          </label>
          <Select
            onChange={handleBaseSelection}
            defaultValue={options[148]}
            className='select'
            styles={customStyles}
            onFocus={handleFocus}
            id='from'
            blurInputOnSelect
            noOptionsMessage={() => 'No results found'}
            options={options}
            formatOptionLabel={(country) => (
              <div className='flag-image-container'>
                <img
                  src={country.flag}
                  alt='country flag'
                  className='flag-image'
                />
                <span>{country.label}</span>
              </div>
            )}
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
            options={options}
            formatOptionLabel={(country) => (
              <div className='flag-image-container'>
                <img
                  src={country.flag}
                  alt='country flag'
                  className='flag-image'
                />
                <span>{country.label}</span>
              </div>
            )}
            onChange={handleConvertSelection}
            defaultValue={toCurrency}
            placeholder='Select...'
            className='select'
            styles={customStyles}
            onFocus={() => setError('')}
            id='to'
            blurInputOnSelect
            noOptionsMessage={() => 'No results found'}
          />
        </div>
      </div>
    </>
  )
}

export default Input
