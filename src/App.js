import React from 'react';

import { Provider } from 'react-redux';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import { Grid, Paper } from '@material-ui/core';

import store from './store';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>

        < Router>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><Header /></Paper>
            </Grid>
            <Grid item xs={12}>
              <Body />
            </Grid>

          </Grid>
        </ Router>
        <Grid item xs={12}>
          <footer>
            THis is footer
        </footer>
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
