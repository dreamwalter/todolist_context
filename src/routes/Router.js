import { Route, Switch, HashRouter } from "react-router-dom";

import ToDoPage from "./ToDoPage/ToDoPage";
import ToDoPageRedux from "./ToDoPageRedux/ToDoPageRedux";
import ModalPage from "./ModalPage/ModalPage";

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ToDoPage} />
        <Route path="/redux" component={ToDoPageRedux} />
        <Route path="/modal" component={ModalPage} />
      </Switch>
    </HashRouter>
  );
}
