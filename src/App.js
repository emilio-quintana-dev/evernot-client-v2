import React, { useState } from "react";
import { Navbar, TodoList, Login, SignUp, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <TodoList {...props} user={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        />
        <Route
          path="/login"
          exact
          render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/signup" exact component={SignUp} />
        {/* <Route path="/about" exact component={About} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
