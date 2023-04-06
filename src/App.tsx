import { useState } from "react";
import {
  Box,
  Button,
  useDisclosure,
  HStack,
  Center,
  Heading,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { RiAccountCircleLine } from "react-icons/ri";
import AddEmployeeForm from "./components/AddEmployee";
import EditEmployeeForm from "./components/EditEmployee";
import EmployeeTable from "./components/EmployeeTable";

const initCurrentEmployee: IEmployee = { position: "", name: "", age: 0, id: 0, imageUrl: "" };

const App = () => {
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [employees, setEmployees] = useState<Array<IEmployee>>([]);
  const [editEmployee, setEditEmployee] = useState(initCurrentEmployee);

  const onAddEmployee = (newEmployee: IBaseEmployee) => {
    const id = employees.length + 1;
    setEmployees([...employees, { ...newEmployee, id }]);
  };
  const onCurrentEmployee = (employee: IEmployee) => {
    setEditEmployee(employee);
  };
  const onUpdateEmployee = (id: number, newEmployee: IEmployee) => {
    setEmployees(employees.map((i) => (i.id === id ? newEmployee : i)));
  };
  const onDeleteEmployee = (currentEmployee: IEmployee) => {
    setEmployees(employees.filter((i) => i.id !== currentEmployee.id));
  };
  return (
    <Box>
      <Center p={4} height={100}>
        <HStack>
          <RiAccountCircleLine size={30} color="#3182CE" />
          <Heading textAlign="center" fontSize={20}>
            Employee App
          </Heading>
        </HStack>
      </Center>

      <EmployeeTable
        users={employees}
        onEdit={onCurrentEmployee}
        onDelete={onDeleteEmployee}
        onOpen={onOpenEdit}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      />

      <EditEmployeeForm
        employee={editEmployee}
        onUpdateEmployee={onUpdateEmployee}
        onOpen={onOpenEdit}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      />

      <AddEmployeeForm
        onAddEmployee={onAddEmployee}
        onOpen={onOpenAdd}
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
      />

      <Button
        position="fixed"
        bottom={10}
        right={10}
        onClick={onOpenAdd}
        colorScheme="blue"
      >
        <AddIcon pr={2} />
        Add Employee
      </Button>
    </Box>
  );
};

export default App;
