import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_REQUEST, FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes"

import axios  from 'axios'

export const FecthingRequest= (payload)=>({
    type:FETCH_REQUEST,
    payload
})



export const FecthingRequestsuccess= (payload)=>({
    type:FETCH_REQUEST_SUCCESS,
    payload
})


export const FecthingRequestfailure= (payload)=>({
    type:FETCH_REQUEST_FAILURE,
    payload
})



export const getdata=(payload)=>{

    return (dispatch)=>{
     dispatch(FecthingRequest());

     axios.get("http://localhost:8080/products",{
        params:{
            ...payload
        }
     }).then((r)=>dispatch(FecthingRequestsuccess(r.data)))
     .catch((e)=>FecthingRequestfailure(e.data))
    }
}

export const getsingleproductrequest= (payload)=>({
    type:GET_SINGLE_PRODUCT_REQUEST,
    payload
})



export const getsingleproductsuccess= (payload)=>({
    type:GET_SINGLE_PRODUCT_SUCCESS,
    payload
})


export const getsingleproductfailure= (payload)=>({
    type:GET_SINGLE_PRODUCT_FAILURE,
    payload
})  


export const getsingleProduct= (id)=>(dispatch)=>{
    dispatch(getsingleproductrequest())
    axios.get(`http://localhost:8080/products/${id}`).then(r=>dispatch(getsingleproductsuccess(r.data))).catch(e=>dispatch(getsingleproductfailure(e.data)))
}





export const getcartrequest= (payload)=>({
    type:GET_CART_REQUEST,
    payload
})



export const getcartsuccess= (payload)=>({
    type:GET_CART_SUCCESS,
    payload
})


export const getcartfailure= (payload)=>({
    type:GET_CART_FAILURE,
    payload
})  


export const addtoCart= (product)=>dispatch=>{
    dispatch(getcartrequest())
    axios.post("http://localhost:8080/cart",product).then(r=>dispatch(getcartsuccess(r.data))).catch(e=>dispatch(getcartfailure(e.data)))
}




export const fetchcartrequest= (payload)=>({
    type:FETCH_CART_REQUEST,
    payload
})



export const fetchcartsuccess= (payload)=>({
    type:FETCH_CART_SUCCESS,
    payload
})


export const fetchcartfailure= (payload)=>({
    type:GET_CART_FAILURE,
    payload
})  




export const gettingfetchCartdata= (payload)=>dispatch=>{
    dispatch(fetchcartrequest())
    axios.get("http://localhost:8080/cart").then(r=>dispatch(fetchcartsuccess(r.data))).catch(e=>dispatch(fetchcartfailure(e.data)))
}



export const deletecartrequest= (payload)=>({
    type:DELETE_CART_REQUEST,
    payload
})



export const deletecartsuccess= (payload)=>({
    type:DELETE_CART_SUCCESS,
    payload
})


export const deletecartfailure= (payload)=>({
    type:DELETE_CART_FAILURE,
    payload
})  

export const deletingCartdata= (id)=>(dispatch)=>{
    dispatch(deletecartrequest())
    axios.delete(`http://localhost:8080/cart/${id}`).then(r=>dispatch(deletecartsuccess(r.data)))
    .then(()=>dispatch(gettingfetchCartdata()))
    .catch(e=>dispatch(deletecartfailure(e.data)))
}