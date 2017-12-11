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
  display: 'inline-block',
};


const PaperExampleSimple1 = () => (
  <div>
    <Paper style={style1} zDepth={2}>
     <a href=""><br/><Avatar size={55} src="https://cdn.pixabay.com/photo/2016/06/13/13/46/shark-1454245_960_720.png"/></a>
     <span style={{fontSize:20}}><strong><br/>Radhika Jayaraj</strong><br/>@radhika_jayaraj</span><hr/>
     Tweets<br/>0
    </Paper>
  </div>
);
export default PaperExampleSimple1;