import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const MusicSearch = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    props.handleMusicSearch(formData)
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
                <button type="submit">      <FontAwesomeIcon className="fab fa-react fa-2x" style={{color: 'white'}} icon={faMagnifyingGlass} /></button>
              </form>
    </>
   )
}
 
export default MusicSearch;