import './Home.css'
import options from '../../options'

import Input from '../Input/Input'
import { useEffect, useState } from 'react'
import { fetchConversion } from '../../apiCalls'

const Home = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [convertCurrency, setConvertCurrency] = useState('')
  const [amount, setAmount] = useState(null)

  // useEffect(() => {
  //   console.log('rendered')
  // }, [baseCurrency, convertCurrency, amount])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (baseCurrency === convertCurrency) return
    if (convertCurrency === '') return
    if (amount === null) return
    console.log('base', baseCurrency)
    console.log('convert', convertCurrency)
    console.log('fetchConversion', fetchConversion)
    const data = await fetchConversion(baseCurrency, convertCurrency, amount)
    console.log('data', data)
    setAmount(null)
    setBaseCurrency('')
    setConvertCurrency('')
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

  console.log('base', baseCurrency)
  console.log('convert', convertCurrency)
  console.log('amount', amount)
  return (
    <main>
      <section className='title-container'>
        <h1>Currency Converter</h1>
        <p className='description'>
          Real-time exchange rates for 170 world currencies
        </p>
      </section>
      <form className='inputs-form' onSubmit={onSubmit}>
        <Input
          options={options}
          handleBaseSelection={handleBaseSelection}
          baseCurrency={baseCurrency}
          convertCurrency={convertCurrency}
          handleConvertSelection={handleConvertSelection}
          handleAmount={handleAmount}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default Home

//next
// API call to get all Currency codes
// Set these codes to state
// Create dropdown selection menu based on data
