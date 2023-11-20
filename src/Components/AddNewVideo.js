import React, { useState } from 'react'
import './AddNewVideo.css'

 const makeNewVideoData = {
    channel:'Coder Dost',
    time:'3 weeks ago',
    verified:true,
    title:'',
    views:''
}

function AddNewVideo({addingNewVideo}) {
  const[makeNewVideo,SetMakeNewVideo] = useState(makeNewVideoData)

  function handleSubmit(e){
    e.preventDefault();
    addingNewVideo(makeNewVideo)
    SetMakeNewVideo(makeNewVideoData)
    // console.log(makeNewVideo)
  }

  function handleInput(e){
    // console.log(e.target.name , e.target.value)
    SetMakeNewVideo({...makeNewVideo,
      [e.target.name] : e.target.value
    })
    // console.log(makeNewVideo)
  }

  

  return (
    <form>
      <input type="text" name="title" onChange={handleInput} onClick={(e)=>e.stopPropagation()} placeholder='Title' value={makeNewVideo.title} />
      <input type="text" name="views" onChange={handleInput} onClick={(e)=>e.stopPropagation()} placeholder='Views' value={makeNewVideo.views}/>
      <button onClick={handleSubmit}>Click</button>
    </form>
  )
}

export default AddNewVideo

// setNewVideos([...NewVideos,
//   {
//     id:NewVideos.length+1,
//     title:'Rohit',
//     channel:'Realfunrr',
//     views:'100B',
//     time:'5 months ago',
//     verified:true,
    
//   }
// ])
