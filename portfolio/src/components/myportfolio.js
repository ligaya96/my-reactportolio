// my portfiolio 
// need to add 6 projects
// card?
import React from "react"
import Footer from "./footer"

function Portfolio(){
    return (
     <div className="Profile">
        <h1>My Coding Profile</h1>
        <p> These projects/Assignments are the websites that i am proud of. As I progress and become a better Coder, I will be updating these websites. </p>
        <div className="links">
            {/*Group  project*/}
            <h2> Group project Lyricity!</h2>
            <a href="https://ligaya96.github.io/team9/" target="_blank">Visit Lyricity</a>
            <h2> Lee's Reptile Emporium </h2>
            <a href="https://github.com/ligaya96/team2" target="_blank">Visit Lee's Emporium!</a>
            {/*my assignments*/}
            <h2>Employee Trackboard Backend </h2>
            <a href="https://github.com/ligaya96/MyEmployee-Tracker" target="_blank">My Employee Trackboard</a>
            <h2> Fitness Tracker</h2>
            <a href="https://gentle-temple-24867.herokuapp.com/index.html" target="_blank"> My Fitness Tracker</a>
            <h2> My note Taker </h2>
            <a href="https://github.com/ligaya96/Mynote-Taker" target="_blank"> My Note Taker</a>
          </div>  
          <Footer/>        
     </div>    
    )
}
export default Portfolio;