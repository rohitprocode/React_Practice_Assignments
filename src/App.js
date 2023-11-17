import React from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'
import videoData from './data/data'
import PlayButton from './Components/PlayButton'

function App() {
 
  return (
    <div className='App' onClick={()=>console.log("App.js Clicked")}>
      {
        videoData.map(video=><VideoGallery
          id={video.id}
          title= {video.title}
          channel= {video.channel}
          views= {video.views}
          time= {video.time}
          verified= {video.verified}
          key={video.id}
        >
          <PlayButton 
      onOneTapbtn={()=>console.log("Playing..",video.title)} 
      onTwoTapbtn={()=>console.log("Paused..",video.title)} >{video.title}</PlayButton>
        </VideoGallery>)
      }
      <div style={{clear:'both'}}>

      {/* <PlayButton message={'Pause Button Clicked'} onTapbtn={()=>alert("Hii Pause Btn")} >Pause Button</PlayButton> */}
     
      </div>
    </div>
  )
}

export default App
