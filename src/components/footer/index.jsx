import React from "react";
import {
	FaYoutube,
	FaGithub,
	FaLinkedinIn,
	FaStackOverflow,
	FaInstagram,
} from "react-icons/fa";
import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
const Footer = () => {
	return (
		<Section
			background='dark'
			className='footer'>
			<div className='footer-contain-wrapper'>
				<div className='footer-logo'>
					<img
						src={Logo}
						alt='Pradip Chaudhary'
					/>
				</div>
				<ul className='footer-menu-item'></ul>
				<div className='social-icons'>
					<SocialIcon
						color='#FF0000'
						icon={<FaYoutube />}
						link='https://www.youtube.com'
					/>
					<SocialIcon
						color='#0D2636'
						icon={<FaGithub />}
					/>
					<SocialIcon
						color='#0A66C2'
						icon={<FaLinkedinIn />}
					/>
					<SocialIcon
						color='#f2740d'
						icon={<FaStackOverflow />}
					/>
					<SocialIcon
						color='#E84C88'
						icon={<FaInstagram />}
					/>
				</div>
				<div className='bottom-bar'>
					<div className='copyright-text'>
						Copyright 2022 JS Dev Hindi | All Rights Reserved.
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Footer;
