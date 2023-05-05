const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/music`

export async function mealSearch(formData){
  const res = await fetch(`${BASE_URL}?search=${formData.query}`)
  const data =  await res.json()
  return data
}