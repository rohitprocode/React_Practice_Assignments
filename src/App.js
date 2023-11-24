import React, { useState } from 'react'
import './App.css'
import videoData from './data/data'
import AddNewVideo from './Components/AddNewVideo'
import VideoList from './Components/VideoList'

function App() {

  const [NewVideos, setNewVideos] = useState(videoData)

  function addingNewVideo(makeNewVideo){
    setNewVideos([...NewVideos,
      { ...makeNewVideo, id : NewVideos.length+1 }
    ])
  }

  function deleteVideo(deleteVid){
    console.log(deleteVid)
  }
  return (
    <div className='App' onClick={() => console.log("App.js Clicked")}>

      <AddNewVideo addingNewVideo={addingNewVideo}  />

      <VideoList deleteVideo={deleteVideo} NewVideos={NewVideos}/>
      <div style={{ clear: 'both' }}>
      </div>
    </div>
  )
}

export default App
