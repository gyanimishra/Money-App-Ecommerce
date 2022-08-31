import React from 'react'
import {Box,Text,Checkbox, CheckboxGroup,VStack}  from '@chakra-ui/react'
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from '../Redux/ProductsRedux/action';
const FilterComponent = () => {
  
  const[SearchParams,setSearchParams]= useSearchParams();
const [Category,setCategory] =useState(SearchParams.getAll('category')||[])
const dispatch= useDispatch()
  const categoryHandler=(value)=>{
    setCategory(value)
  }

useEffect(()=>{
  if(Category){
    setSearchParams({category:Category })
    let param= {
      category:SearchParams.getAll('category')
    }
    dispatch(getdata(param))
  }
  

},[Category,SearchParams,setSearchParams,dispatch])


  return (
   <Box>
    <Box p="1rem 2rem"  display={{base:"none",md:"block"}}>
     <Text  fontSize='2xl'>Filters</Text>
     <Text  >Category</Text>

     <CheckboxGroup colorScheme='green' defaultValue={Category}  onChange={categoryHandler}>
  <VStack spacing={[1, 5]} direction={['column', 'row']} alignItems={'baseline'}>
    <Checkbox value="men's clothing">Men's Clothing</Checkbox>
    <Checkbox value="women's clothing">Women's Clothing</Checkbox>
    <Checkbox value='jewelery'>Jewelary</Checkbox>
    <Checkbox value='electronics'>Electronicks</Checkbox>
    <Checkbox value='bags'>Bags</Checkbox>
  </VStack>
</CheckboxGroup>
    </Box>
   </Box>
  )
}

export default FilterComponent
