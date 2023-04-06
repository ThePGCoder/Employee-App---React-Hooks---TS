import React from "react";
import {
  Box,
  Image,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const EmployeeTable: React.FC<ITableProps> = (props) => {
  const onSubmit = (i: IEmployee) => {
    props.onOpen();
    props.onEdit(i);
  };

  return (
    <Box p={6} maxW={800} marginLeft="auto" marginRight="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Position</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.users.map((i) => (
            <Tr key={i.id}>
              <Td>
                <Image src={i["imageUrl"]} boxSize={50} borderRadius="full" />
              </Td>
              <Td>{i["name"]}</Td>
              <Td>{i["age"]}</Td>
              <Td>{i["position"]}</Td>
              <Td>
                <IconButton
                  onClick={() => onSubmit(i)}
                  aria-label={""}
                  icon={<EditIcon />}
                  variant="ghost"
                  color="orange"
                />
                <IconButton
                  onClick={() => props.onDelete(i)}
                  aria-label={""}
                  icon={<DeleteIcon />}
                  variant="ghost"
                  color="red"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
export default EmployeeTable;
