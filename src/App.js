import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase
import { db } from "./firebase/firebase";
import { collection, onSnapshot } from 'firebase/firestore';

// import components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/home/Home';
import Places from './pages/places/Places';
import PlaceDetails from './pages/place-details/Place-details';
import Videos from './pages/videos/Videos';
import VideoDetails from './pages/video-details/VideoDetails';
import Gallery from './pages/gallery/Index';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ComingSoon from './pages/coming-soon/ComingSoon';

function App() {

  // states
  const [places, setPlaces] = useState([]);
  const [videos, setVideos] = useState([]);
  const [gallery, setGallery] = useState([]);
  // states for preloader
  const [placeLoding, setPlaceLoading] = useState(false);
  const [videoLoding, setVideoLoading] = useState(false);
  const [galleryLoding, setGalleryLoading] = useState(false);

  // get data from firebase
  useEffect(() => {
    // get places data from firebase
    setPlaceLoading(true);

    const unsub = onSnapshot(
      collection(db, "places"),
      (snapshot) => {
        let placeList = [];
        snapshot.docs.forEach((doc) => {
          placeList.push({ id: doc.id, ...doc.data() });
        });
        setPlaces(placeList);
        setPlaceLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    // get videos data from firebase
    setVideoLoading(true);

    const unsubVideo = onSnapshot(
      collection(db, "Videos"),
      (snapshot) => {
        let videoList = [];
        snapshot.docs.forEach((doc) => {
          videoList.push({ id: doc.id, ...doc.data() });
        });
        setVideos(videoList);
        setVideoLoading(false);
      }
    );

    // get gallery data from firebase
    setGalleryLoading(true);

    const unsubGallery = onSnapshot(
      collection(db, "gallery"),
      (snapshot) => {
        let galleryList = [];
        snapshot.docs.forEach((doc) => {
          galleryList.push({ id: doc.id, ...doc.data() });
        });
        setGallery(galleryList);
        setGalleryLoading(false);
      }
    );

    return () => {
      unsub();
      unsubVideo();
      unsubGallery();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home places={ places } videos={ videos } gallery={ gallery } 
            placeLoding={placeLoding} videoLoding={videoLoding} galleryLoding={galleryLoding} />} />
          <Route path="/places" element={<Places places={ places } />} />
          <Route path="/place-details/:id" element={<PlaceDetails places={ places } gallery={ gallery } />} />
          <Route path="/videos" element={<Videos videos={ videos } />} />
          <Route path="/video-details/:id" element={<VideoDetails videos={ videos } gallery={ gallery } />} />
          <Route path="/gallery" element={<Gallery gallery={ gallery } />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
