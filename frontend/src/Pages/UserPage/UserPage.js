import React from "react";
import "./UserPage.styl"
import {isAuthenticated} from "../../Auth"

export const UserPage = () => {

    


    return(
        <div className="UserPage_container">
            <div>
                {isAuthenticated() && (
                    <li></li>
                )
                    
                }
            </div>
        </div>
    )
}

const UserPageWithLocation =(props)=>{
    const location = useLocation()
    const navigate = useNavigate()

    return <UserPage location={location} navigate={navigate} {...props}/>
}

export default UserPageWithLocation