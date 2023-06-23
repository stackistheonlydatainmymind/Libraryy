import React from 'react'
import{NavLink} from "react-router-dom";
import '../Home.css';

const Home = () => {
  return (
    <>
       <div className="background firstsection">
        <div className="main-box">
            <div className="firsthalf">
                      <h1 >welcome to the E-library</h1>
             <p>
              Tech-Library is NavLink platform where students will find all the Study Material 
              that they need in their study for about free of cost. No hidden costs and 
              fully
              <br/>
              Lets go...
             </p>
             <div className="button">
                 <button className="home_btn">subscribe</button>
                 <button className="home_btn"><NavLink to="https://www.youtube.com/c/AKTUDigitalEducationUP"> watch video </NavLink></button>
             </div>
            </div>
        </div>
      </div>
      <div id="box">
      <div id="heading"><h1 >Study material for btech</h1></div>
      <div id="content">
      <div className="container">
        <div className="row1"> <h1>Btech first year</h1></div>
        <div className="row2"><p>
          Get ready to explore all your favorite books like Quantums, course books, and handwritten notes.
          Books Can never take place of notes so we have handwritten notes in good handwriting of the best teachers of AKTU just for you and that is absolutely free.

        </p></div>
        <div className="row3"><NavLink to="/btech_first" className="btn">visit page</NavLink></div>
      </div>
      <div className="container">
        <div className="row1"> <h1>Btech second year</h1></div>
        <div className="row2"><p>
          Get ready to explore all your favorite books like Quantums, course books, and handwritten notes.
          Books Can never take place of notes so we have handwritten notes in good handwriting of the best teachers of AKTU just for you and that is absolutely free.

        </p></div>
        <div className="row3"><NavLink to="/btech_second" className="btn">visit page</NavLink></div>
      </div>
      <div className="container">
        <div className="row1"> <h1>Btech Third year</h1></div>
        <div className="row2"><p>
          Get ready to explore all your favorite books like Quantums, course books, and handwritten notes.
          Books Can never take place of notes so we have handwritten notes in good handwriting of the best teachers of AKTU just for you and that is absolutely free.

        </p></div>
        <div className="row3"><NavLink to="/btech_third" className="btn">visit page</NavLink></div>
      </div>
      <div className="container">
        <div className="row1"> <h1>Btech fourth year</h1></div>
        <div className="row2"><p>
          Get ready to explore all your favorite books like Quantums, course books, and handwritten notes.
          Books Can never take place of notes so we have handwritten notes in good handwriting of the best teachers of AKTU just for you and that is absolutely free.
        </p></div>
        <div className="row3"><NavLink to="/btech_fourth" className="btn">visit page</NavLink></div>
      </div>
         </div>
        </div>
      <div id ="contact" >
        
        <form>
            <div className="message"><h1>Contact Us</h1></div>
            <div className = "form">
            <h3>Name</h3>
            <input type="text" name="name" className="input" placeholder="Enter your name"/ ><br/>
            <h3>Address</h3>
            <input type="text" name="locallity"  className="input" placeholder="Enter your locality"/><br/>
            <h3>Phone Number</h3>
            <input type="text" name="phone"  className="input"  placeholder="Enter your phone number"/><br/>
            <h3>Email</h3>
            <input type="email" name="email" className="input" placeholder="Enter your email" /><br/>
            <h3>Message</h3>
            <textarea className="input" name ="message" cols="30" rows="5"></textarea><br/>
            <input type="submit" name="" className="row3 btn-form" value="Submit"/>
           </div>
       </form>
      </div>
    </>
  );
}

export default Home