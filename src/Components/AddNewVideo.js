import React from 'react'
import './AddNewVideo.css'

function AddNewVideo() {

  function handleClick(e){
    e.preventDefault();
    console.log(e)
  }

  return (
    <form>
      <input type="text" name="" id="" placeholder='Title' />
      <input type="text" name="" id="" placeholder='Views' />
      <button onClick={handleClick}>Click</button>
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
