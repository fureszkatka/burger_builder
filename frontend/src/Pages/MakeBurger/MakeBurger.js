import React, { Component, useState } from 'react';
import "./MakeBurger.styl"
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../../stores/ingredients-store'
import {addIngredient} from "../../Requests/burger"



const MakeBurger = () => {

    const Ingredients = useSelector((state) => state.ingredients.ingredients)
    const dispatch = useDispatch()

    

    const upload = () =>{
        let ingredients = Ingredients.map((ing) =>(ing.payload))
        console.log(ingredients)
        addIngredient(ingredients)
        .then(response => {
            console.log(response.data)
        })
    }

    const ingredients = (ing) =>{
        if(ing === "cucumber"){
            return( 
                <div className='MakeBurger_cucumber-container'>
                    <div className='MakeBurger_cucumber'>
                        <p className='MakeBurger_ing-text'></p>
                    </div>
                    <div className='MakeBurger_cucumber'>
                        <p className='MakeBurger_ing-text'></p>
                    </div>
                </div>
            )
        }
        if(ing === "tomato"){
            return(
                <div className='MakeBurger_tomato-container'>
                    <div className='MakeBurger_tomato'>
                        <p className='MakeBurger_ing-text'></p>
                    </div>
                    <div className='MakeBurger_tomato'>
                        <p className='MakeBurger_ing-text'></p>
                    </div>
                </div>
            )
        }
        if(ing === "cheese"){
            return( 
                <div className='MakeBurger_cheese'>
                    <p className='MakeBurger_ing-text'></p>
                </div>
            )
        }

    } 

    return (
        <div className="MakeBurger_container">
            <div className="MakeBurger_background">
            </div>
            
            <div className = "MakeBurger_forms-button">
                <div className="MakeBurger_forms">
                    <div className="MakeBurger_left">
                        <p className="MakeBurger_instruction" style={{marginTop:0, width: "100%"}}>Please select your burger ingredients, by clicking the plus buttons next to the ingredient names</p>
                            <div className="MakeBurger_choosables">
                                cucumber
                                <button style={{backgroundColor:"black", color:"green"}} onClick={() =>dispatch(add("cucumber"))}>+</button>
                            </div>
                            <div className="MakeBurger_choosables">
                                tomato
                                <button style={{backgroundColor:"black", color:"red"}} onClick={() =>dispatch(add("tomato"))}>+</button>
                            </div>
                            <div className="MakeBurger_choosables">
                                cheese
                                <button style={{backgroundColor:"black", color:"yellow"}} onClick={() =>dispatch(add("cheese"))}>+</button>
                            </div>
                    </div>

                    <div className="MakeBurger_right">
                        <p style={{marginTop:0}}>Here is your burger! :)</p>
                        <div className='MakeBurger_bun-top'></div>
                        <form>
                        {Ingredients.map((piece,index) =>(
                            <div className='MakeBurge_mapIngredients' key = {index}>
                                <div className='MakeBurger_ing-button'>
                                    <div className='MakeBurger_ing-container'>
                                        {ingredients(piece.payload)}
                                    </div>
                                    <button 
                                        className='MakeBurger_remove-butt' 
                                        onClick={() =>dispatch(remove(index))}>
                                        remove
                                    </button>
                                </div>
                            </div> 
                        ))}
                        </form>
                        <div className='MakeBurger_bun-bottom' ></div>
                    </div>
                </div>
                <button className='MakeBurger_apply-button' onClick={upload}>save and proceed to payment</button>
            </div>
        </div>
    );
}



export default MakeBurger;