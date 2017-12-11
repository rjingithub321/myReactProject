import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TabsExampleIconText1 from './part1';
import AppBarExampleIcon  from './part2';
import TabsExampleIconText2 from './part3';
import PaperExampleSimple2 from './part4';
import CardExampleWithAvatar from './part5';
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
    <TabsExampleIconText1/>
    <AppBarExampleIcon/>
    <TabsExampleIconText2/>
    <PaperExampleSimple2/>
    <CardExampleWithAvatar/>
  </MuiThemeProvider>
);
export default App;
