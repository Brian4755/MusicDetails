import MusicSearch from './MusicSearch';
import { musicSearch } from './services/musicService';
import { useState, useEffect, useRef } from 'react';
import './Home.css'

const Homepage = () => {
  const[music, setMusic] = useState([])

  const scrollToRef = useRef();
  useEffect(() => {
    music[1] && scrollToRef.current.scrollIntoView({ behavior: "smooth"
   })
  });

  const handleMusicSearch = async FormData => {
    const musicResults = await musicSearch(FormData)
    setMusic(musicResults)
  }


  return ( 
    <>
      <h1>Type the Song Name with the Artist for Lyrics</h1>
      <img className='edSheeranImage' alt='Ed Sheeran' src='./edSheeranImage.png'/>
      <img className='ladyGagaImage' alt='Lady Gaga' src='./ladyGagaImage.png'/>
      <div className='musicSearch' >
        <MusicSearch handleMusicSearch = {handleMusicSearch}/>
        <div className='ref' ref={scrollToRef}></div>
          <div className='musicData'>
            <h2>{music[1]?.full_title}</h2>
            <div className='musicLyrics' dangerouslySetInnerHTML={{__html: music[0]?.lyrics.lyrics.body.html}} />
        </div>
      </div>
    </>
   )
}
 
export default Homepage;