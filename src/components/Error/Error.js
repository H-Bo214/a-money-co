import '../Error/Error.css'

const Error = ({ error }) => {
  return (
    <>
      <p className='error-message'>{error}</p>
    </>
  )
}

export default Error
