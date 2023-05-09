import MusicSearch from './MusicSearch';
import { musicSearch } from './services/musicService';
import { useState } from 'react';

const Homepage = (props) => {
  const[music, setMusic] = useState([])

  const handleMusicSearch = async FormData => {
    const musicResults = await musicSearch(FormData)
    setMusic(musicResults)
  }

  return ( 
    <>
    <MusicSearch handleMusicSearch = {handleMusicSearch}/>
    {/* {music.map(music =>
      <>
      <div>{music}</div>
      </>)} */}
    </>
   )
}
 
export default Homepage;