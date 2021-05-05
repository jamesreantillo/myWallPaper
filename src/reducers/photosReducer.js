const initialState = {
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS':
      return { ...state, photos: action.payload.photos };
    default:
      return { ...state };
  }
};

//ACTION

export default photosReducer;
