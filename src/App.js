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
      <PlayButton name={'Play Button'} message={'Play Button Clicked'}/>
      <PlayButton name={'Pause Button'} message={'Pause Button Clicked'}/>
     
      </div>
    </div>
  )
}

export default App
