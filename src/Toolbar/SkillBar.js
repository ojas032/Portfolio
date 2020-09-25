import React,{Component} from 'react';
import './SkillBar.css';
import { Waypoint } from 'react-waypoint';


class SkillBar extends Component{
  constructor(props){
    super(props);
    this.state={width:0,j:0};
    this.progress=this.progress.bind(this);
  }

  componentDidMount(){
    this.setState({width:this.props.per});
  }

  async progress(){
   
    var i=this.state.width;
    var j1=this.state.j;
    if(j1<=i){
      this.setState({j:j1+1})
      setTimeout(this.progress,5);
    }
  }


  render(){
    var w=this.state.j;
    var text="progress-bar color font";
    return(
      <div class="skillbar_style">
        <p>
          <span className="progress_heading">{this.props.val}</span>
          <span className="progress_percentage">{this.props.per}%</span>
        </p>
        <Waypoint onEnter={this.progress}>
        <div class="progress">
          <div class={text} role="progressbar"
          style={{width:w+"%"}} aria-valuenow="75"
           aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </Waypoint>
      </div>
    );
  }
}

export default  SkillBar;