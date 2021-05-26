// contact info from portfolio// contact info from portfolio
import React from "react";
import Footer from "./footer"
function ContactMe() {
    return (
        <section className = "aboutme">
            <div className = "contantinfo">
                <ul className = "list-group list-group-flush"> 
                   <li >Email : Ligaya96@gmail.com </li>
                   <li >Github : Ligaya96 </li>
                   <li>LinkeIn : <a href="https://www.linkedin.com/in/ligaya-herndon-phb9881b9/" target="_blank" rel="noreferrer">My LinkedIn</a> </li>
                  <li> My Coding Resume : <a href=" https://docs.google.com/document/d/e/2PACX-1vTdb9O7rTmuCsi_Cm7UGczAb86i6SmPU41J8RExQMfqY-gFnJ3om392lloL1AV8zQ/pub" target="_blank">Ligaya Resume!</a> </li>
                </ul>
            </div>
            <Footer />
        </section>
    );
}
export default ContactMe;