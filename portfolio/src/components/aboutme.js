//about me portfilio 
import React from "react";
import Footer from "./footer"
//adding resume and linkin github info here. 
Function About () {
  return (
  <main className = "aboutme">
      <div classNam = "text-center">
          <h1> About Ligaya </h1>
        <div className = "row">
            <div className = "pictureofme">
             {/* picture of me */} 
             <img src="./images/professional.JPG" alt="professional" className="img-thumbnail" /> 
            </div>
            {/* A paragraph about me */}
            <p className="text"> 
            Born and raised in Tacoma, WA. I attended and graduated from Mount Tahoma High School in 2011. In 2012, I began my college career and attended Tacoma Community College. I graduated in 2014 with an AA in Science, that same year, I went to Clover Park Technical College to get my Hemodialysis/Phlembotomy certification. I graduated from Clover Park on the Deans List, and soon became employed at CHI Franscian St. Joesph Hospital as a Laboratory Assistant. I then transferred to St. Clare Hospital, which is where i currently work. When i am not at work, i love spending time with my dogs. Because of my love for animals, I shortly worked at BluePearl Vet as a receptionist. I luckily got to work with various animals and enjoyed my time there. In 2020, I focused all my time and attention to being at the hospital working full time, and thankfully being able to help those who fell victims to Covid-19. As rewarding working in the medical field is, there is alot of dangerous exsposures that we have to endure. I am ready to leave the medical field in light of something I can enjoy and feel like I am doing more to help my communtiy. I am excited and i am looking forward to being a coder. 
            </p>
        </div>
      </div>
      <Footer />
   </main>
  );
}
export default About;

