import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos } from './actions/photosAction';

const Gallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  return (
    <main>
      <div className='gallery'>
        <div className='gallery-img'>
          <div className='gallery-info'></div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
