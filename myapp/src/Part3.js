import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import {lightBlue500} from 'material-ui/styles/colors';

const style2 = {
  height: 325,
  width: 600,
  marginTop: 20,
  marginRight: 20,
  marginBottom: 20,
  marginLeft: 20,
  textAlign: 'center',

};

const PaperExampleSimple2 = () => (
  <div  style={{float:'left'}}>
    <Paper style={style2} zDepth={2} >
     <div>
      <a href="" style={{marginRight: 10}}><br/><Avatar src="https://cdn.pixabay.com/photo/2016/06/13/13/46/shark-1454245_960_720.png"/></a>
      <TextField
      floatingLabelText="What's happening?" style={{width: '80%'}} floatingLabelStyle={{color: lightBlue500}}/>
     </div>
    <br/>
     <div><h1>What? No Tweets yet?</h1>
      <p>This empty timeline won’t be around for long. Start following people and you’ll see Tweets show up here.</p>
      <RaisedButton label="Find people to follow" primary={true} />
     </div>
    </Paper>
  </div>
);
export default PaperExampleSimple2;
