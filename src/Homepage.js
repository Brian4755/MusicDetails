import MusicSearch from './MusicSearch';
import { musicSearch } from './services/musicService';
import { useState } from 'react';

const Homepage = () => {
  const[music, setMusic] = useState([])

  const handleMusicSearch = async FormData => {
    const musicResults = await musicSearch(FormData)
    setMusic(musicResults)
    console.log(musicResults.lyrics.lyrics.body.html)
  }


  return ( 
    <>
    <MusicSearch handleMusicSearch = {handleMusicSearch}/>
    <td dangerouslySetInnerHTML={{__html: music.lyrics?.lyrics.body.html}} />
    </>
   )
}
 
export default Homepage;