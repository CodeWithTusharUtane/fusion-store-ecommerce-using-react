

const ReducerCart = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {product} = action.payload;
        console.log(product)

        let cartProduct;
        cartProduct = {
            name: product.name,
            image: product.image,
            price : product.price,
            id: product.id
        }

        return{
            ...state,
            cart:[...state.cart, cartProduct],
        }
    }

    if(action.type === "REMOVE_ITEM"){
        let updatedCart = state.cart.filter((curItem)=>curItem.id !== action.payload);
        return{
            ...state,
            cart: updatedCart,
        }
    }
  return state;
}

export default ReducerCart
