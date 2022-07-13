const Error = ({ error }) => {
  const styles = {
    color: '#F44336',
  }

  return (
    <>
      <p style={styles}>{error}</p>
    </>
  )
}

export default Error
