import React from 'react';
import {
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import { theme } from './theme';
import Header from './Components/Header/Header';

function App(): React.ReactElement {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
