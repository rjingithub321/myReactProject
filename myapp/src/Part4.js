import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

const style3 = {
  height: 300,
  width: 300,
  marginTop: 20,
  marginRight: 150,
  marginBottom: 20,
  marginLeft: 20,
  textAlign: 'center',

};
const style5 = {
  height: 150,
  width: 300,
  margin: 20,
  textAlign: 'center',

};
const newstyle1={
    fontSize:14
}

const PaperExampleSimple3 = () => (
  <div  style={{float:'left'}}>
    <Paper style={style3} zDepth={2} >
     <br/><strong style={{fontSize:25}}>Who to follow</strong><a href="" style={{fontSize:14}}>. Refresh</a><a href="" style={{fontSize:14}}>. View all</a><br/><br/>
     <div style={{padding: 10}}>
      <div style={{float: 'left'}}><a href=""><br/><Avatar src="https://cdn.pixabay.com/photo/2016/03/26/06/05/cat-1280122_960_720.jpg"/></a></div>
      <div><a href="">Mr.Awesome </a>@mr_awesome<br/><RaisedButton label="Follow" primary={true} buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}/> </div>
      <hr style={{borderTop: 1}}/>
      <div style={{float: 'left'}}><a href=""><br/><Avatar src="https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793_960_720.jpg"/></a></div>
      <div><a href="">Mrs.Awesome </a>@mrs_awesome<br/><RaisedButton label="Follow" primary={true} buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}/> </div>
      <hr style={{borderTop: 1}}/>
      <div style={{float: 'left'}}><a href=""><br/><Avatar src="https://cdn.pixabay.com/photo/2016/08/10/02/55/kitten-1582384_960_720.jpg"/></a></div>
      <div><a href="">Miss Awesome </a>@miss_awesome<br/><RaisedButton label="Follow" primary={true} buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}/> </div>
     </div>
    </Paper>
    
    <Paper style={style5} zDepth={2}>
    <br/>
     <span style={newstyle1}>© 2017 Twitter</span> 
     <a href="" style={newstyle1}> About </a>
     <a href="" style={newstyle1}>Help </a>
     <a href="" style={newstyle1}>Center </a>
     <a href="" style={newstyle1}>Terms </a>
     <a href="" style={newstyle1}>Privacy policy </a>
     <a href="" style={newstyle1}>Cookies </a>
     <a href="" style={newstyle1}>Ads info </a>
     <a href="" style={newstyle1}>Brand </a>
     <a href="" style={newstyle1}>Blog </a>
     <a href="" style={newstyle1}>Status </a>
     <a href="" style={newstyle1}>Apps </a>
     <a href="" style={newstyle1}>Jobs </a>
     <a href="" style={newstyle1}>Marketing </a>
     <a href="" style={newstyle1}>Business </a>
     <a href="" style={newstyle1}>Developers </a>
     <br/><hr/>
     <a href="" style={newstyle1}>Advertise with Twitter </a>
  </Paper>
  </div>
);
export default PaperExampleSimple3;
