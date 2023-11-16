import React from 'react'
import './PlayButton.css'

function PlayButton({name,message}) {
    function handleClick(){
        alert(message)
    }
  return (
      <button onClick={handleClick}>{name}</button>
  )
}

export default PlayButton
