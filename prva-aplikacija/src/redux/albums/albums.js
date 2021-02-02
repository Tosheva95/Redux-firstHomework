const albumsReducer = (
  state = {
    albums: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD_ALBUM': {
      return {
        ...state,
        albums: [...state.albums, action.payload]
      }
    }
    default: return state
  }
}

const addAlbum = (name, year, image, artist) => {
  return {
    type: 'ADD_ALBUM',
    payload: { name, year, image, artist }
  }
}

export {
  albumsReducer,
  addAlbum,
}