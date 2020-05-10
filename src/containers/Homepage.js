import React from 'react';
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import {connect} from "react-redux";
import {getFavorites,addFavorites,removeFavorites, toggleChange} from "../redux/action";

class Homepage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getFavorites()
    }

    toggle = (dogId)=>{
        this.props.toggleChange(dogId)        
        const foundDog = this.props.favorites.find((favorite) => favorite.dogId === dogId)
        if(foundDog){
            removeFavorites(foundDog.id, dogId)
            this.props.toggleChange("")
        }else{
            addFavorites(dogId)
            this.props.toggleChange("")
        }
    }

    getStatus= (dogId) =>{
        const foundDog = this.props.favorites.find((favorite) => favorite.dogId === dogId); 
        return foundDog;
    };

    render(){
        if(this.props.loadingFavorites){       
            return <div>
                <h1>Sayfa Yukleniyor.....</h1>
            </div>
        }
        return (
            <div>
                <ul>
                    {
                        dogs.map((dog) => {
                            //return <Dog key={dog.id} id={dog.id} {...dog}/>
                            return <Dog key={dog.id} toggle={this.toggle} id={dog.id} getStatus={this.getStatus} {...dog}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        loadingFavorites: state.favoritesReducer.loadingFavorites,
        toogleFavorites: state.favoritesReducer.toogleFavorites,
        favorites: state.favoritesReducer.favorites
    }
}

const mapDispatchToProps = {
    addFavorites,
    removeFavorites,
    toggleChange,
    getFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

