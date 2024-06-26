import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select, useToast } from "@chakra-ui/react";

const NewLeadModal = ({ isOpen, onSave, onCancel }) => {
  const [leadName, setLeadName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rvUnit, setRvUnit] = useState('');
  const [leadSource, setLeadSource] = useState('');
  const [assignedSalesman, setAssignedSalesman] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const handleSave = () => {
    if (!leadName || !phoneNumber || !rvUnit || !leadSource || !assignedSalesman) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const leadData = {
      leadName,
      phoneNumber,
      rvUnit,
      leadSource,
      assignedSalesman,
      notes,
    };

    onSave(leadData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Lead</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="leadName" mb={4}>
            <FormLabel>Lead Name</FormLabel>
            <Input type="text" value={leadName} onChange={(e) => setLeadName(e.target.value)} />
          </FormControl>
          <FormControl id="phoneNumber" mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormControl>
          <FormControl id="rvUnit" mb={4}>
            <FormLabel>RV Unit</FormLabel>
            <Input type="text" value={rvUnit} onChange={(e) => setRvUnit(e.target.value)} />
          </FormControl>
          <FormControl id="leadSource" mb={4}>
            <FormLabel>Lead Source</FormLabel>
            <Select placeholder="Select source" value={leadSource} onChange={(e) => setLeadSource(e.target.value)}>
              <option value="Website">Website</option>
              <option value="Google">Google</option>
              <option value="Previous Customer">Previous Customer</option>
              <option value="Facebook">Facebook</option>
              <option value="Walk-in">Walk-in</option>
            </Select>
          </FormControl>
          <FormControl id="assignedSalesman" mb={4}>
            <FormLabel>Assigned Salesman</FormLabel>
            <Input type="text" value={assignedSalesman} onChange={(e) => setAssignedSalesman(e.target.value)} />
          </FormControl>
          <FormControl id="notes" mb={4}>
            <FormLabel>Notes</FormLabel>
            <Input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onCancel}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewLeadModal;