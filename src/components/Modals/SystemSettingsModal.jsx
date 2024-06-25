import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";

const SystemSettingsModal = ({ isOpen, onClose }) => {
  const [settingName, setSettingName] = useState('');
  const [settingValue, setSettingValue] = useState('');
  const toast = useToast();

  const handleUpdateSettings = () => {
    // Logic to update system settings
    toast({
      title: "Settings updated.",
      description: "The system settings have been updated successfully.",
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
        <ModalHeader>System Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="settingName" mb={4}>
            <FormLabel>Setting Name</FormLabel>
            <Input type="text" value={settingName} onChange={(e) => setSettingName(e.target.value)} />
          </FormControl>
          <FormControl id="settingValue" mb={4}>
            <FormLabel>Setting Value</FormLabel>
            <Input type="text" value={settingValue} onChange={(e) => setSettingValue(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleUpdateSettings}>
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SystemSettingsModal;