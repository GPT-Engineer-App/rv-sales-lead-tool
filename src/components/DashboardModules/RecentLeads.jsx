import React from 'react';
import { Box, Heading, Text, VStack, Badge } from "@chakra-ui/react";

const leads = [
  { name: 'John Doe', stage: 'Not Contacted' },
  { name: 'Jane Smith', stage: 'In Negotiations' },
  { name: 'Bob Johnson', stage: 'Closed' },
];

const getBadgeColor = (stage) => {
  switch (stage) {
    case 'Not Contacted':
      return 'blue';
    case 'In Negotiations':
      return 'orange';
    case 'Closed':
      return 'green';
    default:
      return 'gray';
  }
};

const RecentLeads = () => {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Recent Leads</Heading>
      <VStack spacing={4}>
        {leads.map((lead, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius={8} boxShadow="lg" bg={`${getBadgeColor(lead.stage)}.100`}>
            <Text fontSize="lg">{lead.name}</Text>
            <Badge colorScheme={getBadgeColor(lead.stage)}>{lead.stage}</Badge>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default RecentLeads;