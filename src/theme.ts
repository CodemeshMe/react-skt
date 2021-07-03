import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: green[500],
    },
  },
});
