import React from 'react'
import './Resume.css';
import mj from './sharmi.jpg';
import { FaDownload, FaUnderline } from "react-icons/fa";
import { Link, redirect } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import prj from './projects.jpg';
import { FaLinkedinIn } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";



 


const Resume = () => {
  return (
    <div>
            <div id="home">
         <nav>
    
        <div class="top">
               <div  class="head-top">
                    <h2 class="s-head" >Shar<span>mila..</span></h2>
                </div>
                   <div class="topnav" >
                         <a href="#home">Home</a>
                         <a href="#about">About</a>
                         <a href="#education">Education</a>
                         <a href="#projects">Projects</a>
                         <a href="#contact">Contact</a>
                         <button class="navcv"><a style={{paddingRight:6 }}  href="Sharmila_Nagaraj now" download="" > Download CV</a></button> 
                    </div>
        </div>
   

</nav>
    
    <div class="flex-part">
      <div class="second-part">  
            <div>
                <button class="name-butt" >Sharmila Nagaraj</button>
                <h1 class="name" >I'M <span className="auto-type" >Full Stack<br/> Developer & </span>Sowftware Tester</h1>
            </div>
            <div class="para">
                <p  class="paragraph">Enthusiastic BCA graduate with Java fullStack Web Development & Software testing with a passion for <br/> creating scalable and reliable applications.</p>
            </div>
            <div class="hire-cv">
                <button class="hire">Hire me</button>
                <button class="cv1"><a class="download" href="Sharmila_Nagaraj now" download="">Download CV<Link style={{paddingLeft:3}} ><FaDownload /></Link></a></button>
            </div>

            <div className='elements'>

            <div className='linkers' >
                 <Link><MdMailOutline /></Link>
            </div>
            <div className='linkers1' >
                 <Link to="https://github.com/Sharmila-Developer-Hub" ><FiGithub /></Link>
            </div>
            <div className='linkers2' >
                 <Link to= "https://www.linkedin.com/in/mjsharmi321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></Link>
            </div>
            <div className='linkers3' >
                 <Link><SiWhatsapp /></Link>
            </div>

            </div>
           
      </div>
      
      <div class="img-part">
         <img src={mj} alt=""/>
      </div>
      
    </div>
</div>
    
   
            
                  
            {/* about */}
            
           
         <div id="about">

                  <div class="about-name">
                    <h1 class="me">About<span>Me</span> </h1>
                  </div>
             <div  class="about-top">
                 <div class="column1">
                     <h2 class="intro">My Introduction</h2>
                     <p class="para-about">Enthusiastic and highly motivated BCA graduate with strong knowledge in Java FullStack Web
Development, along with practical exposure to Manual and Automation Testing using Selenium, TestNG,
and JUnit. Passionate about full-stack development and software quality, seeking an entry-level role to
contribute to scalable web applications.</p>
                        <button class="p-butt">My Self</button>
                    </div>
                 <div class="skill-top">
                    <h2>Skills</h2>
                    <div class="skill-box">
                      <button class="skill-butt">HTML</button>
                      <button class="skill-butt">CSS</button>
                      <button class="skill-butt2">JAVASCRIPT,OOP'S</button>
                      <button class="skill-butt">REACT</button>
                     
                      <button class="skill-butt2" style={{marginLeft:20}}>EXPRESS JS</button>
                      <button class="skill-butt">NODE JS</button>
                      <button class="skill-butt">JAVA</button>
                      <button class="skill-butt">MYSQL</button>
                      <button class="skill-butt2" style={{marginLeft:20, marginTop:12}}>MANGO DB</button>
                      <button class="skill-butt2">SPRINGBOOT</button>
                      <br/>
                      <button class="skill-butt2"style={{marginLeft:20,marginTop:12}} >MANUAL TESTING</button>
                      <button class="skill-butt2" style={{width:190}}>AUTOMATION TESTING</button>
                      {/* style={{marginLeft:17}} */}
                      {/* style={{marginBottom:10}} */}
                      {/* style={{marginLeft:17}} */}
                    </div>
                 </div>
             </div>


         </div>

         <div id="education">
         <div>
          <h2 className='edu-head'>My Ed<span>ucation</span></h2>
          </div>

     <form className='edu-list'>

      <div className='flexedu1'>
                                <div className='edulist1'>
                                      <h3 style={{textDecorationLine:'underline' }} >Java FullStack WebDevelopment & Software Testing</h3>
                                     <p>KGISL MicroCollege , Coimbatore</p>
                                     <button>A Grade</button><button> Year 2024-2025 </button>
                                 </div> 
                                 <div  className='edulist2'>
                                     <h3 style={{textDecorationLine:'underline' }}> Bachelor Of Computer Applications </h3>
                                     <p>Immaculate College For Women,<br/> Affliated to Annamalai
                                      University ,Cuddalore</p>
                                     <button>8.33 CGPA</button><button> Year 2021-2024 </button>
                                 </div> 
                                 

                                
                                  <div  className='edulist3'>
                                     <h3 style={{textDecorationLine:'underline' }}>HSC</h3>
                                     <p>Govt Girls.Hr.Secondary School, Cuddalore</p>
                                     <button>89%</button><button> Year 2019-2021 </button>
                                 </div> 

     <br/>
                                 
                                  <div  className='edulist4'>
                                     <h3 style={{textDecorationLine:'underline' }}> SSLC</h3>
                                     <p>Govt Girls.Hr.Secondary School, Cuddalore</p>
                                     <button> 80% </button> <button> Year 2018-2019 </button>
                                 </div> 
                                  <div  className='edulist5'>
                                     <h3 style={{textDecorationLine:'underline' }}>Certifications</h3>

                                   <a href='https://drive.google.com/file/d/1dKQxlBIs6zG56MvhCoe8PY5cpTp7Uu9Q/view?usp=drivesdk'><FaExternalLinkAlt />Google Finance Data Analyst
                                        Proffesional Certificate</a> <br/>
                                       <a href='https://drive.google.com/file/d/1z9c4nZUwuAuqNzrxHzeqqd27Haw6j1VA/view?usp=drivesdk'><FaExternalLinkAlt />Internet Of Things Certification</a>
                                        <br/>
                                         <a href='https://drive.google.com/file/d/1w6Os64hoBk_kHICIB0RtMhRqtV3MBhJg/view?usp=drivesdk'><FaExternalLinkAlt />Industrial Internet Of Things Certification</a>
                                 </div> 
                                
                                 </div>
                              </form> 
      </div>








         {/* projects */}

         <div id='projects'>
             <div className='edu-name'>
              <h1> My Pro<span>jects</span> </h1>
             </div>
   <div className='shadow-box'>
        <article>
         <div className='image'>
                 <img src={prj} alt=''/> 
         </div>
         <a href="https://6847b20370e65a523f94be7f--fabulous-dasik-98f2f1.netlify.app/"> 
            View Code..
         
         <div  className='content'>
            <p>Restaurant Portfolio With React</p>
         </div>
         </a>
         </article>
         <article>
         <div className='image'>
                 <img src={prj} alt=''/> 
         </div>
         <a href="https://6847b2dcda0f0a0b0de4bffc--dashing-twilight-beb5b3.netlify.app/"> 
            View Code..
         
         <div  className='content'>
            <p>Currency Converter With React</p>
         </div>
         </a>
         </article>
         <article>
         <div className='image'>
                 <img src={prj} alt=''/> 
         </div>
         <a href='https://github.com/MjSharmi-Developer24/Node-Express-mongodb-crud'> 
            View Code..
         
         <div  className='content'>
            <p>CRUD Operation Using MongoDB </p>
         </div>
         </a>
         </article>
         <article>
         <div className='image'>
                 <img src={prj} alt=''/> 
         </div>
         <a href='https://github.com/MjSharmi-Developer24/SweetShop_AutomationProject'> 
            View Code..
         
         <div  className='content'>
            <p>SweetShop Automation Project </p>
         </div>
         </a>
         </article>


</div>

 </div>     
 
        
  <br/><br/>   



{/* contact */}
         
        <div id="contact">
                  <div class="get-contact">
                       <p>Get In Touch</p>
                       <p className='ptag'>Contact Me
                       </p>
                  </div>
                     <div className='topform'>
                            <form className='form1'>
                                <div className='contact-box'>
                                      <h3> Email </h3>
                                     <p>mjsharmi321@gmail.com</p>
                                     <a href="" >Write me</a>
                                 </div> 
                                 <div  className='contact-box1'>
                                     <h3>Whatsapp</h3>
                                     <p>9360947840</p>
                                     <a href="" >Write me</a>
                                 </div>
                                 <div  className='contact-box1'>
                                     <h3>Address</h3>
                                     <p>Co-Operative Nagar,
                                       Koothapakkam,<br/>
                                       Cuddalore - 607401</p>
                                     <a href="" >TamilNadu</a>
                                 </div> 
                                 
                              </form> 
                              <form className='form2'>
                                 <input type='' className='username'  placeholder='Username' /><br/>
                                 <input type='' className='username'  placeholder='Email' /><br/>
                                 <input type='' className='username'  placeholder='Phone' />
                                 <textarea className='tarea' placeholder='Message'></textarea>
                                 <div> <button  className='message'>Send Message</button></div>
                              </form>
                    </div>
                    <div>
                     <h1>sharmila</h1>
                    </div>
                 

         
         </div>
</div>
         
  )
}

export default Resume;