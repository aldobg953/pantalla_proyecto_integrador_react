import React from 'react';
import logoVertical from '../media/LogoLogoPathFinderVertical.svg';
import logoFacebook from '../media/facebook.svg';
import logoInstagram from '../media/instagram.svg';
import logoLinkedin from '../media/linkedin.svg';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-logo">
                <img src={logoVertical} alt="Logo" />
            </div>
            <div class="footer-section">
                <h3>Servicio</h3>
                <a href="#">Nuestro trabajo</a>
                <a href="#">Centro de ayuda</a>
                <a href="#">FAQs</a>
            </div>
            <div class="footer-section">
                <h3>Contacto</h3>
                <p>contacto@pathfinder.com</p>
                <a href="#">Sobre nosotros</a>
                <p>614 785 6594</p>
            </div>
            <div class="footer-section">
                <h3>Dirección</h3>
                <p>Av. Montes Americanos #9501, Col.</p>
                <p>Sector 35, C.P. 31216, Chihuahua,</p>
                <p>Chih., México.</p>
            </div>
            <div class="footer-bottom">
                <div class="footer-links">
                    <a href="#">Política de privacidad</a>
                    <a href="#">Términos de servicio</a>
                </div>
                <div class="social-icons">
                    <a href="#"><img src={logoFacebook} alt="Facebook" /></a>
                    <a href="#"><img src={logoInstagram} alt="Twitter" /></a>
                    <a href="#"><img src={logoLinkedin} alt="Instagram" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;