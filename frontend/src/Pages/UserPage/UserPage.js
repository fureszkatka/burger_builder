import React from "react";
import { isAuthenticated } from "../../Auth";
import { useSelector, useDispatch } from 'react-redux'
import { list, delOrder, loading } from '../../stores/user-store'
import { getAllBurgers, delBurger } from "../../Requests/burger"
import { useEffect, useState } from "react";
import "./UserPage.styl"


export const UserPage = () => {

    //Define the Redux state to work with 
    const Burgers = useSelector((state) => state.burger)
    const dispatch = useDispatch()


    //Get the data from the database when the page has refreshed
    useEffect(() => {
        let userId = isAuthenticated().user.id

        dispatch(loading(true))

        getAllBurgers(userId)
            .then(data => {

                let refakt_burger = []
                let n = data.ingredients[0].burger_id
                let i = 0
                let row = []

                while (i < data.ingredients.length) {
                    if (data.ingredients[i].burger_id == n) {
                        row.push(data.ingredients[i])
                        i++
                    } else {
                        n = data.ingredients[i].burger_id
                        refakt_burger.push(row)
                        row = []
                    }
                }
                refakt_burger.push(row)

                dispatch(loading(false))
                dispatch(list(refakt_burger))
            })


    }, [])

    //Mapping a 2d array
    const MapBurgers = (item, i) => {

        return (
            <>
                {item.map((burger, index) =>
                    <div key={index} className="UserPage_list-element">
                        {burger.ingredient}
                    </div>
                )}
            </>
        )
    }


    //Handle deleting a burger by id
    const deleteOrder = (i, index) => {

        delBurger(isAuthenticated().user.id, index)
            .then(data => {
                dispatch(delOrder(i, data.message))
            })
    }


    return (
        <div className="UserPage_container">
            {Burgers.isLoading ?
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif"
                >
                </img>
                :
                <>
                    {Burgers.ingredients &&
                        <div className="UserPage_burgers-list">
                            {Burgers.ingredients.map((burger, index) => (
                                <div key={index} className="UserPage_button-burgers">

                                    <p className="UserPage_index">
                                        {burger[0].burger_id}#</p>
                                    <div
                                        className="UserPage_list-items"
                                    >
                                        {MapBurgers(burger, index)}
                                    </div>
                                    <div
                                        className="material-symbols-outlined"
                                        onClick={() => deleteOrder(index, burger[0].burger_id)}>
                                        delete
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </>
            }
            <div className="UserPage_message"></div>
        </div>
    )
}

