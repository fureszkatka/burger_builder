import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.styl"

export const Home = () => {
    return (
            <div className = "Home_container">
                If You'd like to make your own burger please log in, or if you don't have an account you can easily make one by clicking this link --Đ
                <Link to= "/signup">Signup</Link>
                <div className ="Home_left-side">
                    <div className="Home_body">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <img style={{width:20,height:20}} src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"></img>
                    </div>
                </div>
            </div>
    );
}
