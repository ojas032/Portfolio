import React,{Component} from 'react';
import './Block.css'

class Block extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <div className="resume_list_block">
              <p className="resume_list_block_title">
              {this.props.title}
              </p>
              <p className="resume_list_block_date">
              {this.props.year}
              </p>
              <p>{this.props.degree}</p>
      </div>
    );
  }
}

export default Block