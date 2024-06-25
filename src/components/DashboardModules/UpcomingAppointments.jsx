import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const UpcomingAppointments = () => {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Upcoming Appointments/Tasks</Heading>
      <Text>Upcoming appointments and tasks will be displayed here.</Text>
    </Box>
  );
};

export default UpcomingAppointments;