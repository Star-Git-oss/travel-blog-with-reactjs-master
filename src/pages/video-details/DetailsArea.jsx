import React from 'react';

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

export default function VideoDetails({ videoDetails }) {

  return (
    <div className="place-details-box">
      <iframe src={ videoDetails.link } className='video mb-3' title='vidoe' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h3 className='mb-1 text-red'>{ videoDetails.name }</h3>
      <p className="text-ash mb-3">
        <FaMapMarkerAlt className='text-orange me-1' /> { videoDetails.location }
      </p>
      <p>
        { videoDetails.description }
      </p>
    </div>
  )
}
