
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CalendarLists } from "./components/organisms/calendarList";

import { Detail } from "./components/organisms/detail";
import { Login } from "./components/organisms/login";
import { RootState } from "./store";


const App = () => {
  const { rol } = useSelector((state: RootState) => state.form.formUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route exact path="/reservations">
          {rol ? <CalendarLists /> : <Login />}
        </Route>
        <Route path="/detail">
          {rol ? <Detail /> : <Login />}
        </Route>
        <Route path="*">
          <h1>not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
