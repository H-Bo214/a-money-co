import './Home.css'
import options from '../../options'
import Input from '../Input/Input'
import { useEffect, useState } from 'react'
import { fetchConversion, fakeAPICall } from '../../apiCalls'

const Home = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [convertCurrency, setConvertCurrency] = useState('')
  const [amount, setAmount] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (baseCurrency === convertCurrency) return
    if (convertCurrency === '') return
    if (amount === null) return
    // const data = await fetchConversion(baseCurrency, convertCurrency, amount)
    const fakeData = fakeAPICall()
    console.log('fakeData', fakeData)
    setAmount('')
    setBaseCurrency('USD')
    setConvertCurrency(null)
  }

  const handleBaseSelection = (e) => {
    const { value } = e
    console.log('value in 1st input', value)
    setBaseCurrency(value)
  }

  const handleConvertSelection = (e) => {
    const { value, flag } = e
    console.log('value in 2nd input', value)
    setConvertCurrency(value)
  }

  const handleAmount = (e) => {
    const { value } = e.target
    console.log('value of input', value)
    setAmount(value)
  }
  console.log('rendered')
  console.log('base', baseCurrency)
  console.log('convert', convertCurrency)
  console.log('amount', amount)

  return (
    <main className='main-container'>
      <section className='title-container'>
        <h1>Currency Converter</h1>
        <p className='description'>
          Real-time exchange rates for 170 world currencies
        </p>
      </section>
      <section className='form-container'>
        <form className='inputs-form' onSubmit={onSubmit} id='form'>
          <Input
            options={options}
            handleBaseSelection={handleBaseSelection}
            handleConvertSelection={handleConvertSelection}
            handleAmount={handleAmount}
            baseCurrency={baseCurrency}
            convertCurrency={convertCurrency}
          />
        </form>
        <div className='convert-button-container'>
          <div className='conversion-container'>
            <p className='rate-result'>1.92BAM</p>
            <small>Mid-market exchange rate 8:32PM PST</small>
          </div>
          <button className='convert-button' type='submit' form='form'>
            Convert
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
