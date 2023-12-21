import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider=({children})=>{

    const[IsHamclick, SetIsHamclick]=useState(false);

    return(
        <UserContext.Provider value={{IsHamclick, SetIsHamclick}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;