import MusicSearch from './MusicSearch';
import { musicSearch } from './services/musicService';
import { useState } from 'react';
import './Home.css'

const Homepage = () => {
  const[music, setMusic] = useState([])

  const handleMusicSearch = async FormData => {
    const musicResults = await musicSearch(FormData)
    setMusic(musicResults)
    console.log(musicResults.lyrics.lyrics.body.html)
  }


  return ( 
    <div className='musicSearch' >
      <MusicSearch handleMusicSearch = {handleMusicSearch}/>
      <div className='musicLyrics' dangerouslySetInnerHTML={{__html: music.lyrics?.lyrics.body.html}} />
    </div>
   )
}
 
export default Homepage;