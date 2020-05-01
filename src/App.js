import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import {Switch, Route, withRouter} from "react-router-dom";
import routes from "./routes";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import dogDetail from "./containers/dogDetail";

class App extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div className="App">
                <Header />
                <Switch>
{/*                     <Route path="/" exact component={Homepage} />
                    <Route path='/hakkinda' exact component={() => <div>Hakkimizda Componenti</div>} />
                    <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
                    <Route path="/detail/:kopekId" exact component={dogDetail}></Route>
                    <Route component={() => <div><h1>404 sayfa bulununamadi</h1></div>} /> */}
                    {
                    routes.map((route) => {
                    return <Route key={route.path} {...route}/>
                    
                    })
                    }
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
