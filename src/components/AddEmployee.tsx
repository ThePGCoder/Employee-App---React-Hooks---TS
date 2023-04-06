import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const initEmployee = { position: "", name: "", age: "", imageUrl: ""};
const AddEmployeeForm: React.FC<IAddProps> = (props) => {
  const [formValue, setFormValue] = useState(initEmployee);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.onAddEmployee(formValue);
    setFormValue(initEmployee);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <form onSubmit={onFormSubmit}>
          <ModalOverlay />
          <ModalContent maxW={350} margin="auto">
            <ModalHeader>Add Employee</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formValue.name}
                    onChange={onInputChange}
                  ></Input>
                </FormControl>

                <FormControl onChange={onInputChange} isRequired pt={4}>
                  <FormLabel>Position</FormLabel>
                  <Select
                    placeholder="Select Position"
                    name="position"
                    value={formValue.position}
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
                    value={formValue.age}
                    onChange={onInputChange}
                  ></Input>
                </FormControl>

                <FormControl pt={4}>
                  <FormLabel>Image Url</FormLabel>
                  <Input
                    type="text"
                    placeholder="ImageUrl"
                    name="imageUrl"
                    value={formValue.imageUrl}
                    onChange={onInputChange}
                  ></Input>
                </FormControl>
              </Box>
            </ModalBody>

            <ModalFooter pt={6}>
              <Button type="submit" colorScheme="blue" onClick={props.onClose}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default AddEmployeeForm;
