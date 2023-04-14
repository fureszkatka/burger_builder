import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.styl"

class Home extends Component {
    render() {
        return (
                <div className = "Home_container">
                    If You'd like to make your own burger please log in, or if you don't have an account you can easily make one by clicking this link --Đ
                    <Link to= "/signup">Signup</Link>
                    <div className ="Home_left-side">
                        <div className="Home_body">
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <img style={{width:20,height:20}} src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"></img>
                            <br/>
                            <br></br>
                            
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            <img style={{width:20,height:20}} src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"></img>
                            <br></br>
                            <br/>
                            Where can I get some?
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. 
                            paragraphs word bytes lists Start with 'Lorem ipsum dolor sit amet...' 
                            <img style={{width:20,height:20}} src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"></img>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Home;