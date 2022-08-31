import { FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_REQUEST, FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes"

const initialState={
    products:[],
    isloading:false,
    iserror:false,
    Error:'',
    currentproduct:{},
    cart:[]
}


export const Productsreducer= (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_REQUEST:{
            return {
                ...state,
                isloading:true,
                iserror:false,
                Error:''
            }
        }
        case FETCH_REQUEST_SUCCESS:{
            return {
                ...state,
                products:action.payload,
                isloading:false,
                iserror:false,
                Error:''
            }
        }
        case FETCH_REQUEST_FAILURE:{
            return {
                state,
                isloading:false,
                iserror:true,
                Error:action.payload
            }
        }
        case GET_SINGLE_PRODUCT_REQUEST:{
            return {
                ...state,
               
                Error:''
            }
        }
        case GET_SINGLE_PRODUCT_SUCCESS:{
            return {
                ...state,
                currentproduct:action.payload,
                
                isloading:false,
                iserror:false,
                Error:''
            }
        }
        case GET_SINGLE_PRODUCT_FAILURE:{
            return {
                state,
                Error:action.payload
            }
        }
        case GET_CART_REQUEST:{
            return {
                ...state,
               
                Error:''
            }
        }
        case GET_CART_SUCCESS:{
            return {
                ...state,
                cart:[...state.cart,action.payload],
                isloading:false,
                iserror:false,
                Error:''
            }
        }
        case GET_CART_FAILURE:{
            return {
                state,
                Error:action.payload
            }
        }
        case FETCH_CART_REQUEST:{
            return {
                ...state,
               
                Error:''
            }
        }
        case FETCH_CART_SUCCESS:{
            return {
                ...state,
                cart:[...action.payload],
                isloading:false,
                iserror:false,
                Error:''
            }
        }
        case FETCH_CART_FAILURE:{
            return {
                state,
                Error:action.payload
            }
        }
            
    
        default:{
            return state
        }
            
    }

}
