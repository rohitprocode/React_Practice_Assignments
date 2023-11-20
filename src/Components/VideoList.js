import React from 'react'
import PlayButton from './PlayButton'
import VideoGallery from './VideoGallery'

function VideoList({NewVideos}) {
  return (
    <>
    {
        NewVideos.map(video => <VideoGallery
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          key={video.id}
        >
          <PlayButton
            onOneTapbtn={() => console.log("Playing..", video.title)}
            onTwoTapbtn={() => console.log("Paused..", video.title)} >{video.title}</PlayButton>
        </VideoGallery>)
      }
      </>
  )
}

export default VideoList
