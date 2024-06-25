import React, { useState } from 'react';
import { Box, Heading, Text, Button, useDisclosure } from "@chakra-ui/react";
import AddManagerModal from '../Modals/AddManagerModal';
import CreateLeadModal from '../Modals/CreateLeadModal';
import ManageLeadsModal from '../Modals/ManageLeadsModal';
import ViewUpdateAppointmentsModal from '../Modals/ViewUpdateAppointmentsModal';
import SystemSettingsModal from '../Modals/SystemSettingsModal';
import ImportCustomerDataModal from '../Modals/ImportCustomerDataModal';
import EmailMarketingModal from '../Modals/EmailMarketingModal';

const AdminTools = () => {
  const { isOpen: isAddManagerOpen, onOpen: onAddManagerOpen, onClose: onAddManagerClose } = useDisclosure();
  const { isOpen: isCreateLeadOpen, onOpen: onCreateLeadOpen, onClose: onCreateLeadClose } = useDisclosure();
  const { isOpen: isManageLeadsOpen, onOpen: onManageLeadsOpen, onClose: onManageLeadsClose } = useDisclosure();
  const { isOpen: isViewUpdateAppointmentsOpen, onOpen: onViewUpdateAppointmentsOpen, onClose: onViewUpdateAppointmentsClose } = useDisclosure();
  const { isOpen: isSystemSettingsOpen, onOpen: onSystemSettingsOpen, onClose: onSystemSettingsClose } = useDisclosure();
  const { isOpen: isImportCustomerDataOpen, onOpen: onImportCustomerDataOpen, onClose: onImportCustomerDataClose } = useDisclosure();
  const { isOpen: isEmailMarketingOpen, onOpen: onEmailMarketingOpen, onClose: onEmailMarketingClose } = useDisclosure();

  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading as="h2" size="md" mb={4}>Administrative Tools</Heading>
      <Button onClick={onAddManagerOpen} colorScheme="teal" mb={2}>Add Manager/Salesman</Button>
      <Button onClick={onCreateLeadOpen} colorScheme="teal" mb={2}>Create New Lead</Button>
      <Button onClick={onManageLeadsOpen} colorScheme="teal" mb={2}>Manage Existing Leads</Button>
      <Button onClick={onViewUpdateAppointmentsOpen} colorScheme="teal" mb={2}>View/Update Appointments</Button>
      <Button onClick={onSystemSettingsOpen} colorScheme="teal" mb={2}>System Settings</Button>
      <Button onClick={onImportCustomerDataOpen} colorScheme="teal" mb={2}>Import Customer Data</Button>
      <Button onClick={onEmailMarketingOpen} colorScheme="teal" mb={2}>Email Marketing</Button>

      <AddManagerModal isOpen={isAddManagerOpen} onClose={onAddManagerClose} />
      <CreateLeadModal isOpen={isCreateLeadOpen} onClose={onCreateLeadClose} />
      <ManageLeadsModal isOpen={isManageLeadsOpen} onClose={onManageLeadsClose} />
      <ViewUpdateAppointmentsModal isOpen={isViewUpdateAppointmentsOpen} onClose={onViewUpdateAppointmentsClose} />
      <SystemSettingsModal isOpen={isSystemSettingsOpen} onClose={onSystemSettingsClose} />
      <ImportCustomerDataModal isOpen={isImportCustomerDataOpen} onClose={onImportCustomerDataClose} />
      <EmailMarketingModal isOpen={isEmailMarketingOpen} onClose={onEmailMarketingClose} />
    </Box>
  );
};

export default AdminTools;