import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const AppointmentSetter = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>Appointment Setter</Heading>
      <Text fontSize="lg" mb={6}>Set your appointments here.</Text>
      {/* Add appointment setting functionality here */}
    </Box>
  );
};

export default AppointmentSetter;