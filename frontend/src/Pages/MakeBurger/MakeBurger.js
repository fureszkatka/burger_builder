import React, { Component, useState } from 'react';
import "./MakeBurger.styl"
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../../ingredients-store'



const MakeBurger = () => {

    const Ingredients = useSelector((state) => state.ingredients.ingredients)
    const dispatch = useDispatch()


    const ingredient = (ing) =>{
        console.log(ing)
        if(ing === "cucumber"){
            return( 
                <div className='MakeBurger_cucumber-container'>
                    <div className='MakeBurger_cucumber'>
                        <p className='MakeBurger_ing-text'>cucumber</p>
                    </div>
                    <div className='MakeBurger_cucumber'>
                        <p className='MakeBurger_ing-text'>cucumber</p>
                    </div>
                </div>
            )
        }
        if(ing === "tomato"){
            return(
                <div className='MakeBurger_tomato-container'>
                    <div className='MakeBurger_tomato'>
                        <p className='MakeBurger_ing-text'>tomato</p>
                    </div>
                    <div className='MakeBurger_tomato'>
                        <p className='MakeBurger_ing-text'>tomato</p>
                    </div>
                </div>
            )
        }
        if(ing === "cheese"){
            return( 
                <div className='MakeBurger_cheese'>
                    <p className='MakeBurger_ing-text'>cheese</p>
                </div>
            )
        }

    } 

    return (
        <div className="MakeBurger_container">
            <div className="MakeBurger_background">
            </div>
            
            <div className="MakeBurger_forms">
                <div className="MakeBurger_left">
                    <p className="MakeBurger_instruction" style={{marginTop:0, width: "100%"}}>Please select your burger ingredients, by clicking the plus buttons next to the ingredient names</p>
                        <div>
                            cucumber
                            <button onClick={() =>dispatch(add("cucumber"))}>+</button>
                        </div>
                        <div>
                            tomato
                            <button onClick={() =>dispatch(add("tomato"))}>+</button>
                        </div>
                        <div>
                            cheese
                            <button onClick={() =>dispatch(add("cheese"))}>+</button>
                        </div>
                </div>

                <div className="MakeBurger_right">
                    <p style={{marginTop:0}}>Here is your burger! :)</p>
                    <div className='MakeBurger_bun-top'></div>
                    <form>
                    {Ingredients.map((piece,index) =>(
                        <div className='MakeBurge_mapIngredients' key = {index}>
                            <div className='MakeBurger_ing-button'>
                                <div className='MakeBurger_ing-container'>{ingredient(piece.payload)}</div>
                                <button 
                                    className='MakeBurger_remove-butt' 
                                    onClick={() =>dispatch(remove(index))}>
                                    remove
                                </button>
                            </div>
                        </div> 
                    ))}
                    </form>
                    <div className='MakeBurger_bun-bottom'></div>
                </div>

            </div>
        </div>
    );
}



export default MakeBurger;