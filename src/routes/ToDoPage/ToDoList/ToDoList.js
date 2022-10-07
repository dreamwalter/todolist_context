import List from "../../../compoents/List/List";
import ListItem from "../../../compoents/ListItem/ListItem";

import { useContext } from "react";
import toDoContext from "../../../context/ToDoContext";

export default function ToDoList() {
  const { data, updateToDo, deleteToDo } = useContext(toDoContext);

  return (
    <List>
      {data &&
        data.map((item, index) => {
          return (
            <ListItem
              onChange={(e) => {
                updateToDo(index, e.target.value);
              }}
              onDelete={(e) => {
                deleteToDo(index);
              }}
              key={item.id}
              value={item.value}
            />
          );
        })}
    </List>
  );
}
