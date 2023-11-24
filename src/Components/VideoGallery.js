import React from 'react'
import './VideoGallery.css'

function VideoGallery({ id, title, channel, views, time, verified, children,deleteVideo }) {
  return (
    <div className='container'>
      <button className="close" onClick={()=>deleteVideo(id)} >X</button>
      <div className="image"><img src={`https://picsum.photos/id/${id}/310/120`} alt="" /></div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'}</div>
      <div className="views">{views} views <span>.</span> {time}</div>
      <div className="button">
        {children}
      </div>
    </div>
  )
}

export default VideoGallery
