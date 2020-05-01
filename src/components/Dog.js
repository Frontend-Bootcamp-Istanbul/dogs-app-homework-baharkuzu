import React from 'react';
import FavoriteActions from "./FavoriteActions";
import { Link } from 'react-router-dom';
import dogDetail from "../containers/dogDetail";

const Dog = ({id, name, toggle, getStatus, dogChanges}) => {
    return <li key={id} style={{
        margin: "15px"
    }}>
    <span style={{
        display: "inline-block",
        marginRight: "15px"
    }}>

    <Link to={`/detail/${id}`}>{name}</Link>

    </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} dogChanges={dogChanges}/>
    </li>
};

export default Dog;