import { createContext } from "react";

// 為甚麼需要id? 請參考 https://ithelp.ithome.com.tw/articles/10250936

export const initToDo = {
  data: [{ value: "資料一", id: Date.now() }],
  updateToDo: () => {},
  addToDo: () => {},
  deleteToDo: () => {}
};

export default createContext(initToDo);
