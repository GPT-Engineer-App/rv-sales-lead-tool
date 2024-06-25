import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with actual API call
      const response = await fakeApiCall(email, password);
      if (response.success) {
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const fakeApiCall = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'admin' && password === 'password') {
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
          <Heading as="h1" size="lg">Login</Heading>
          {error && <Text color="red.500">{error}</Text>}
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full" onClick={handleSubmit}>Login</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;