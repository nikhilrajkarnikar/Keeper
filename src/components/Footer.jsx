import React from "react";

const date = new Date();
var currentYear = date.getFullYear();

function Footer(){
    return (
        <footer>
            <p>	Copyright &copy; {currentYear}</p>
        </footer>
    );

}

export default Footer;