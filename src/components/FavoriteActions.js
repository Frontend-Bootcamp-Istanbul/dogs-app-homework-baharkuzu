import React from 'react';
import {Button} from "reactstrap";
import classnames from "classnames";
import "./FavoriteActions.css";

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id) ?
                <Button color="danger" onClick={() => {props.toggle(props.id)}}
                className={classnames({
                    "favorite-disable": true,
                    "disabled": props.dogChanges,
                    "enabled": !props.dogChanges
                })}>Favorilerden Cikar</Button>
                :<Button color="primary" onClick={() => {props.toggle(props.id)}}
                className={classnames({
                    "favorite-disable": true,
                    "disabled": props.dogChanges,
                    "enabled": !props.dogChanges
                })}>Favoriye Ekle</Button>
            }
        </div>
    );
};

export default FavoriteActions;