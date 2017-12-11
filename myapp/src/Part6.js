import React from 'react';
import Paper from 'material-ui/Paper';

const style5 = {
  height: 150,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const newstyle1={
    fontSize:14
}

const PaperExampleSimple5 = () => (
  <div>
   <Paper style={style5} zDepth={2}>
    <br/>
     <span style={newstyle1}>© 2017 Twitter</span> 
     <a href=""><span style={newstyle1}> About </span></a>
     <a href=""><span style={newstyle1}>Help </span></a>
     <a href=""><span style={newstyle1}>Center </span></a>
     <a href=""><span style={newstyle1}>Terms </span></a>
     <a href=""><span style={newstyle1}>Privacy policy </span></a>
     <a href=""><span style={newstyle1}>Cookies </span></a>
     <a href=""><span style={newstyle1}>Ads info </span></a>
     <a href=""><span style={newstyle1}>Brand</span> </a>
     <a href=""><span style={newstyle1}>Blog </span></a>
     <a href=""><span style={newstyle1}>Status</span> </a>
     <a href=""><span style={newstyle1}>Apps </span></a>
     <a href=""><span style={newstyle1}>Jobs </span></a>
     <a href=""><span style={newstyle1}>Marketing </span></a>
     <a href=""><span style={newstyle1}>Business </span></a>
     <a href=""><span style={newstyle1}>Developers </span></a>
     <br/><hr/>
     <a href=""><span style={newstyle1}>Advertise with Twitter </span></a>
  </Paper>
 </div>
);
export default PaperExampleSimple5;