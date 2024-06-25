import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";

const EmailMarketingModal = ({ isOpen, onClose }) => {
  const [emailTemplate, setEmailTemplate] = useState('');
  const toast = useToast();

  const handleEmailMarketing = () => {
    // Logic to implement automated email marketing
    toast({
      title: "Email marketing configured.",
      description: "Automated email marketing has been configured successfully.",
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
        <ModalHeader>Email Marketing</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="emailTemplate" mb={4}>
            <FormLabel>Email Template</FormLabel>
            <Input type="text" value={emailTemplate} onChange={(e) => setEmailTemplate(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleEmailMarketing}>
            Configure
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmailMarketingModal;