import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { NoPage } from "./Pages/NoPage"
import Menu from "./core/Menu/Menu"
import { SignupNewUser } from './Pages/Signup/Signup'; 
import { MakeBurger } from './Pages/MakeBurger/MakeBurger';
import { LoginUser } from './Pages/Login/Login'
import { store } from "./redux-store"
import { Provider } from "react-redux"
import {UserPage}  from './Pages/UserPage/UserPage';
import "./core/Menu/Menu.styl"
import PrivateRoutes from './Auth/PrivateRoutes';

//Make place for the App component in the index.html
const root = document.getElementById("root")

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                <Menu className="Menu_container"></Menu>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/signup" element={<SignupNewUser />} />
                        <Route path="/user/:userId" element={<PrivateRoutes><UserPage /></PrivateRoutes>} />
                        <Route path="/login" element={<LoginUser/>}/>
                        <Route path="/makeburger" element={<PrivateRoutes><MakeBurger/></PrivateRoutes>}/>
                        <Route path="*" element={<NoPage />}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

//Rendering the component with Redux store
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    root
)