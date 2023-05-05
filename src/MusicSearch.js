import { useState } from 'react';

const MusicSearch = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    props.handleMusicDetails(formData)
  }

  return ( 
    <>
    <form onSubmit={handleSubmit}>
                <input 
                  name="query" 
                  type="text"  
                  autoComplete="off"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Search for lyrics"
                />
                <button type="submit">Search</button>
              </form>
    </>
   )
}
 
export default MusicSearch;