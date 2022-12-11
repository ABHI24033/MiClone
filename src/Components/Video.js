import React from 'react';
import VideoCard from './VideoCard';
import "../css/Videocard.css"
function Video({video}) {
  return (
    <div className='Video'>
      {video.map((item,index)=>(
        <VideoCard key={index} name={item.name} image={item.image} index={index}/>
      ))}
    </div>
  );
}

export default Video;
