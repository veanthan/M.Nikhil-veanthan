import React from "react";
import Child from "./childContext";

export const myContext = React.createContext();

export default function ParentContext() {

    const Demo = {
        name : 'Pavithran',
        age:18,
        college:'Pavithran College of ENgineering and Technology',
    }
    return (
        <myContext.Provider value={Demo}>
            <Child />
        </myContext.Provider>
    )
}

// export {myContext, ParentContext};