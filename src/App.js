import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/theme';
import routes from './routes';

/* Pages */
import Homepage from './app/pages/Homepage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route
            path={routes.homepage.path}
            exact
            render={props => (
              <Homepage {...props} title={routes.homepage.title} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
