import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Footer from './components/Footer/Footer';
import { fetchMovies } from './actions/movieAction'

import { Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  grid: {
    width: '100%',
    margin: '0px'

  }
}));


const App = () => {

  const [individualDisplay, setIndividualState] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const darkerTheme = createMuiTheme({
    palette: {
      type: "dark",

    }
  })
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

  const [data, setData] = useState([]);
  const [indiviualMovieName, setIndividualMovieName] = useState('');
  const [alignment, setAlignment] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setData(dispatch(fetchMovies('All')).payload);
  }, []);
  const classes = useStyles();
  // const movies = useSelector(state => state.movies.items);

  const selectMovieShowing = (event, item) => {
    item === 'All' ? setAlignment('') : setAlignment(item);
    setData(dispatch(fetchMovies(item)).payload)
  }
  const individualCard = (item) => {
    setIndividualMovieName(item)
    setIndividualState(true)
  }
  const fullDisplay = () => {
    setIndividualState(false)
  }
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    < ThemeProvider theme={darkTheme ? darkerTheme : theme} >
      <Paper >
        <Router >
          <Grid container spacing={2} className={classes.grid} >
            <Grid item xs={12} >
              <Header
                full={fullDisplay}
                selection={selectMovieShowing}
                darkTheme={darkTheme}
                handleChangeTheme={handleChangeTheme} />
            </Grid>
            <Grid item xs={12} >
              <Body
                individualState={individualDisplay}
                card={individualCard}
                pickSelection={selectMovieShowing}
                movieData={data}
                selected={alignment}
                handleAlignment={selectMovieShowing}
                indiviualMovieName={indiviualMovieName}
              />
            </Grid>
          </Grid>
        </ Router>
        <Grid item xs={12} >
          <Footer />
        </Grid>
      </Paper>
    </ThemeProvider >
  );
}

export default App;