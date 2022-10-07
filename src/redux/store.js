import { createStore } from "redux";

import toDoReducer from "./reducers/toDoReducer";

export default createStore(toDoReducer);
