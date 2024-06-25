import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";

const ImportCustomerDataModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleImportData = () => {
    // Logic to import customer data via CSV
    toast({
      title: "Data imported.",
      description: "Customer data has been imported successfully.",
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
        <ModalHeader>Import Customer Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="file" mb={4}>
            <FormLabel>Upload CSV</FormLabel>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleImportData}>
            Import
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImportCustomerDataModal;