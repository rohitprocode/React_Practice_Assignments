import React, { useState } from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'
import videoData from './data/data'
import PlayButton from './Components/PlayButton'
import Counter from './Components/Counter'
import AddNewVideo from './Components/AddNewVideo'

function App() {

  const [NewVideos, setNewVideos] = useState(videoData)



  return (
    <div className='App' onClick={() => console.log("App.js Clicked")}>

     
      {/* <button onClick={addNewVideo} >Add New Video</button> */}
      {
        NewVideos.map(video => <VideoGallery
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          key={video.id}
        >
          <PlayButton
            onOneTapbtn={() => console.log("Playing..", video.title)}
            onTwoTapbtn={() => console.log("Paused..", video.title)} >{video.title}</PlayButton>
        </VideoGallery>)
      }
      <div style={{ clear: 'both' }}>
      <AddNewVideo />
        {/* <Counter/> */}
        {/* <PlayButton message={'Pause Button Clicked'} onTapbtn={()=>alert("Hii Pause Btn")} >Pause Button</PlayButton> */}

      </div>
    </div>
  )
}

export default App
