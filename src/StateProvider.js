import React, { useContext, useReducer, createContext } from "react";

//prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the common data layer to entire app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* children spelling was wrong */}
  </StateContext.Provider> 
);

export const useStateValue = () => useContext(StateContext);
// abouve line will get the data from js components





// import React, {createContext, useContext, useReducer} from "react";

// //Data layer
// export const StateContext = createContext();

// //Provider
// export const StateProvider = ({reducer, initialState, children}) =>(
//     <StateContext.Provider value={useReducer(reducer,initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// export const useStateValue = () => useContext(StateContext);
