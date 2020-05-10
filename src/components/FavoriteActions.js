import React from 'react';
import {Button} from "reactstrap";
import {connect} from "react-redux";

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id)?
                <Button disabled={props.toogleFavorites === props.id} color="danger" onClick={props.toggle(props.id)}>
                    Favorilerden Cikar
                </Button>
                :<Button disabled={props.toogleFavorites === props.id} color="primary" onClick={props.toggle(props.id)}>
                    Favoriye Ekle
                </Button>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        toogleFavorites: state.favoritesReducer.toogleFavorites,
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps)(FavoriteActions);