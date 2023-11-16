import React from 'react'
import './PlayButton.css'

function PlayButton({message,children,onTapbtn}) {
    function handleClick(){
        onTapbtn()
    }
  return (
      <button onClick={handleClick}>{children}</button>
  )
}

export default PlayButton
