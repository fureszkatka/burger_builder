import React from "react";
import { isAuthenticated } from "../../Auth";
import { useSelector, useDispatch } from 'react-redux'
import { list } from '../../stores/user-store'
import { getAllBurgers } from "../../Requests/burger"
import { useEffect, useState } from "react";
import "./UserPage.styl"


export const UserPage = () => {

    const Burgers = useSelector((state) => state)
    const dispatch = useDispatch()

    let burgers = ""

    useEffect(() => {
        let userId = isAuthenticated().user.id


        getAllBurgers(userId)
        .then(data => {
            console.log(data)    
            burgers = data
        })
    })


    return(
        <div className="UserPage_container">
            <div className="UserPage_burgers-list">
            </div>
            <div className="UserPage_message"></div>
        </div>
    )
}

