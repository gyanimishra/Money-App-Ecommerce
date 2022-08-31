import React from 'react'
 import { Box ,Heading,VStack,Stack,Image,Text,Button,useColorModeValue, Flex} from '@chakra-ui/react'
 import {DeleteIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deletingCartdata } from '../Redux/ProductsRedux/action'
const Cart = () => {


  const cart = useSelector((store)=>store.ECommerceData.cart)
const dispatch= useDispatch()
   const handleremove=(id)=>{
    dispatch(deletingCartdata(id))

    alert("Item Remove Successfully!")

   }
  
  return (
    <Box>
      <Heading as='h2' size='xl' textAlign='center'>Cart Page</Heading>

      <Flex>
    {cart.length ?cart.map((product)=>{
      return  <CartItem key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} id={product.id} handleremove={handleremove}/>
    }):<Heading>"Nothing to Show Here.."</Heading>}
     </Flex>
    </Box>
    
  )
}

export default Cart


function CartItem({image,title,description,price,id,handleremove}){

  return(
    <Box rounded='lg' width='fit-content' margin='auto' >
   <Flex
   justifyContent='center'
   alignItems='center'
   margin='30px'
   
  
   >
    <Flex height={'300px'} width={'300px'}
    position='relative'
    padding='0 1rem'
    _after={{
          transition: 'all .3s ease',
          content: '""',
          w: '80%',
          h: '80%',
          pos: 'absolute',
          top: "50%",
          left: "50%",
          transform:`translate(-50%,-50%)`,
          backgroundImage: `url(${image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}>
    <Image
          rounded={'lg'}
          height={300}
          width={300}
          objectFit={'contain'}
          src={image}
        />
    </Flex>
    <Box height={'300px'} width={'300px'}>

      <Heading as='h3' size='lg'>{title}</Heading>
      <Text>
    {description}
    </Text>
    <Text fontWeight={800} fontSize={'xl'}>
            ${price}
          </Text>

          <Button variant='solid' leftIcon={<DeleteIcon/>}onClick={()=>handleremove(id)}>Remove</Button>
          
            
      
    </Box>
  
   

   </Flex>



    </Box>
  )
}