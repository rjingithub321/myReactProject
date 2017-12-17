import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TabsExampleIconText from './Part1';
import PaperExampleSimple1 from './Part2';
import PaperExampleSimple2 from './Part3';
import PaperExampleSimple3 from './Part4';
import {lightBlue100, lightBlue500, lightBlue700} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    primary3Color: lightBlue100,
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <TabsExampleIconText/>
    <PaperExampleSimple1/>
    <PaperExampleSimple2/>
    <PaperExampleSimple3/>
  </MuiThemeProvider>
);
export default App;
