import React from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'
import videoData from './data/data'
import PlayButton from './Components/PlayButton'

function App() {
 
  return (
    <div className='App'>
      {
        videoData.map(video=><VideoGallery
          id={video.id}
          title= {video.title}
          channel= {video.channel}
          views= {video.views}
          time= {video.time}
          verified= {video.verified}
          key={video.id}
        ></VideoGallery>)
      }
      <div style={{clear:'both'}}>
      <PlayButton message={'Play Button Clicked'} onTapbtn={()=>console.log("Hii Play Btn")} >Play Button</PlayButton>
      <PlayButton message={'Pause Button Clicked'} onTapbtn={()=>alert("Hii Pause Btn")} >Pause Button</PlayButton>
     
      </div>
    </div>
  )
}

export default App
