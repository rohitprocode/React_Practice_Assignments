import React from 'react'
import './PlayButton.css'

function PlayButton({children,onOneTapbtn,onTwoTapbtn}) {
    let playing = true;
    function handleClick(e){
    e.stopPropagation()    
    if(playing) onOneTapbtn() 
    else onTwoTapbtn()

    playing =! playing
    }
  return (
      <button onClick={handleClick}>{children}{playing ? '>' : '||'}</button>
  )
}

export default PlayButton
