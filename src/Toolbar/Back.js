import React,{Component} from 'react';
import './Back.css';


class Back extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="back_dark" onClick={this.props.change}>
      </div>
    );
  }
}

export default Back;