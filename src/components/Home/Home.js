import './Home.css'
import arrows from '../../assets/images/switch-arrows.svg'
const Home = () => {
  return (
    <main>
      <section className='title-container'>
        <h1>Currency Converter</h1>
        <p className='description'>
          Real-time exchange rates for 170 world currencies
        </p>
      </section>
      <form className='form'>
        <input type='number' />
        <img
          className='arrows'
          src={arrows}
          alt='Two green arrows facing opposing directions'
        />
        <input type='number' />
      </form>
    </main>
  )
}

export default Home
