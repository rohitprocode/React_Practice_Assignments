import React, { useState } from 'react'
import './App.css'
import VideoGallery from './Components/VideoGallery'
import videoData from './data/data'
import PlayButton from './Components/PlayButton'
import Counter from './Components/Counter'


function App() {

  const [NewVideos,setNewVideos] = useState(videoData)
 
  function addNewVideo(){
    setNewVideos([...NewVideos,
      {
        id:NewVideos.length+1,
        title:'Rohit',
        channel:'Realfunrr',
        views:'100B',
        time:'5 months ago',
        verified:true,
        
      }
    ])
  }

  return (
    <div className='App' onClick={()=>console.log("App.js Clicked")}>

      <button onClick={addNewVideo} >Add New Video</button>
      {
        NewVideos.map(video=><VideoGallery
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
      <Counter/>
      {/* <PlayButton message={'Pause Button Clicked'} onTapbtn={()=>alert("Hii Pause Btn")} >Pause Button</PlayButton> */}
     
      </div>
    </div>
  )
}

export default App
