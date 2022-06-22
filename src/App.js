import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Route from './Route';
import theme from './project/theme';

const App = () => {
  const routing = useRoutes(Route);
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
      </ThemeProvider>
  );
};

export default App;
