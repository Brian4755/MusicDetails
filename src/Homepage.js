import MusicSearch from './MusicSearch';
import { musicSearch } from './services/musicService';
import { useState, useEffect, useRef } from 'react';
import './Home.css'

const Homepage = () => {
  const[music, setMusic] = useState([])

  const scrollToRef = useRef();

  useEffect(() => {
    music.lyrics && scrollToRef.current.scrollIntoView({ behavior: "smooth" })
  });

  const handleMusicSearch = async FormData => {
    const musicResults = await musicSearch(FormData)
    setMusic(musicResults)
    console.log(musicResults.lyrics.lyrics.body.html)
  }


  return ( 
    <>
      <h1>Type the Song Name for Lyrics</h1>
      <div className='musicSearch' >
        <MusicSearch handleMusicSearch = {handleMusicSearch}/>
        <div ref={scrollToRef} className='musicLyrics' dangerouslySetInnerHTML={{__html: music.lyrics?.lyrics.body.html}} />
      </div>
    </>
   )
}
 
export default Homepage;