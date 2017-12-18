import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import AVRepeat from 'material-ui/svg-icons/av/repeat';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import Divider from 'material-ui/Divider';

const style = {
  height: 'auto',
  width: 600,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};

const CardExampleWithAvatar = () => (
 <Paper style={style} zDepth={1}>
  <Card>
    <a href="" >
    <CardHeader
      title="beebom"
      subtitle="@beebomco .Dec 6"
      avatar="https://pbs.twimg.com/profile_images/522662074216755202/cbbGMYg5_bigger.jpeg"/>
    </a>
    <a href="" class="tweet">
    <CardMedia>
      <img src="https://pbs.twimg.com/media/DQWhXm5UEAAGphl.jpg" alt="" />
    </CardMedia>
    <CardText>
      65-year-old Sajidha Begum has lost her sight and fingers, and she has no way of submitting the necessary fingerprints and iris scans. 
      In August, however, the Indian government sent a letter to her saying her pension was being taken away unless it was linked to an Aadhaar card. 
    </CardText>
    </a>
    <CardActions>
      <FlatButton label="17" icon={<CommunicationChatBubbleOutline/>}/>
      <FlatButton label="115" icon={<AVRepeat/>}/>
      <FlatButton label="272" icon={<ActionFavoriteBorder/>}/>
      <FlatButton icon={<CommunicationMailOutline/>}/>
      <FlatButton icon={<NavigationMoreHoriz/>}/>  
    </CardActions>
  </Card>
  <Divider/>
  
  <Card>
    <a href="" >
    <CardHeader
      title="Karthik"
      subtitle="@beastoftraal .6h"
      avatar="https://pbs.twimg.com/profile_images/665758017443397632/E5JfhqMw_bigger.jpg"/>
    </a>
    <a href="" class="tweet">
    <CardText>
      Idea for numerologists, for a new paid service: Inspecting the Aadhaar numbers of bride and groom to see how much it matches. 
    </CardText>
    </a>
    <CardActions>
      <FlatButton label="3" icon={<CommunicationChatBubbleOutline/>}/>
      <FlatButton label="15" icon={<AVRepeat/>}/>
      <FlatButton label="14" icon={<ActionFavoriteBorder/>}/>
      <FlatButton icon={<CommunicationMailOutline/>}/>
      <FlatButton icon={<NavigationMoreHoriz/>}/>  
    </CardActions>
  </Card>
  <Divider/>
  
  <Card>
    <a href="" >    
    <CardHeader
      title="Kaushal K Vidyarthee"
      subtitle="@vidyarthee .Dec 9"
      avatar="https://pbs.twimg.com/profile_images/918748552490205184/MsW9HHpP_bigger.jpg"/>
    </a>
    <a href="" class="tweet">
    <CardMedia>
      <img src="https://pbs.twimg.com/card_img/939334438944571393/YfwA3z5Z?format=jpg&name=800x419" alt="" />
    </CardMedia>
    <CardText>
      <a href="">#Aadhaar</a> disruption: In Jharkhand’s poorest regions, hundreds of people are being routinely denied the <a href="">#RightToFood </a>
      because beneficiaries have failed to enrol or get it linked with their ration cards or network & authentication failed at fair price shops. 
    </CardText>
    </a>
    <CardActions>
      <FlatButton label="5" icon={<CommunicationChatBubbleOutline/>}/>
      <FlatButton label="165" icon={<AVRepeat/>}/>
      <FlatButton label="253" icon={<ActionFavoriteBorder/>}/>
      <FlatButton icon={<CommunicationMailOutline/>}/>
      <FlatButton icon={<NavigationMoreHoriz/>}/>  
    </CardActions>
  </Card>
  <Divider/>
  
  <Card>
    <a href="" >
    <CardHeader
      title="Rahul Singh"
      subtitle="@rahulsingh1966 .Dec 6"
      avatar="https://pbs.twimg.com/profile_images/927960215378649088/ec2edQil_bigger.jpg"/>
    </a>
    <a href="" class="tweet">  
    <CardText>
      Finally. Good news from <a href="">@UIDAI </a> 
      If your Aadhaar Card is not linked with your marriage certificate before 31st December 2017, you will be considered single from 1st Jan 2018.
    </CardText>
    </a>
    <CardActions>
      <FlatButton label="48" icon={<CommunicationChatBubbleOutline/>}/>
      <FlatButton label="415" icon={<AVRepeat/>}/>
      <FlatButton label="809" icon={<ActionFavoriteBorder/>}/>
      <FlatButton icon={<CommunicationMailOutline/>}/>
      <FlatButton icon={<NavigationMoreHoriz/>}/>  
    </CardActions>
  </Card>
  
 </Paper>
);

export default CardExampleWithAvatar;
