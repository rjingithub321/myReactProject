import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

const styling1 = {
  height: 50,
  padding: 20,
  width: 300,
  margin: 20,
  marginLeft: 100,
  textAlign: 'left',
};
const styling2 = {
  padding:20,
  height: 150,
  width: 300,
  margin: 20,
  marginLeft: 100,
  textAlign: 'left',
};
const styling3 = {
  padding:1,
  height: 300,
  width: 300,
  margin: 20,
  marginLeft: 100,
  textAlign: 'center',
};
const styling4 = {
  padding:10,
  height: 400,
  width: 300,
  margin: 20,
  marginLeft: 100,
  textAlign: 'left',
};
const styling5 = {
  height: 150,
  width: 300,
  margin: 20,
  marginLeft: 100,
  textAlign: 'center',
};
const newstyling1={
  fontSize:15
};
const newstyle2={
    fontSize:14
}

const PaperExampleSimple2 = () => (
  <div style={{float: 'left'}}>
    <Paper style={styling1} zDepth={2} ><strong>Search filters</strong><a href="" style={{fontSize: 12}}> Show</a></Paper>
    
    <Paper style={styling2} zDepth={2} >
     <strong>Related Searches</strong><br/><br/>
     <a href="" style={{fontSize:15}}>kapil sibal<br/></a>
     <a href="" style={{fontSize:15}}>bombay high court<br/></a>
     <a href="" style={{fontSize:15}}>#aadhaar<br/></a>
     <a href="" style={{fontSize:15}}>#chaupal<br/></a>
    </Paper>
    
    <Paper style={styling3} zDepth={2} >
     <h2>Who to follow</h2>
     <div style={{padding: 10}}>
     <div style={{float: 'left'}}><a href=""><br/><Avatar src="https://cdn.pixabay.com/photo/2016/03/26/06/05/cat-1280122_960_720.jpg"/></a></div>
     <div><a href="" style={{fontSize:15}}>Mr.Awesome </a><span style={{fontSize:15}}>@mr_awesome</span><br/><RaisedButton label="Follow" primary={true} buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}/> </div>
     <hr style={{borderTop: 1}}/>
     <div style={{float: 'left'}}><a href=""><br/><Avatar src="https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793_960_720.jpg"/></a></div>
     <div><a href="" style={{fontSize:15}}>Mrs.Awesome </a> <span style={{fontSize:15}}>@mrs_awesome</span><br/><RaisedButton label="Follow" primary={true} buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}/> </div>
     <hr style={{borderTop: 1}}/>
     <div style={{float: 'left'}}><a href=""><br/><Avatar src="https://cdn.pixabay.com/photo/2016/08/10/02/55/kitten-1582384_960_720.jpg"/></a></div>
     <div><a href="" style={{fontSize:15}}>Miss Awesome </a><span style={{fontSize:15}}>@miss_awesome</span><br/><RaisedButton label="Follow" primary={true} buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}/> </div>
     </div>
     </Paper>
    
    <Paper style={styling4} zDepth={2} >
      <br/><span style={{fontSize:20}}><strong>Trends for you.</strong></span><a href=""><span style={{fontSize:14}}> Change</span></a><br/><br/>
      <a href=""><span style={newstyling1}>#Gulebagavali</span></a><br/><br/>
      <a href=""><span style={newstyling1}>#GujaratElection2017</span></a><br/>
      <span style={newstyling1}>13.8K Tweets</span><br/><br/>
      <a href=""><span style={newstyling1}>#MCAonDec21st</span></a><br/>
      <span style={newstyling1}>9,246 Tweets</span><br/><br/>
      <a href=""><span style={newstyling1}>#SekarReddy</span></a><br/><br/>
      <a href=""><span style={newstyling1}>#INDvARG</span></a><br/><br/>
      <a href=""><span style={newstyling1}>#WeekendMachan</span></a><br/><br/>
      <a href=""><span style={newstyling1}>#MaxHospital</span></a><br/>
      <span style={newstyling1}>9,963 Tweets</span><br/><br/>
    </Paper>
    
    <Paper style={styling5} zDepth={2}>
    <br/>
     <span style={newstyle2}>© 2017 Twitter</span> 
     <a href=""><span style={newstyle2}> About </span></a>
     <a href=""><span style={newstyle2}>Help </span></a>
     <a href=""><span style={newstyle2}>Center </span></a>
     <a href=""><span style={newstyle2}>Terms </span></a>
     <a href=""><span style={newstyle2}>Privacy policy </span></a>
     <a href=""><span style={newstyle2}>Cookies </span></a>
     <a href=""><span style={newstyle2}>Ads info </span></a>
     <a href=""><span style={newstyle2}>Brand</span> </a>
     <a href=""><span style={newstyle2}>Blog </span></a>
     <a href=""><span style={newstyle2}>Status</span> </a>
     <a href=""><span style={newstyle2}>Apps </span></a>
     <a href=""><span style={newstyle2}>Jobs </span></a>
     <a href=""><span style={newstyle2}>Marketing </span></a>
     <a href=""><span style={newstyle2}>Business </span></a>
     <a href=""><span style={newstyle2}>Developers </span></a>
     <br/><hr/>
     <a href=""><span style={newstyle2}>Advertise with Twitter </span></a>
    </Paper>
  </div>
);

export default PaperExampleSimple2;