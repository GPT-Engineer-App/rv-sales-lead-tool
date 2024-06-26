import React, { useState, useEffect, useContext } from 'react';
import { Box, Heading, Text, Grid, GridItem, useToast } from "@chakra-ui/react";
import KPISummary from '../DashboardModules/KPISummary';
import RecentLeads from '../DashboardModules/RecentLeads';
import SalesPipeline from '../DashboardModules/SalesPipeline';
import UpcomingAppointments from '../DashboardModules/UpcomingAppointments';
import LeadAssignment from '../DashboardModules/LeadAssignment';
import EmailMarketing from '../DashboardModules/EmailMarketing';
import AdminTools from '../DashboardModules/AdminTools';

import NewLeadModal from '../Modals/NewLeadModal';
import { UserContext } from '../../context/UserContext';

const SalesmanDashboard = () => {
  const [greeting, setGreeting] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    const user = 'Salesman'; // Replace with actual user data
    const hours = new Date().getHours();
    let timeOfDay = '';

    if (hours < 12) {
      timeOfDay = 'morning';
    } else if (hours < 18) {
      timeOfDay = 'afternoon';
    } else {
      timeOfDay = 'evening';
    }

    setGreeting(`Good ${timeOfDay}, ${user}!`);
  }, []);

  const handleSave = (leadData) => {
    // Logic to save lead data
    toast({
      title: "Lead created.",
      description: "The new lead has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>Salesman Dashboard</Heading>
      <Text fontSize="lg" mb={6}>{greeting}</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <KPISummary />
        </GridItem>
        <GridItem>
          <RecentLeads />
        </GridItem>
        <GridItem>
          <SalesPipeline />
        </GridItem>
        <GridItem>
          <UpcomingAppointments />
        </GridItem>
        <GridItem>
          <LeadAssignment />
        </GridItem>
        <GridItem>
          <EmailMarketing />
        </GridItem>
        {userRole === 'admin' && (
          <GridItem colSpan={2}>
            <AdminTools />
          </GridItem>
        )}
      </Grid>
    <NewLeadModal isOpen={isModalOpen} onSave={handleSave} onCancel={handleCancel} />
    </Box>
  );
};

export default SalesmanDashboard;