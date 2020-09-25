import React,{Component} from 'react';
import Typer from './Typer';
import './Contact.css';
import { Waypoint } from 'react-waypoint';

class Contact extends Component{
  constructor(props){
    super(props);
    this.state={top:100};
    this.move=this.move.bind(this);
  }

  move(){
    var i=this.state.top;
    var j=0;
    if(i>j){
      this.setState({top:i-1});
      setTimeout(this.move,1);
    }
  }

  render(){
    var tp=this.state.top;
    return(
      <Waypoint onEnter={this.move}>
        <section className="clr" style={{position:"relative",top:tp}}>
          <div className="container Contact_override">
            <div className="row">
              <div className="col-md-12 Contact_title">
                <Typer type="Get in touch_" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-lg-4">
                <div className="contacts-list">
                  <dl className="contact_list">
                    <dt>Phone:</dt>
                    <dd>(+91) 7985716141</dd>
                    <dt>Email:</dt>
                    <dd>ojasgupta.456@gmail.com</dd>
                    <dt>Skype:</dt>
                    <dd>iamojas</dd>
                  </dl>
                </div>
                <div className="contact_social">
                  <ul>
                  
                    <li><a href="https://www.linkedin.com/in/ojas-gupta-70221415b/">LinkedIn</a></li>
                    <li><a href="https://github.com/ojas032">GitHub</a></li>
                    <li><a href="https://www.codechef.com/users/zamer">Codechef</a></li>
                    <li><a href="https://codeforces.com/profile/ojas11">Codeforces</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 col-lg-5">
                <div className="contact_form">
                  <p className="contact_form_title">Or just write me a letter here_</p>
                  <form>
                    <div className="form-group">
                      <input className="form-field" placeholder="Your Name" type="text" required data-touched="false"></input>
                    </div>
                    <div className="form-group">
                      <input className="form-field" placeholder="Your e-mail" type="text" required data-touched="false"></input>
                    </div>
                    <div className="form-group">
                      <textarea className="form-field" placeholder="Your e-mail" type="text" required data-touched="false"></textarea>
                    </div>
                    <div className="form-group">
                      <button type="button" class="btn ">SEND</button>
                    </div>
                  </form>
                </div>
                <div className="footer">
                <p>© 2020 Ojas Gupta. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>  
        </section>
    </Waypoint>
    );
  }
}


export default Contact;


