import React, { useEffect, useState } from 'react'
import './App.css'
import videoData from './data/data'
import AddNewVideo from './Components/AddNewVideo'
import VideoList from './Components/VideoList'


function App() {

  const [NewVideos, setNewVideos] = useState(videoData)
  const [editableVideo,setEditableVideo] = useState(null)

  function addingNewVideo(makeNewVideo){
    setNewVideos([...NewVideos,{ ...makeNewVideo, id : NewVideos.length+1 }])}

  function deleteVideo(id){
    setNewVideos(NewVideos.filter(video=>video.id!=id))
  }

  function editVideo(id){
    setEditableVideo(NewVideos.find(video=>video.id==id))
  }

  function updateVideo(updatedVideo){
    //
  }

  return (
    <div className='App' onClick={() => console.log("App.js Clicked")}>

      <AddNewVideo addingNewVideo={addingNewVideo} updateVideo={updateVideo} editableVideo={editableVideo} />

      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} NewVideos={NewVideos}/>

      <div style={{ clear: 'both' }}>
      </div>
    </div>
  )
}

export default App
