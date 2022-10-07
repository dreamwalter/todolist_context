import AddToDo from "./AddToDo/AddToDo";
import ToDoList from "./ToDoList/ToDoList";

import { ToDoPageLayout } from "./style";

export default function ToDoPage() {
  return (
    <ToDoPageLayout>
      <AddToDo />
      <ToDoList />
    </ToDoPageLayout>
  );
}
