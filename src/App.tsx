import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home";
import { theme } from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
