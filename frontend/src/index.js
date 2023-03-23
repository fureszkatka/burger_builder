import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import NoPage from "./Pages/NoPage"
import Menu from "./core/Menu/Menu" 
import MyProfile from './Pages/MyProfile/MyProfile';
import MakeBurger from './Pages/MakeBurger/MakeBurger';
import "./core/Menu/Menu.styl"
import { store } from "./redux-store"
import {Provider} from "react-redux"

const root = document.getElementById("root")


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Menu className="Menu_container"></Menu>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/profile" element={<MyProfile />}/>
                        <Route path="/makeburger" element={<MakeBurger/>}/>
                        <Route path="*" element={<NoPage />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    root
)