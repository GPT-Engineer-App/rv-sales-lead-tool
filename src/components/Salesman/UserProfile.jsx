import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const UserProfile = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>User Profile</Heading>
      <Text fontSize="lg" mb={6}>View and edit your profile here.</Text>
      {/* Add user profile functionality here */}
    </Box>
  );
};

export default UserProfile;