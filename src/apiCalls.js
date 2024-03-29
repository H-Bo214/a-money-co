export async function fetchConversion(formData) {
  const { from, to, amount } = formData
  const root = 'https://fixer-fixer-currency-v1.p.rapidapi.com'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_FIXER,
      'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
    },
  }
  return fetch(
    `${root}/convert?from=${from}&to=${to}&amount=${amount}`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
