import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TabsExampleIconText from './Part1';
import PaperExampleSimple1 from './Part2';
import PaperExampleSimple2 from './Part3';
import PaperExampleSimple3 from './Part4';
import PaperExampleSimple4 from './Part5';
import PaperExampleSimple5 from './Part6';
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
    <div style={{ float: 'left' }}><PaperExampleSimple1/></div>
    <div style={{ float: 'left' }}><PaperExampleSimple2/></div>
    <PaperExampleSimple3/>
    <PaperExampleSimple4/>
    <PaperExampleSimple5/>
  </MuiThemeProvider>
);
export default App;