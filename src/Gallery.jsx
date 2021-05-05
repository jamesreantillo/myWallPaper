import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos } from './actions/photosAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Gallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  const images = useSelector((state) => state.photos.photos);
  console.log('images', images);
  return (
    <Main>
      <div className='gallery'>
        {images.map((image) => (
          <div className='gallery-img'>
            <div className='gallery-info'>
              <p>{image.photographer}</p>
              <a href={image.src.original} download>
                Download hi
              </a>
            </div>
            <img src={image.src.large} alt={image.photographer_url}></img>
          </div>
        ))}
      </div>
    </Main>
  );
};

const Main = styled(motion.div)`
  .gallery-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    padding: 0.5rem 0rem;
  }
  .gallery-info a {
    color: gray;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 2rem 0rem;
    width: 80%;
    margin: auto;
    row-gap: 5rem;
    column-gap: 3rem;
  }

  .gallery-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Gallery;
