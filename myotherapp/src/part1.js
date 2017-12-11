import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import ContentMail from 'material-ui/svg-icons/content/mail';
import SocialMood from 'material-ui/svg-icons/social/mood';


const style = {
  margin: 'auto'
};

const TabsExampleIconText1 = () => (
  <Tabs inkBarStyle={{background: null}}>
    <Tab
      icon={<ActionHome/>}
      label="Home"
    />
    <Tab
      icon={<SocialNotifications/>}
      label="Notifications"
    />
    <Tab
      icon={<ContentMail/>}
      label="Messages"
    />
    <Tab
      icon={<SocialMood/>}
      />
    <TextField
      hintText="Search Twitter" id="text-field-default" style={style} hintStyle={{color: 'white'}}
    />
    <a href="" style={style}><Avatar src="https://cdn.pixabay.com/photo/2016/06/13/13/46/shark-1454245_960_720.png"/></a>
    <RaisedButton label="Tweet" style={style}/>
  </Tabs>

);
export default TabsExampleIconText1;