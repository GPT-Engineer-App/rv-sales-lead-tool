import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const RecentLeads = () => {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Recent Leads</Heading>
      <Text>Recent leads will be displayed here.</Text>
    </Box>
  );
};

export default RecentLeads;