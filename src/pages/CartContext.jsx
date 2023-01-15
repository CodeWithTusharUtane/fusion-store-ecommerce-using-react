import { createContext, useContext, useReducer } from "react";
import reducer from './ReducerCart'
const CartContext = createContext();

const initialState = {
    cart: [],
    
};
const CartProvider = ({children})=>{

    
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product) => {
        dispatch ({type:"ADD_TO_CART", payload:{product}})

    }
    const removeItem =(id)=>{
        dispatch({type:"REMOVE_ITEM", payload: id})
    }

    return <CartContext.Provider value={{...state, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}
export {CartProvider, useCartContext};