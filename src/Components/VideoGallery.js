import React from 'react'
import './VideoGallery.css'

function VideoGallery({id,title,channel,views,time,verified}) {
  return (
    <div className='container'>
    <div className="image"><img src={`https://picsum.photos/id/${id}/180/100`} alt=""/></div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'}</div>
      <div className="views">{views} views <span>.</span> {time}</div>
    </div>
  )
}

export default VideoGallery
