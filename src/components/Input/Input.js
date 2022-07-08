import Select from 'react-select'
import arrows from '../../assets/images/switch-arrows.svg'
import '../Input/Input.css'

const Input = ({
  options,
  handleBaseSelection,
  handleConvertSelection,
  handleAmount,
  convertCurrency,
  amount,
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
      backgroundColor: '#FFF',
      borderRadius: '25px',
      height: '4.3rem',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#51707b',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: '#FFF',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'
      return { ...provided, opacity, transition }
    },
  }

  return (
    <>
      <div className='amount-input-container'>
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
      <div className='from-container'>
        <p className='category-title'>From</p>
        <Select
          options={options}
          onChange={handleBaseSelection}
          defaultValue={options[149]}
          className='select'
          classNamePrefix='dropdown'
          styles={customStyles}
        />
      </div>
      <img
        src={arrows}
        alt='Two green arrow going in opposing directions'
        className='arrows-image'
      />
      <div className='to-container'>
        <p className='category-title'>To</p>
        <Select
          options={options}
          onChange={handleConvertSelection}
          defaultValue={convertCurrency}
          placeholder='Select...'
          className='select'
          classNamePrefix='dropdown'
          styles={customStyles}
        />
      </div>
    </>
  )
}

export default Input
