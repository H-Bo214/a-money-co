import '../Error/Error.css'
import alert from '../../assets/images/alert.svg'

const Error = ({ error }) => {
  return (
    <>
      <img
        className='alert-icon'
        src={alert}
        alt='red dot with white exclamation point'
      />
      <p className='error-message'>{error}</p>
    </>
  )
}

export default Error
