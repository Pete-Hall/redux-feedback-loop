import React from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

// importing components to show in the header. I know it's not a written feature but it helps with testing
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Admin from '../Admin/Admin';

// importing MUI things
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '@mui/material';


function App() {
  
  // using createTheme to change the default MUI theme. Will pass this as a prop in ThemeProvider componenet
  const theme = createTheme({ // https://mui.com/material-ui/customization/theming/, https://stackoverflow.com/questions/69506133/difference-between-mui-material-styles-and-mui-styles 
    palette: {
      primary: {
        main: colors.orange[500]
      },
    },
    components: { //https://mui.com/material-ui/customization/theme-components/#adding-new-component-variants
      // Name of the component
      MuiButton: {
        defaultProps: {
          // The default props to change
          variant: 'contained', 
          size: 'small'
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
          size: 'small'
        }
      }
    },
  });

  // declaring the reducers to show in the header
  const currentComments = useSelector(store => store.commentsReducer);
  const currentFeeling = useSelector(store => store.feelingReducer);
  const currentSupport = useSelector(store => store.supportReducer);
  const currentUnderstanding = useSelector(store => store.understandingReducer);

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <h5>Feeling: {currentFeeling}</h5>
        <h5>Understanding: {currentUnderstanding}</h5>
        <h5>Support: {currentSupport}</h5>
        <h5>Comments: {currentComments}</h5>

        {/* testing Typography component from MUI */}
        {/* <Typography variant='h5'>
          This should be Roboto h5
        </Typography> */}

      </header>

      <HashRouter>
        <Route path = "/" exact>
          <Feeling />
        </Route>
        <Route path = "/feeling">
          <Feeling />
        </Route>
        <Route path = "/understanding">
          <Understanding />
        </Route>
        <Route path = "/support">
          <Support />
        </Route>
        <Route path = "/comments">
          <Comments />
        </Route>
        <Route path = "/review">
          <Review />
        </Route>
        <Route path = "/submitted">
          <Submitted />
        </Route>
        <Route path = "/admin">
          <Admin />
        </Route>
      </HashRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
