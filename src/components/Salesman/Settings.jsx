import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>Settings</Heading>
      <Text fontSize="lg" mb={6}>Manage your settings here.</Text>
      {/* Add settings functionality here */}
    </Box>
  );
};

export default Settings;