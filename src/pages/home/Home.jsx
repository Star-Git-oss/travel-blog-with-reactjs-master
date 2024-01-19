import React, {useEffect} from 'react';

// components
import BannerSlider from './BannerSlider';
import PopularDestination from './PopularDestination';
import TourGallery from './TourGallery';
import PopularVideos from './PopularVideos';

export default function Home({ placeLoding, places, videoLoding, videos, galleryLoding, gallery }) {

  // page title
  useEffect(() => {
    document.title='Home | Byduo';
  }, []);

  return (
    <>
      <BannerSlider />
      <PopularDestination places={places} placeLoding={placeLoding} />
      <TourGallery gallery={gallery} galleryLoding={galleryLoding} />
      <PopularVideos videos={videos} videoLoding={videoLoding}  />
    </>
  )
}
