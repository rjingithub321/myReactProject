import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {lightBlue100} from 'material-ui/styles/colors';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';

const TabsExampleIconText2 = () => (
  <Tabs inkBarStyle={{background: lightBlue100}}>
    <Tab
      label="Top" 
    />
    <Tab
      label="Latest"
    />
    <Tab
      label="People"
    />
    <Tab
      label="Photos"
    />
    <Tab
      label="Videos"
    />
    <Tab
      label="News"
    />
    <Tab
      label="Broadcasts"
    />
     <Tab
      icon={<NavigationMoreVert/>}
      />
  </Tabs>

);
export default TabsExampleIconText2;