import React from "react";

function Footer(){
    const date = new Date();
    const year =  date.getFullYear();
    return(
        <footer>
        <p>Copyright Sai Uttej ⓒ {year}</p>
        </footer>
    );
}

export default Footer;