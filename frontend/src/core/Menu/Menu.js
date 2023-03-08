import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="Menu_content">
                <div className ="Menu_left">
                    <div className = "Menu_profile">
                        <Link to ="/">Home</Link>
                    </div>
                    <div className = "Menu_makeBurger">
                        <Link to = "/makeburger">Let's Make a burger!</Link>
                    </div>
                </div>
                <div className = "Menu_profile">
                    <Link to = "/profile">Profile</Link>     
                </div>
            </div>
        );
    }
}

export default Menu;