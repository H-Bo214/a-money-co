import './Home.css'
import options from '../../options'
import Inputs from '../Inputs/Inputs'
import { useState } from 'react'
import { formatDate } from '../../helpers'
import { fetchConversion, fakeAPICall } from '../../apiCalls'
import usFlag from '../../assets/images/us-flag.svg'

const Home = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('')
  const [amount, setAmount] = useState('')
  const [flag, setFlag] = useState(usFlag)
  const [flag2, setFlag2] = useState('')
  const [data, setData] = useState({})

  const onSubmit = async (e) => {
    e.preventDefault()
    if (baseCurrency === toCurrency) return
    if (toCurrency === '') return
    if (!amount || amount < 0) return
    // const data = await fetchConversion(baseCurrency, toCurrency, amount)
    const fakeData = await fakeAPICall()
    setData(fakeData)
    console.log('fakeData', fakeData)
    console.log('data', data)
    // setData(data)
    setAmount('')
    setBaseCurrency('USD')
    setToCurrency(null)
  }

  const handleBaseSelection = (e) => {
    const { value, flag } = e
    setBaseCurrency(value)
    setFlag(flag)
  }

  const handleConvertSelection = (e) => {
    const { value, flag } = e
    setToCurrency(value)
    setFlag2(flag)
  }

  const handleAmount = (e) => {
    const { value } = e.target
    setAmount(value)
  }
  // console.log('rendered')
  // console.log('base', baseCurrency)
  // console.log('convert', toCurrency)
  // console.log('amount', amount)

  return (
    <main className='main-container'>
      <section className='title-container'>
        <h1>Currency Converter</h1>
        <p className='description'>
          Real-time exchange rates for 168 world currencies
        </p>
      </section>
      <section className='form-container'>
        <form className='inputs-form' onSubmit={onSubmit} id='form'>
          <Inputs
            options={options}
            handleBaseSelection={handleBaseSelection}
            handleConvertSelection={handleConvertSelection}
            handleAmount={handleAmount}
            baseCurrency={baseCurrency}
            toCurrency={toCurrency}
            amount={amount}
            flag={flag}
            flag2={flag2}
          />
        </form>
        <div className='convert-button-container'>
          {data.result ? (
            <div className='conversion-container'>
              <p className='rate-result'>
                {data.result} ${data.query.to}
              </p>
              <small>Mid-market exchange rate {formatDate(data.date)}</small>
            </div>
          ) : (
            <div className='conversion-container'>
              <p className='rate-result'>Rate</p>
              <small>Mid-market exchange rate</small>
            </div>
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
