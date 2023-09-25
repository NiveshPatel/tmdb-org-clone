import React from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
import ContentWrapper from "../ContentWrapper/ContentWrapper"
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/profile.php?id=100011213850922">

                    <span className="icon">
                        
                        <FaFacebookF />
                      
                        
                    </span>
                    </a>

                  <a className="icon" href="https://instagram.com/iamniveshrajeswaripatel?igshid=MzMyNGUyNmU2YQ==">

                    <span className="icon">
                        <FaInstagram />
                    </span>
                  </a>
                  <a className="icon" href="https://instagram.com/iamniveshrajeswaripatel?igshid=MzMyNGUyNmU2YQ==">

                    <span className="icon">
                        <FaTwitter />
                    </span>
                  </a>
                    <a className="icon" href="https://www.linkedin.com/in/nivesh-patel-b4882022a">

                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
