interface IBaseEmployee {
  name: string;
  position: string;
  age: number | string;
  imageUrl: string;
}
interface IEmployee extends IBaseEmployee {
  id: number;
}

interface ITableProps {
  users: Array<IEmployee>;
  onEdit: (employee: IEmployee) => void;
  onDelete: (employee: IEmployee) => void;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

interface IAddProps {
  onAddEmployee: (employee: IBaseEmployee) => void;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

interface IEditProps {
  employee: IEmployee;
  onUpdateEmployee: (id: number, user: IEmployee) => void;
  
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}
