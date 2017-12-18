import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const style1 = {
  height: 200,
  width: 300,
  marginTop: 20,
  marginRight: 20,
  marginBottom: 10,
  marginLeft: 150,
  textAlign: 'center',

};

const style4 = {
  height: 400,
  width: 300,
  marginTop: 20,
  marginRight: 20,
  marginBottom: 10,
  marginLeft: 150,
  textAlign: 'center',
};

const newstyle={
  fontSize:16
};


const PaperExampleSimple1 = () => (
  <div style={{float:'left'}}>
    <Paper style={style1} zDepth={2}>
     <a href=""><br/><Avatar size={55} src="https://cdn.pixabay.com/photo/2016/06/13/13/46/shark-1454245_960_720.png"/></a>
     <span style={{fontSize:20}}><strong><br/>Radhika Jayaraj</strong></span><br/>@radhika_jayaraj<hr/>
     Tweets<br/>0
    </Paper>

    <Paper style={style4} zDepth={2}>
      <br/><strong style={{fontSize:20}}>Trends for you.</strong><a href="" style={{fontSize:14}}> Change</a><br/><br/>
      <a href="" style={newstyle}>#Gulebagavali</a><br/><br/>
      <a href="" style={newstyle}>#GujaratElection2017</a><br/>
      <span style={newstyle}>13.8K Tweets</span><br/><br/>
      <a href="" style={newstyle}>#MCAonDec21st</a><br/>
      <span style={newstyle}>9,246 Tweets</span><br/><br/>
      <a href="" style={newstyle}>#SekarReddy</a><br/><br/>
      <a href="" style={newstyle}>#INDvARG</a><br/><br/>
      <a href="" style={newstyle}>#WeekendMachan</a><br/><br/>
      <a href="" style={newstyle}>#MaxHospital</a><br/>
      <span style={newstyle}>9,963 Tweets</span><br/><br/>
   </Paper>
  </div>
  
);
export default PaperExampleSimple1;
