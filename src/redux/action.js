import {LOAD_FAVORITES_TRUE, LOAD_FAVORITES_FALSE, GET_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES, TOGGLE} from "./types";
import axios from "axios";

const apiHost = "https://5ea9e54fa873660016720f94.mockapi.io";

export const getFavorites = () => {
    return (dispatch) => {
        
        dispatch({
            type: LOAD_FAVORITES_TRUE
        })
        axios.get(`${apiHost}/favorites`).then((result) => {
            dispatch({
                type: GET_FAVORITES,
                payload: result.data
            })
        }).catch((err) => {
            dispatch({
                type: LOAD_FAVORITES_FALSE
            })
        })
    }
}

export const addFavorites = (dogId) => {
    return (dispatch) => {
        axios.post(`${apiHost}/favorites`, {dogId}).then((result) => {
            const eklenenFavori = result.data;
            dispatch({
                type: ADD_FAVORITES,
                payload: eklenenFavori
            })
        }).catch((err) => {
            console.log("add fav err", err);
        })
    }
}

export const removeFavorites = (foundDog, dogId) => {
    return (dispatch) => {
        axios.delete(`${apiHost}/favorites/${foundDog}`).then((result) => {
            dispatch({
                type: REMOVE_FAVORITES,
                payload: dogId
            })
        }).catch((err) => {
            console.log("remove err", err);
        });        
    }
}

export const toggleChange = (dogId) => {
    return{
        type: TOGGLE,
        payload: dogId
    }
}

