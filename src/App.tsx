import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { EditUserPage } from "./pages/master/users/edit-user";
import { UsersPage } from "./pages/master/users/users";
import { ReceiptPage } from "./pages/receipt";
import { theme } from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <Layout>
              <Route exact path="/receipt">
                <ReceiptPage />
              </Route>
              <Route exact path="/users">
                <UsersPage />
              </Route>
              <Route exact path="/user/edit">
                <EditUserPage />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Layout>
          </Route>
        </Switch>
      </Router>
      {/* <Login /> */}
    </ThemeProvider>
  );
};

export default App;
