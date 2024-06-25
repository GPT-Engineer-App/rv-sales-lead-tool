import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const AdminTools = () => {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Administrative Tools</Heading>
      <Text>Tools for managing users, viewing all leads, configuring system settings, and importing customer data via CSV will be displayed here.</Text>
    </Box>
  );
};

export default AdminTools;