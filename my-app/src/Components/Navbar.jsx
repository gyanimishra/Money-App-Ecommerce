import React from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Icon,
  
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  
} from '@chakra-ui/icons';

import {BsCart3} from 'react-icons/bs'
import CartCounter from './CartCounter';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
      <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Link to='/'>
          <Text style={{display:"flex"}}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Home
          
          </Text>
          </Link>
            
        </Flex>
        <Link to='/Cart'>
          <Box position='relative' padding='0 0.5rem 0 0'>
        <Icon as={BsCart3} boxSize='2.5rem'/>
        <CartCounter/>
        </Box>
        </Link>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
    </div>
  )
}

export default Navbar
