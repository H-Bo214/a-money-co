import Select from 'react-select'
import arrows from '../../assets/images/switch-arrows.svg'
import './Input.css'

const Input = ({
  options,
  handleBaseSelection,
  handleConvertSelection,
  handleAmount,
  toCurrency,
  amount,
  flag,
  flag2,
  setError,
}) => {
  const customStyles = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px solid #2E84FF',
      padding: '12px 12px',
    }),
    control: () => ({
      display: 'flex',
      width: '20rem',
      dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '25px',
      height: '4.3rem',
      background: `white url(${flag}) left  no-repeat`,
      // paddingTop: '10px',
      paddingLeft: '10px',
      backgroundOrigin: 'content-box',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'lightgray',
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
      marginLeft: '1rem',
      paddingLeft: '1rem',
    }),
  }

  const customStyles2 = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px solid #2E84FF',
      padding: '12px 12px',
    }),
    control: () => ({
      display: 'flex',
      width: '20rem',
      dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '25px',
      height: '4.3rem',
      background: `white url(${flag2}) left  no-repeat`,
      // paddingTop: '10px',
      paddingLeft: '10px',
      backgroundOrigin: 'content-box',
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
      marginLeft: '1rem',
      paddingLeft: '1rem',
    }),
  }

  console.log('toCurrency', toCurrency)

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
            options={options}
            onChange={handleBaseSelection}
            defaultValue={options[149]}
            className='select'
            styles={customStyles}
            onFocus={() => setError('')}
            id='from'
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
            onChange={handleConvertSelection}
            defaultValue={toCurrency}
            placeholder='Select...'
            className='select'
            styles={customStyles2}
            onFocus={() => setError('')}
            id='to'
          />
        </div>
      </div>
    </>
  )
}

export default Input
