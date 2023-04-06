import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const EditEmployeeForm: React.FC<IEditProps> = (props) => {
  const [employee, setEmployee] = useState(props.employee);
  useEffect(() => setEmployee(props.employee), [props]);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!employee.position || !employee.name) {
      console.log("em");
      return false;
    }
    props.onUpdateEmployee(employee.id, employee);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <form onSubmit={onFormSubmit}>
          <ModalOverlay />
          <ModalContent maxW={350} margin="auto">
            <ModalHeader>Edit Employee</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={employee.name}
                    onChange={onInputChange}
                  ></Input>
                </FormControl>

                <FormControl onChange={onInputChange} isRequired pt={4}>
                  <FormLabel>Position</FormLabel>
                  <Select
                    placeholder="Select Position"
                    name="position"
                    value={employee.position}
                  >
                    <option>Apprentice</option>
                    <option>Builder</option>
                    <option>Admin</option>
                    <option>Sales</option>
                  </Select>
                </FormControl>

                <FormControl pt={4} isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={employee.age}
                    onChange={onInputChange}
                  ></Input>
                </FormControl>
                <FormControl pt={4}>
                  <FormLabel>Image Url</FormLabel>
                  <Input
                    type="text"
                    placeholder="ImageUrl"
                    name="imageUrl"
                    value={employee.imageUrl}
                    onChange={onInputChange}
                  ></Input>
                </FormControl>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                onClick={props.onClose}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default EditEmployeeForm;
