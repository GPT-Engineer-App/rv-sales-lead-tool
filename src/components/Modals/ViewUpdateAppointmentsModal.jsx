import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, useToast, Select } from "@chakra-ui/react";

const ViewUpdateAppointmentsModal = ({ isOpen, onClose }) => {
  const [selectedAppointment, setSelectedAppointment] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');
  const toast = useToast();

  const handleUpdateAppointment = () => {
    // Logic to update appointment
    toast({
      title: "Appointment updated.",
      description: "The appointment has been updated successfully.",
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
        <ModalHeader>View/Update Appointments</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="selectedAppointment" mb={4}>
            <FormLabel>Select Appointment</FormLabel>
            <Select placeholder="Select appointment" value={selectedAppointment} onChange={(e) => setSelectedAppointment(e.target.value)}>
              {/* Options should be populated dynamically */}
              <option value="appointment1">Appointment 1</option>
              <option value="appointment2">Appointment 2</option>
            </Select>
          </FormControl>
          <FormControl id="appointmentDetails" mb={4}>
            <FormLabel>Details</FormLabel>
            <Input type="text" value={appointmentDetails} onChange={(e) => setAppointmentDetails(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleUpdateAppointment}>
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewUpdateAppointmentsModal;