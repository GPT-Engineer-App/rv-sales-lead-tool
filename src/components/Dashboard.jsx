import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Dashboard</Heading>
      <Text fontSize="lg">Welcome to your dashboard!</Text>
    </Box>
  );
};

export default Dashboard;