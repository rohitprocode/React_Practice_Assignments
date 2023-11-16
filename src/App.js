import React from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'

function App() {
  let videoData = [{
    id: 1,
    title: "React Tutorial in Hindi",
    channel: 'Coder dost',
    views: '997K',
    time: '3 month ago',
    verified: true
    },
    {
      id:2, 
      title:"Javascript Tutorial in Hindi",
      channel:'Coder dost', 
      views:'540K',
      time:'1 years ago',
      verified : false
    },
    {
      id:3, 
      title:"MongoDB Tutorial in Hindi",
      channel:'Coder dost', 
      views:'875K',
      time:'7 months ago',
      verified : true
    }]

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
        ></VideoGallery>)
      }
      
    </div>
  )
}

export default App
