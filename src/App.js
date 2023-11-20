import React, { useState } from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'
import videoData from './data/data'
import PlayButton from './Components/PlayButton'
import Counter from './Components/Counter'
import AddNewVideo from './Components/AddNewVideo'
import VideoList from './Components/VideoList'

function App() {

  const [NewVideos, setNewVideos] = useState(videoData)

  function addingNewVideo(makeNewVideo){
    setNewVideos([...NewVideos,
      { ...makeNewVideo, id : NewVideos.length+1 }
    ])
  }

  return (
    <div className='App' onClick={() => console.log("App.js Clicked")}>

      <AddNewVideo addingNewVideo={addingNewVideo}  />
      {/* <button onClick={addNewVideo} >Add New Video</button> */}
      <VideoList NewVideos={NewVideos}/>
      <div style={{ clear: 'both' }}>

        {/* <Counter/> */}
        {/* <PlayButton message={'Pause Button Clicked'} onTapbtn={()=>alert("Hii Pause Btn")} >Pause Button</PlayButton> */}

      </div>
    </div>
  )
}

export default App
