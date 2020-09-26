import React, { useState, useEffect } from "react";
import { Navbar, TodoList, Login, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <Navbar login={login} setLogin={setLogin} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <TodoList {...props} setLogin={setLogin} />}
        />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/about" exact component={About} /> */}
        {/* <Route path="/login" exact component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
