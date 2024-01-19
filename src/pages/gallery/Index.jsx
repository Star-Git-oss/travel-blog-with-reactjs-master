import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

// responsive masonry
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

// components
import PageHeader from "../../layout/PageHeader"

export default function Index( {gallery} ) {

  // page title
  useEffect(() => {
    document.title='Gallery | Byduo';
  });

  return (
    <>
    <PageHeader />

    {/* gallery photos start */}
    <section className="gallery-photos-area py-3">
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry>
            {gallery && gallery.map((galleryItem) => (
              <div className="img-item position-relative mb-3 px-2" key={galleryItem.id}>
                <img src={ galleryItem.img } alt="" className="img-fluid" />
                <small className="place-name position-absolute bg-white text-orange">{ galleryItem.location }</small>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </section>
    {/* gallery photos end */}
    </>
  )
}
