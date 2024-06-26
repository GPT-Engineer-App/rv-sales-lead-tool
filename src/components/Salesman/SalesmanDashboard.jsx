import React from 'react';
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import KPISummary from '../DashboardModules/KPISummary';
import RecentLeads from '../DashboardModules/RecentLeads';
import SalesPipeline from '../DashboardModules/SalesPipeline';
import UpcomingAppointments from '../DashboardModules/UpcomingAppointments';
import LeadAssignment from '../DashboardModules/LeadAssignment';
import EmailMarketing from '../DashboardModules/EmailMarketing';
import AdminTools from '../DashboardModules/AdminTools';

const SalesmanDashboard = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>Salesman Dashboard</Heading>
      <Text fontSize="lg" mb={6}>Welcome to your dashboard!</Text>
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
        <GridItem colSpan={2}>
          <AdminTools />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SalesmanDashboard;