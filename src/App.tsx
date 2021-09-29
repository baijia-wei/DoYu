
import *as React from 'react'
import { HashRouter,Redirect,Route, Switch } from "react-router-dom";
import index from './pages/home/index';
import "./pages/styles/App.scss"
import 'antd-mobile/dist/antd-mobile.css';
import "./pages/styles/App.scss"
const App: React.FunctionComponent = () => {
    return (<div className="App">
        <HashRouter>
            <Switch>
                <Route path="/home" component={index}></Route>
                <Route exact path="/"><Redirect to="/home"></Redirect></Route>  
            </Switch>
        </HashRouter>
    </div>)
}
export default App;