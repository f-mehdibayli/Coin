import { Children, createContext, useState } from "react";

export const UserContext=createContext()

const UserContextProvider = ({children}) => {

    const [loggedIn,setLoggedIn]=useState(false)

    const loginSubmit=()=>{
        setLoggedIn(true)
    }

    return ( 
        <UserContext.Provider value={{
            loggedIn,
            loginSubmit
        }}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;