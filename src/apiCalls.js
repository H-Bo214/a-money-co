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
    .catch((err) => console.log(err))
}

export const fakeAPICall = () => {
  return {
    success: true,
    query: {
      from: 'USD',
      to: 'AED',
      amount: 1,
    },
    info: {
      timestamp: 1657232256,
      rate: 3.6731,
    },
    date: '2022-07-07',
    result: 3.6731,
  }
}
