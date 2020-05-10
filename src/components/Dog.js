import React from 'react';
import FavoriteActions from "./FavoriteActions";
import { Link } from 'react-router-dom';

const Dog = ({id, name, getStatus, toggle}) => {
    return <li key={id} style={{
        margin: "15px" 
    }}>
    <span style={{
        display: "inline-block",
        marginRight: "15px"
    }}>

    <Link to={`/detail/${id}`}>{name}</Link>
 
    </span>
    
        <FavoriteActions id={id} toggle={toggle} getStatus={getStatus}/>
    </li>
};

export default Dog;