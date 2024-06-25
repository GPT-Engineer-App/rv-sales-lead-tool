import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const ForgotPassword = () => {
  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Forgot Password</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full">Reset Password</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default ForgotPassword;