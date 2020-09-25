import React,{Component} from 'react';
import SkillBar from './SkillBar';
class Skills extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <SkillBar val={this.props.val1} per={this.props.per1}/>
        <SkillBar val={this.props.val2} per={this.props.per2}/>
        <SkillBar val={this.props.val3} per={this.props.per3}/>
        <SkillBar val={this.props.val4} per={this.props.per4}/>
      </div>
    );
  }
}

export default Skills;