import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="Menu_content">
                <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-end"}}><div style={{width:"80%",height:2,backgroundColor:"white"}}></div></div>
                <div className='Menu_right'>
                    <div className ="Menu_left">
                        <div className = "Menu_profile">
                            <Link className="Menu_home-link" to ="/"><img className="Menu_home-image" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"></img>KateBurger</Link>
                        </div>
                        <div>
                            login
                            <Link to= "/signup">Signup</Link>
                        </div>
                        <div className = "Menu_makeBurger">
                            <Link className="Menu_home-link" to = "/makeburger">Order</Link>
                        </div>
                    </div>
                    <div className = "Menu_profile">
                        <Link className="Menu_home-link" to = "/profile">Profile</Link>     
                    </div>
                </div>
                <div style={{width:"80%",height:2,backgroundColor:"white"}}></div>
            </div>
        );
    }
}

export default Menu;