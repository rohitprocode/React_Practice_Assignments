import React from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'

function App() {
  let obj = {
    id:1, 
    title:"React Tutorial in Hindi",
    channel:'Coder dost', 
    views:'540K',
    time:'3 years ago',
    verified : true
  }
  return (
    <>
    <div>
    <VideoGallery {...obj}/>
    <VideoGallery id={2} title={"Javascript Tutorial in Hindi"} channel={'Coder dost'} views={'980K'} time={'3 years ago'} verified={false}/>
    <VideoGallery id={3} title={"Node-Js Tutorial in Hindi"} channel={'Coder dost'} views={'350K'} time={'3 years ago'} verified={true}/>
    </div>
    </>
  )
}

export default App
