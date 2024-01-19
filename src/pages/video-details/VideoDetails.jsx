import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Col, Container, Row} from 'react-bootstrap';

// components
import DetailsArea from './DetailsArea';
import VideoRightContent from './VideoRightContent';
import RelatedVideos from './RelatedVideos';

export default function VideoDetails({ videos, gallery }) {

  // state
  const [videoDetails, setVideoDetails] = useState({});

  // get id
  const params = useParams();

  useEffect(() => {
    videos.map((video) => {
      if( video.id === params.id ) {
        return ( setVideoDetails(video) );
      }
      else return '';
    });
  }, [params, videos]);

  return (
    <>
      {/* dynamic page title */}
      <p className="d-none">{document.title=`${videoDetails.name} | Byduo`}</p>

      {/* page header */}
      <section className='page-header-area'>
        <Container fluid className='px-0'>
          <div className="img-wrapper position-relative">
            <img src={videoDetails.img} alt="page header" />
            <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
              <h2 className='video-details-page-header text-white text-center pt-5 w-50'>{ videoDetails.name }</h2>
            </div>
          </div>
        </Container>
      </section>
      
      {/* place details start */}
      <section className="place-details-area pt-40 pb-40">
        <Container>
          <Row>
            {/* left details */}
            <Col md={8}>
              <DetailsArea videoDetails={videoDetails} />
            </Col>
            {/* right others */}
            <Col md={4}>
              <VideoRightContent gallery={gallery} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* place details end */}

      <RelatedVideos videos={videos} />
    </>
  )
}
