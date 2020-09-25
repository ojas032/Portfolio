import React ,{Component} from 'react';
import './sideBar.css';

class Sidebar extends Component{
  constructor(props){
    super(props)
  this.state={};
  }


  render(){
    return(
      <div className={this.props.change?"side clik":"side clik1"}>
        <nav className="d-flex justify-content-center align-items-center h-100">
          <ul>
            <li>Hello</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;