const formatDate = (str) => {
  const formatted = str.split('-').reverse().join('-')
  return formatted
}

export { formatDate }
