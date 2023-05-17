const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}`

export async function musicSearch(formData){
  console.log(formData.query)
  const res = await fetch(`${BASE_URL}/api/music?q=${formData.query}`)
  const data = await res.json()
  console.log(data)
  const resID = await fetch(`${BASE_URL}/api/id?id=${data.id}`)
  const lyricData = await resID.json()
  return [lyricData, data]
}
