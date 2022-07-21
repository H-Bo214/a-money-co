const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString()
}

export { formatTime }
