import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const EmailMarketing = () => {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Email Marketing</Heading>
      <Text>Email marketing details will be displayed here.</Text>
    </Box>
  );
};

export default EmailMarketing;