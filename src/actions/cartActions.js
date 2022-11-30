import productsApi from '../api/productApi'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET_ITEM,
  CART_SAVE_SHIPPING_ADDRESS_ITEM,
  CART_SAVE_PAYMENT_METHOD,
} from '../constant/cartConstants'


export const addToCart = (id, qty) => async (dispatch, getState) => {
  const cartItems = getState().cart.cartItems
  console.log(cartItems)
  const {data} = await productsApi.GetOneProduct(id)
  let alreadyExists = false;
    console.log(data)
    console.log('data id ', data.id)
    console.log('id ne',id)
    cartItems.forEach((x) => {
      if (x.id === data.id) {
        alreadyExists = true;
       
        
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...data, qty: 1 });
    }
  dispatch({
    type: CART_ADD_ITEM,
    payload: data, 
  })
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const resetCart = () => (dispatch) => {
    dispatch({type: CART_RESET_ITEM})
    localStorage.removeItem('cartItems')
  }

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS_ITEM,
    payload: data,
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}