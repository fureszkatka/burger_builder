import React, { Component } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../Auth';
import { signout } from '../../Requests/auth';
import "./Menu.styl"

export class Menu extends Component{
    
    signoutUser = () => {
        signout()
    }

    render() {
        const isActive = (path) => {
            if (this.props.location.pathname === path) return { color: "rgb(0, 0, 0)", textShadow: "2px 2px 5px rgba(255, 255, 0, 0.568)" }
            else return { color: "white" }
        }

        return (
            <div className="Menu_content">
                <div className="Menu_items">
                    <Link
                        style={isActive("/")}
                        className="Menu_home-link"
                        to="/">KateBurger
                    </Link>
                    
                    {isAuthenticated() && (
                        <Link
                            style={isActive("/makeburger")}
                            className="Menu_makeBurger-link"
                            to="/makeburger">Order
                        </Link>
                    )}
                    
                    {!isAuthenticated() && (
                        <div className="Menu_login-signup">
                            <Link
                                style={isActive("/login")}
                                className='Menu_login-link'
                                to="/login">login
                            </Link>
                            <Link
                                style={isActive("/signup")}
                                className='Menu_signup-link'
                                to="/signup">Signup
                            </Link>
                        </div>
                    )}
                </div>
                {isAuthenticated() && (
                    <button
                        className='Menu_signout-link'
                        onClick={() => signout(() => this.props.navigate("/"))}>
                        Signout
                    </button>
                )}
                {isAuthenticated() && (
                    <Link
                        className="Menu_profile-link"
                        to={`/user/${isAuthenticated().user.id}`}>My burgers
                    </Link>
                )}
            </div>
        );
    }
}

const MenuWithLocation =(props)=>{
    const location = useLocation()
    const navigate = useNavigate()

    return <Menu location={location} navigate={navigate} {...props}/>
}

export default MenuWithLocation