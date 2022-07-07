const apiKey = process.env.REACT_APP_FIXER_API_KEY

export async function fetchConversion(baseCurrency, convertCurrency, amount) {
  const root = 'https://fixer-fixer-currency-v1.p.rapidapi.com'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
    },
  }
  return fetch(
    `${root}/convert?from=${baseCurrency}&to=${convertCurrency}&amount=${amount}`,
    options
  )
    .then((res) => res.json())
    .then((data) => console.log('data', data))
    .catch((err) => console.log(err))
}
