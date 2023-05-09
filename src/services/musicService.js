const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/music`

export async function musicSearch(formData){
  console.log(formData.query)
  const res = await fetch(`${BASE_URL}?q=${formData.query}`)
  const data = await res.json()
  return console.log(data.hits[0].result.id)
}