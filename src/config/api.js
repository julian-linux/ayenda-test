
const BASE_URL = 'https://rubytify-ayenda.herokuapp.com/api/v1/'

export default async (url) => {
  try {
    const data = await fetch(`${BASE_URL}${url}`)
    return await data.json()
  } catch (error) {
    console.error('error', error)
  }
}
