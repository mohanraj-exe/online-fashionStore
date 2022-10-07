import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const initialState = {
    cart:{
        cartItems: []
    }
}

export const storeReducer = (state, action) =>{

    switch(action.type){
        case 'CART_ADD_ITEM':

            const newItem = action.payload
            const existItem = state.cart.cartItems.find((item) => item._id === newItem._id)
            const cartItems = existItem ? state.cart.cartItems.map((item) => 
            item._id === existItem._id ? newItem : item) : [...state.cart.cartItems, newItem]

            return {
                ...state, cart: { ...state.cart, cartItems }
            }
        default:
            return state    
    }
}

export const StoreContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(storeReducer, initialState)
    
    return(
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}