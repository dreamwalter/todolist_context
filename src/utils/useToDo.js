import { initToDo } from "../context/ToDoContext";
import { useState, useCallback } from "react";

export default function useToDo() {
  // read
  const [toDo, setToDo] = useState(initToDo.data);

  // create
  const addToDo = useCallback(
    (value) => {
      const toDoCopy = [...toDo];
      toDoCopy.push({ value: value, id: Date.now() });
      setToDo(toDoCopy);
    },
    [toDo]
  );

  // update
  const updateToDo = useCallback(
    (index, value) => {
      const toDoCopy = [...toDo];
      toDoCopy[index].value = value;
      setToDo(toDoCopy);
    },
    [toDo]
  );

  // delete
  const deleteToDo = useCallback(
    (index) => {
      const toDoCopy = [...toDo];
      toDoCopy.splice(index, 1);
      setToDo(toDoCopy);
    },
    [toDo]
  );

  return { toDo, addToDo, updateToDo, deleteToDo };
}
