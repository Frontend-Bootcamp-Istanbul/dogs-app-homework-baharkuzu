import {LOAD_FAVORITES_TRUE, LOAD_FAVORITES_FALSE, GET_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES, TOGGLE} from "./types";

const initialState = {
    favorites: [],
    loadingFavorites: false,
    toogleFavorites: ""
}

  export const favoritesReducer = (state= initialState, action) => {
      switch (action.type) {
        case LOAD_FAVORITES_TRUE:
            return {...state, loadingFavorites: true}
        case LOAD_FAVORITES_FALSE:
            return {...state, loadingFavorites:false}
        case GET_FAVORITES:
            return {...state, favorites: action.payload, loadingFavorites: false}
        case TOGGLE:
            return {...state, toogleFavorites: action.payload}
        case ADD_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}
        case REMOVE_FAVORITES:
            return {...state, favorites: state.favorites.filter(dog => {
                return dog.dogId !== action.payload
            })}
        default:
            return state
  }
}
