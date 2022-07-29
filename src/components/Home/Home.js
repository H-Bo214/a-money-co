import './Home.css'
import options from '../../options'
import Inputs from '../Inputs/Inputs'
import Title from '../Title/Title'
import Results from '../Results/Results'
import { useState } from 'react'
import { fetchConversion } from '../../apiCalls'

const Home = () => {
  const [formData, setFormData] = useState({ from: '', to: '', amount: '' })
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConversion = async (e) => {
    const { from, to, amount } = formData
    e.preventDefault()
    if (from === to) return setError('Select two different currencies')
    if (to === '') return setError('Select a currency to covert to')
    if (!amount || amount < 0)
      return setError('Enter an amount greater than 0.')
    setIsLoading(true)
    const data = await fetchConversion(formData)
    setData(data)
    setIsDisabled(true)
    setIsLoading(false)
  }

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleFromCurrencyChange = (e) => {
    const { value } = e
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        from: value,
      }
    })
  }

  const handleToCurrencyChange = (e) => {
    const { value } = e
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        to: value,
      }
    })
  }

  const handleFocus = () => {
    setIsDisabled(false)
    setError('')
  }

  return (
    <main className='main-container'>
      <Title error={error} />
      <section className='form-container'>
        <form className='inputs-form' onSubmit={handleConversion} id='form'>
          <Inputs
            options={options}
            setError={setError}
            handleChange={handleChange}
            formData={formData}
            handleFromCurrencyChange={handleFromCurrencyChange}
            handleToCurrencyChange={handleToCurrencyChange}
            setIsDisabled={setIsDisabled}
            handleFocus={handleFocus}
          />
        </form>
        <Results data={data} isDisabled={isDisabled} isLoading={isLoading} />
      </section>
    </main>
  )
}

export default Home
