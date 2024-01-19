import React from 'react';

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PlaceDetails({ placeDetails }) {

  return (
    <div className="place-details-box">
      <h3 className='mb-1 text-red'>{ placeDetails.name }</h3>
      <p className="text-ash mb-3">
        <FaMapMarkerAlt className='text-orange me-1' /> { placeDetails.location }
      </p>
      <p>
          { placeDetails.description }
      </p>
    </div>
  )
}
