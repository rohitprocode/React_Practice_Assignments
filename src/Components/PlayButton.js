import React from 'react'
import './PlayButton.css'
import { useState } from 'react'
import PlayBtnImg from '../data/play-button.svg'
import PauseBtnImg from '../data/pause-outline.svg'

function PlayButton({children,onOneTapbtn,onTwoTapbtn}) {
    const [playing,setPlaying] = useState(true)

    function handleClick(e){
    e.stopPropagation()

    if(playing) onOneTapbtn()
    else onTwoTapbtn()    
    setPlaying(!playing)

    }
  return (
      <button onClick={handleClick}>{children}:{playing ? <img src={PlayBtnImg} alt="" /> : <img src={PauseBtnImg} alt="" /> }</button>
  )
}

export default PlayButton
