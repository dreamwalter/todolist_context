import { ADD_TO_DO, UPDATE_TO_DO, DELETE_TO_DO } from "../actions/toDoActions";

const initToDo = [{ value: "資料一", id: Date.now() }];

export default function toDoReducer(state = initToDo, action) {
  // 從action中取得參數
  const { type, payload } = action;

  // 由於JS的array為類call by ref的形式，先複製一份再修改
  const stateCopy = [...state];

  switch (type) {
    case ADD_TO_DO:
      const itemNew = { value: payload.value, id: Date.now() };
      stateCopy.push(itemNew);
      return stateCopy;

    case UPDATE_TO_DO:
      stateCopy[payload.index].value = payload.value;
      return stateCopy;

    case DELETE_TO_DO:
      stateCopy.splice(payload.index, 1);
      return stateCopy;

    default:
      return state;
  }
}
