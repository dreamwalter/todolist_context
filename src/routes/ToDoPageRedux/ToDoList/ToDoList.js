import { useSelector, useDispatch } from "react-redux";

import List from "../../../compoents/List/List";
import ListItem from "../../../compoents/ListItem/ListItem";

import { UPDATE_TO_DO, DELETE_TO_DO } from "../../../redux/actions/toDoActions";

export default function ToDoList() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <List>
      {data &&
        data.map((item, index) => {
          return (
            <ListItem
              onChange={(e) => {
                dispatch({
                  type: UPDATE_TO_DO,
                  payload: {
                    index: index,
                    value: e.target.value
                  }
                });
              }}
              onDelete={(e) => {
                dispatch({
                  type: DELETE_TO_DO,
                  payload: {
                    index: index
                  }
                });
              }}
              key={item.id}
              value={item.value}
            />
          );
        })}
    </List>
  );
}
