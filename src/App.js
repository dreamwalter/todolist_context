import ToDoContext from "./context/ToDoContext";
import Router from "./routes/Router";

import useToDo from "./utils/useToDo";

// Redux相關設定
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  // 將ToDoList的運作邏輯封裝在custom hook中
  // 這樣的做法除了方便重複利用，也能避免 App.js中出現過多程式碼
  const { toDo, addToDo, updateToDo, deleteToDo } = useToDo();

  return (
    <Provider store={store}>
      <ToDoContext.Provider
        value={{
          data: toDo,
          updateToDo: updateToDo,
          addToDo: addToDo,
          deleteToDo: deleteToDo
        }}
      >
        <Router />
      </ToDoContext.Provider>
    </Provider>
  );
}
