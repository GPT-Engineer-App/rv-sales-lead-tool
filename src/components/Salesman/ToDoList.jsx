import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const ToDoList = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>To-Do List</Heading>
      <Text fontSize="lg" mb={6}>Manage your tasks here.</Text>
      {/* Add to-do list functionality here */}
    </Box>
  );
};

export default ToDoList;