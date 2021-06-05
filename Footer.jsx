import React from"react";

function Footer() {
 var currYear = new Date().getFullYear();
 
  return (
   
     <footer className="Footer">
      <p>Copyright @ {currYear}</p>
     </footer>
      
  );
}

export default Footer;