import React from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'
import videoData from './data/data'

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
      
    </div>
  )
}

export default App
