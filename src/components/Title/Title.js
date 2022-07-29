import Error from '../Error/Error'
import '../Title/Title.css'

const Title = ({ error }) => {
  return (
    <section className='title-container'>
      <h1 className='app-title'>Currency Converter</h1>
      <p className='description'>
        Real-time exchange rates for 164 world currencies
      </p>
      <div className='error-message-container'>
        {error && <Error error={error} />}
      </div>
    </section>
  )
}

export default Title
