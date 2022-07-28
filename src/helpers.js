const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString()
}

const formatResult = (result) => {
  return result.toFixed(3)
}

export { formatTime, formatResult }
