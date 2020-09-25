import React from 'react';
import { Waypoint } from 'react-waypoint';

class Typer extends React.Component{
  constructor(props){
    super(props);
    this.state={text:"",i:0,typ:""};
    this.type=this.type.bind(this);
  }

  type(){
    var str=this.state.typ;
    if(this.state.i<str.length){
      var p=this.state.i;
      this.setState({text:this.state.text+str.charAt(p),i:p+1});
      setTimeout(this.type,200);
    }
  }

  componentDidMount(){
    console.log(this.props.type);
    this.setState({typ:this.props.type});
  }


  render(){
    return(
      <Waypoint
    onEnter={this.type}
    onLeave={this.type}
    >
     <h2 className="section_title">{this.state.text}</h2>
    </Waypoint>
     
    );
  }
}


export default Typer;