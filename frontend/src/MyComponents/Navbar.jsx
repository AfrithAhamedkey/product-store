import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import { useColorMode,ColorModeButton } from '@/components/ui/color-mode';

function Navbar() {
   
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} direction="row" gap ={4}>   
            <Text><Link to={"/"}> Product Store</Link> </Text>
            <HStack direction="row" h="20">
                <Link to={"/create"}><Button><FaPlus /></Button></Link>
                <ColorModeButton />

            </HStack>

        </Flex>

    </Container>
  )
}

export default Navbar