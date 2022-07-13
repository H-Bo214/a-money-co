const Error = ({ error }) => {
  const styles = {
    color: '#fff',
  }

  return (
    <>
      <p style={styles}>{error}</p>
    </>
  )
}

export default Error
