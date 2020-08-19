import React from 'react';
import { Provider } from 'react-redux';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Footer from './components/Footer/Footer'

import { Grid } from '@material-ui/core';

import store from './store';

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    primary: {
      light: "#7986cb",
      main: "rgba(74, 144, 226, 1)",
      dark: "rgba(29, 29, 32, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(80, 227, 194, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
})


const useStyles = makeStyles(() => ({
  grid: {
    width: '100%',
    margin: '0px'

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
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Body />
            </Grid>

          </Grid>
        </ Router>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
