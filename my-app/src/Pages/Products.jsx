import React, { useEffect } from 'react'
import { getdata } from '../Redux/ProductsRedux/action'
import {useDispatch, useSelector}  from 'react-redux'
import FilterComponent from '../Components/FilterComponent'
import {Box,Stack,Heading,Flex}  from '@chakra-ui/react'
import Product from './Product'
import { useSearchParams ,Link} from 'react-router-dom'
const Products = () => {
const dispatch= useDispatch()
  const product= useSelector((store)=>store.ECommerceData.products)
 const[SearchParams]= useSearchParams()

useEffect(()=>{
  let params={
    category:SearchParams.getAll('category')
  }
dispatch(getdata(params))
},[SearchParams,dispatch])

console.log(product);

  return (
  <Box>
    <Stack display={{md:'flex'}} flexDirection={{md:"row"}}>
     <Box minWidth={"13rem"}>
    <FilterComponent/>
    </Box>


    <Box>
      <Heading as='h3'>Products</Heading>

      <Flex flexWrap='wrap' justifyContent='space-around'>
         {
          product?.map((item)=>{
             return <Product key={item.id}  {...item}   />
         })
         }
      </Flex>

    
    
    </Box>
    </Stack>
  
  </Box>
  )
}

export default Products
