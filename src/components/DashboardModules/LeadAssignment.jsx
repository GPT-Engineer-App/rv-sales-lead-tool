import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const LeadAssignment = () => {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Lead Assignment</Heading>
      <Text>Lead assignment details will be displayed here.</Text>
    </Box>
  );
};

export default LeadAssignment;