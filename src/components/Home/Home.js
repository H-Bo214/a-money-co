import './Home.css'
import options from '../../options'
import Inputs from '../Inputs/Inputs'
import Error from '../Error/Error'
import { useState } from 'react'
import { fetchConversion, fakeAPICall } from '../../apiCalls'
import { formatTime } from '../../helpers'

const Home = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState(null)
  const [amount, setAmount] = useState('')
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  const handleConversion = async (e) => {
    e.preventDefault()
    if (baseCurrency === toCurrency)
      return setError('Select a different currency.')
    if (toCurrency === null) return setError('Select a currency to covert to.')
    if (!amount || amount < 0)
      return setError('Enter an amount greater than 0.')
    // const result = await fetchConversion(baseCurrency, toCurrency, amount)
    const fakeData = fakeAPICall()
    setData(fakeData)
    setToCurrency(null)
    // setData(result)
    // console.log('fakeData', fakeData)
    // console.log('result', result)
  }

  const handleBaseSelection = (e) => {
    const { value } = e
    setBaseCurrency(value)
  }

  const handleConvertSelection = (e) => {
    const { value } = e
    setToCurrency(value)
  }

  const handleAmount = (e) => {
    const { value } = e.target
    setAmount(value)
  }

  return (
    <main className='main-container'>
      <section className='title-container'>
        <h1>Currency Converter</h1>
        <p className='description'>
          Real-time exchange rates for 164 world currencies
        </p>
        {error && <Error error={error} />}
      </section>
      <section className='form-container'>
        <form className='inputs-form' onSubmit={handleConversion} id='form'>
          <Inputs
            options={options}
            handleBaseSelection={handleBaseSelection}
            handleConvertSelection={handleConvertSelection}
            handleAmount={handleAmount}
            amount={amount}
            setError={setError}
          />
        </form>
        <div className='convert-button-container'>
          {data.result ? (
            <div className='conversion-container'>
              <p className='rate-result'>
                {data.result} ${data.query.to}
              </p>
              <small>
                Mid-market exchange rate at {formatTime(data.info.timestamp)}
              </small>
            </div>
          ) : (
            <div className='conversion-container'></div>
          )}
          <button className='convert-button' type='submit' form='form'>
            CONVERT
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
