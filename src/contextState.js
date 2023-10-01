import React, { useContext } from "react";

export const initialState = {
    login: undefined,
    isLoading: false,
  };
  
  export const ActionTypes = {
    setLogin: "SET_LOGIN",
    setIsLoading: "SET_ISLOADING"
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case ActionTypes.setLogin: {
        return { ...state, login: action.newValue };
      }
      case ActionTypes.setIsLoading: {
        return { ...state, isLoading: action.newValue };
      }
      default: {
        return state;
      }
    }
  };
  
  export const inicialContext = {
    contextState: initialState,
    setContextState: () => {},
  };
  
  const Context = React.createContext(inicialContext);
  
  export function ContextProvider({ children, state = initialState }) {
    const [contextState, setContextState] = React.useReducer(
      reducer,
      state
    );
  
      return ( <Context.Provider value={{contextState, setContextState}}>
      {children}
    </Context.Provider>)
  }
  
  export const useContextState = () => useContext(Context)