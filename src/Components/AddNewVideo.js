import React from 'react'
import './AddNewVideo.css'

function AddNewVideo() {

  function handleInput(e){
    console.log(e.target.name , e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <form>
      <input type="text" name="title" onChange={handleInput} placeholder='Title' />
      <input type="text" name="views" onChange={handleInput} placeholder='Views' />
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
