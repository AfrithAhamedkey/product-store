import { Container, Heading, VStack , Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const CreatePage = () => {
    const[newProduct,setnewProduct]=useState({
        name:"",
        price:"",
        image:""
    })

    const handleProduct = ()=>{
        console.log(newProduct)
    }
  return (
    <Container maxW={"container.sm"} bgColor={"gray"} width={"70%"} height={"250px"}>
        <VStack spacing={12}>
            <Heading textAlign={"center"}>Create New Product</Heading>
            <VStack spacing={4}>
                   <Input placeholder="Product Name" name="name" value={newProduct.name} 
                    onChange={(e)=> setnewProduct({...newProduct,name:e.target.value})}></Input>

                    <Input placeholder="Price" name="price" type="Number" value={newProduct.price} 
                    onChange={(e)=> setnewProduct({...newProduct,price:e.target.value})}></Input>

                    <Input placeholder="Image URL" name="image" value={newProduct.image} 
                    onChange={(e)=> setnewProduct({...newProduct,image:e.target.value})}></Input>
            </VStack>
            <Button onClick={handleProduct}>Add Product</Button>

        </VStack>

    </Container>
  )
}

export default CreatePage