import React from 'react'
import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { gettingfetchCartdata } from '../Redux/ProductsRedux/action'
const CartCounter = () => {
    const cart = useSelector((store)=>store.ECommerceData.cart)

const dispatch = useDispatch()

useEffect(()=>{
    if(cart.length===0)
    {
        dispatch(gettingfetchCartdata())
    }

},[cart?.length,dispatch])



  return (
    <Box textColor="white"
    backgroundColor={"red"}
    borderRadius='50%'
    width='20px'
    height='20px'
    textAlign='center'
    paddingBottom='20px'
    position='absolute'
    right='0'
    top='0'>
        {cart?.length? cart.length:0}
      
    </Box>
  )
}

export default CartCounter
