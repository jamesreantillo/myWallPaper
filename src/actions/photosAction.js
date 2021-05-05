import { photosData } from '../api';

//ACTION CREATOR

export const loadPhotos = () => async (dispatch) => {
  const pictureData = await photosData();
  dispatch({
    type: 'FETCH_PHOTOS',
    payload: {
      photos: pictureData.photos,
    },
  });
};
