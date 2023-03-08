import React, { Component } from 'react';
import "./MakeBurger.styl"

class MakeBurger extends Component {

    styte={
        burgers: ""
    }

    render() {
        return (
            <div className="MakeBurger_container">
                <div className="MakeBurger_background">
                </div>
                
                <div className="MakeBurger_forms">
                    <div className="MakeBurger_left">
                        <form className="MakeBurger_left-form">
                            <input></input>
                            <input></input>
                            <input></input>
                            <input></input>
                            <input></input>
                        </form>
                    </div>

                    <div className="MakeBurger_right">
                        <div>-----------------</div>
                        <div>-----------------</div>
                        <div>-----------------</div>
                        <div>-----------------</div>
                        <div>-----------------</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MakeBurger;