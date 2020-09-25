import React,{Component} from 'react';
import Sidebar from './Toolbar/sideBar';
import Back from './Toolbar/Back';
import './App.css';
import  Img from './assets/img.jpg'
import { Waypoint } from 'react-waypoint';
import Typer from './Toolbar/Typer';
import Block from './Toolbar/Block';
import Skills from './Toolbar/Skills';
import Contact from './Toolbar/Contact';
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component{
  constructor(){
    super();
    this.state={loading:true,scrolled:false,clicked:false,hello:"",resume:""}
    this.sideBarEventHandler=this.sideBarEventHandler.bind(this);
   
  }

  


  sideBarEventHandler(){
    this.setState({clicked:!this.state.clicked});
  }

  

  componentDidMount(){
    window.addEventListener('scroll',()=>{
      console.log(window.scrolly);
      const isTop=window.scrollY<80;
      if(isTop===true){
        this.setState({scrolled:false});
      }
      else{
        this.setState({scrolled:true})
      }
    });

    setTimeout(()=>{
      this.setState({loading:false})
    },1000);

    
  }


  componentWillUnmount(){
    window.removeEventListner('scroll');
  }



  render(){
    let side=<div/>
    let back=<div/>
    if(this.state.clicked===true){
      side=<Sidebar/>
      back=<Back  change={this.sideBarEventHandler}/>
    }

    return(
     <div className="h-100" >
     {this.state.loading?
     
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="spinner-border text-info " role="status">
        </div>
      </div>
    
    :<div>
    {side}
    {back}
      
      <header className="main-header">
      <div className={this.state.scrolled?"menu col-md-12 disp ":"menu__wrapper col-md-12 disp "}>
            <nav className="container">
              <ul>
                <li>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                  > 
                Hello</Link></li>
                <li>
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  duration={500}
                  >
                Resume</Link></li>
                <li>
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  duration={500}
                  >
                Contact</Link></li>
              </ul>
            </nav>

            
        </div >
        <div className={this.state.scrolled?"disp2":"disp1"}>
          <i className="fa fa-bars" onClick={this.sideBarEventHandler}  change={this.state.clicked.toString()}></i>
          </div>
      <div className="container">
          
          
      <div className="row">
              <div className="col-md-4 personal_img">
              <img class alt="avatar" src={Img}/>
              </div>
              <div className="col-md-8">
                <p className="profile_name">Ojas Gupta</p>
                <p className="profile_work">frontend developer, QA-engineer</p>
                <div className="profile_contact   ">
                  <dl className="contact-list profile_opacity">
                    <dt>Age:</dt>
                    <dd><a>21</a></dd>
                    <dt>Phone:</dt>
                    <dd><a>(+91) 7985716141</a></dd>
                    <dt>Email:</dt>
                    <dd><a>ojasgupta.456@gmail.com</a></dd>
                    <dt>Address:</dt>
                    <dd><a>D-145 Illahibhag,Gorakhpur</a></dd>
                  </dl>
                </div>

                <p className="personal-profile__social">
                  <a href="https://github.com/ojas032"><i className="fa fa-github"></i></a>
                   <a href="https://www.linkedin.com/in/ojas-gupta-70221415b?originalSubdomain=in"><i className="fa fa-linkedin-square"></i></a>
                    <a href="#"><i className="fa fa-facebook-square"></i></a>

                </p>
            </div>
          </div>
      </div>    
      </header>
     
      <section className="container section" id="section1">
        <div className="row">
          <div className="col-md-10">
          <Typer type="Hello_" className="section_title"></Typer>
            
            <p className="section_detail">
            I am pursuing B.Tech in Computer Science and Engineering.I am intrested in Web Development and Competitive Programming.I also hold 4-star at Codechef and Specialist at Codeforces.I am extremely
            excited to explore plethora of jobs in my field.I am a
             Fast learner, hard worker and team player who is proficient in
            an array of programming languages.Looking for an opportunity to showcase my skills.
            </p>
            <button type="button" className="btn section_btn">
            <i className="fa fa-download"> </i>
            <a className="link" href="https://docs.google.com/document/d/1LubEDjryJRxwr3a3BIf3H5ClLfXBsVRk7_Is7QJSS6Y/edit"> Download CV</a></button>
          </div>  
        </div>
      </section>
      <hr/>
      <section className="container section" id="section2">
        <div className="row">
          <div className="col-md-10">
           <Typer type="Resume_" className="section_title"></Typer>
          
          <p className="section_detail">Quest to work and learn in a real professional and vying ambience
          that enables me to cope with the emerging as well as latest technology and scope of widening 
          the spectrum of my knowledge</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 resume_list">
            <h3 className="resume_title">education</h3>
            <Block
            title="University Institute of Engineering and Technology, Kanpur"

            year="2017 - 2021"

            degree="Bachelor of Computer Science & Engineering"
            ></Block>
            <Block
            title="Stepping Stone Childrens Academy"
            year="2015 - 2016"
            degree="Intermediate"
            ></Block>
            <Block
            title="Stepping Stone Childrens Academy"
            year="2013 - 2014"
            degree="Highscool"
            ></Block>
          
          </div>
          
        </div>

        <div >
          <h3 className="resume_title">General Skills</h3>
          <div className="row">
            <div className="col-md-5 mr-auto">
              <Skills
                val1="html" per1="80"
                val2="css"  per2="80"
                val3="javascript" per3="70"
                val4="react.js" per4="50"
              />
            </div>
            <div className="col-md-5 mr-auto">
            <Skills
                val1="C/C++" per1="80"
                val2="java"  per2="70"
                val3="python" per3="70"
                val4="MERN" per4="50"
            />
            </div>
          </div>
        </div>

      </section>
      <section id="section3">
        <Contact/>
      </section>
      
      
    </div>
     }
     </div>
      
    );
  }
}

export default App;
