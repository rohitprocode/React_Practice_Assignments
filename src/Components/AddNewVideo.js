import React, { useState } from 'react'
import './AddNewVideo.css'

function AddNewVideo() {
  const[makeNewVideo,SetMakeNewVideo] = useState({
    channel:'Coder Dost',
    time:'3 weeks ago',
    verified:true,
  })

  function handleInput(e){
    console.log(e.target.name , e.target.value)
    SetMakeNewVideo({...makeNewVideo,
      [e.target.name] : e.target.value
    })
    console.log(makeNewVideo)
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <form>
      <input type="text" name="title" onChange={handleInput} onClick={(e)=>e.stopPropagation()} placeholder='Title' />
      <input type="text" name="views" onChange={handleInput} onClick={(e)=>e.stopPropagation()} placeholder='Views' />
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
