import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with actual API call
      const response = await fakeApiCall(email);
      if (response.success) {
        navigate('/login'); // Redirect to login on successful password reset
      } else {
        setError('Password reset failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const fakeApiCall = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Forgot Password</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button colorScheme="teal" size="lg" width="full" onClick={handleSubmit}>Reset Password</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default ForgotPassword;