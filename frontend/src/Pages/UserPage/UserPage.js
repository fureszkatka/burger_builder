import React from "react";
import { isAuthenticated } from "../../Auth";
import { useSelector, useDispatch } from 'react-redux'
import { list, delOrder} from '../../stores/user-store'
import { getAllBurgers,delBurger } from "../../Requests/burger"
import { useEffect, useState } from "react";
import "./UserPage.styl"


export const UserPage = () => {

    const Burgers = useSelector((state) => state.burger.ingredients)
    const dispatch = useDispatch()

    useEffect(() => {
        let userId = isAuthenticated().user.id

        getAllBurgers(userId)
        .then(data => {

            let refakt_burger = []
            let n = data.ingredients[0].burger_id
            let i = 0
            let row = []
        
            while (i < data.ingredients.length) {
                if(data.ingredients[i].burger_id == n)  {
                    row.push(data.ingredients[i])
                    i++
                }else{
                n = data.ingredients[i].burger_id
                refakt_burger.push(row)
                row = []}
            }
            refakt_burger.push(row)

            dispatch(list(refakt_burger))
        })


    },[])


    const MapBurgers = (item,i) => {
        
        return (
            <>
                {item.map((burger,index) =>
                    <div key={index} className="UserPage_list-element">
                        {burger.ingredient}
                    </div>
                )}
            </>
        )
    }



    const deleteOrder = (i,index)=> {
        
        delBurger(isAuthenticated().user.id, index)
        .then(data => {
            dispatch(delOrder(i,data.message))
        })
    }

    
    return(
        <div className="UserPage_container">
            {Burgers &&
                <div className="UserPage_burgers-list">
                    {Burgers.map((burger, index) => (
                        <div key={index} className="UserPage_button-burgers">
                        
                            <p className="UserPage_index">{burger[0].burger_id}</p>
                            <div
                                className="UserPage_list-items"
                                >
                                {MapBurgers(burger, index)}
                            </div>
                            <div
                                className="material-symbols-outlined"
                                onClick={() => deleteOrder(index,burger[0].burger_id)}>
                                delete
                            </div>
                        </div>
                    ))}
                </div>
            }
            <div className="UserPage_message"></div>
        </div>
    )
}

