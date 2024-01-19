import React from 'react';

// slick slider 
import Slider from "react-slick";
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";

export default function VideoDetails({ gallery }) {

   // slick slider
   const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="travel-tips-box p-4 mb-4 mb-md-5">
        <h4 className='text-center text-white'>Travel Tips</h4>
        <ul className='ms-3'>
          <li>Do your research</li>
          <li>Don’t draw attention</li>
          <li>Make copies of important documents</li>
          <li>Keep your friends and family updated</li>
          <li>Be wary of public Wi-Fi</li>
          <li>Safeguard your hotel room</li>
          <li>Be aware of your surroundings</li>
        </ul>
      </div>
      <div className="img-slider">
        <h4 className="text-center mb-3">Destination Images</h4>
        <Slider {...slickSettings}>
          {gallery && gallery.map((galleryItem) => (
            <div className="slider-item" key={ galleryItem.id }>
              <img src={ galleryItem.img } alt="slider img" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
