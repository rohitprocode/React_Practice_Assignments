import React, { useEffect, useState } from 'react'
import './AddNewVideo.css'

 const makeNewVideoData = {
    channel:'Coder Dost',
    time:'3 weeks ago',
    verified:true,
    title:'',
    views:''
}

function AddNewVideo({addingNewVideo,editableVideo}) {
  const[makeNewVideo,SetMakeNewVideo] = useState(makeNewVideoData)

  function handleSubmit(e){
    e.preventDefault();
    addingNewVideo(makeNewVideo)
    SetMakeNewVideo(makeNewVideoData)
  }

  function handleInput(e){
    SetMakeNewVideo({...makeNewVideo,
      [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    if(editableVideo){
      SetMakeNewVideo(editableVideo)
    }
    },[SetMakeNewVideo])
   
  return (
    <form>
      <input 
        type="text" 
        name="title" 
        onChange={handleInput} 
        onClick={(e)=>e.stopPropagation()} 
        placeholder='Title' 
        value={makeNewVideo.title}  
      />
      <input 
        type="text" 
        name="views" 
        onChange={handleInput} 
        onClick={(e)=>e.stopPropagation()} 
        placeholder='Views' 
        value={makeNewVideo.views}
      />
      <button 
        onClick={handleSubmit}
        >
        {editableVideo ? 'Edit' : 'Add' } Video
        </button>
    </form>
  )
}


export default AddNewVideo
