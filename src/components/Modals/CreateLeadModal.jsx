import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";

const CreateLeadModal = ({ isOpen, onClose }) => {
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const toast = useToast();

  const handleCreateLead = () => {
    // Logic to create new lead
    toast({
      title: "Lead created.",
      description: "The new lead has been created successfully.",
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
        <ModalHeader>Create New Lead</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="leadName" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={leadName} onChange={(e) => setLeadName(e.target.value)} />
          </FormControl>
          <FormControl id="leadEmail" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} />
          </FormControl>
          <FormControl id="leadPhone" mb={4}>
            <FormLabel>Phone</FormLabel>
            <Input type="tel" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleCreateLead}>
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateLeadModal;