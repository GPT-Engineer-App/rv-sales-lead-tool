import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, useToast, Select } from "@chakra-ui/react";

const ManageLeadsModal = ({ isOpen, onClose }) => {
  const [selectedLead, setSelectedLead] = useState('');
  const [leadStatus, setLeadStatus] = useState('');
  const toast = useToast();

  const handleManageLead = () => {
    // Logic to manage existing lead
    toast({
      title: "Lead updated.",
      description: "The lead has been updated successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Manage Existing Leads</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="selectedLead" mb={4}>
            <FormLabel>Select Lead</FormLabel>
            <Select placeholder="Select lead" value={selectedLead} onChange={(e) => setSelectedLead(e.target.value)}>
              {/* Options should be populated dynamically */}
              <option value="lead1">Lead 1</option>
              <option value="lead2">Lead 2</option>
            </Select>
          </FormControl>
          <FormControl id="leadStatus" mb={4}>
            <FormLabel>Status</FormLabel>
            <Input type="text" value={leadStatus} onChange={(e) => setLeadStatus(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleManageLead}>
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ManageLeadsModal;