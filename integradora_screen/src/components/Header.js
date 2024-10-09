import React, { useState } from 'react';
import logoHorizontal from '../media/LogoLogoPathFinderHorizontal.svg';
import idiomaIcon from '../media/navbaricons/lenguage.png';
import quienesSomosIcon from '../media/navbaricons/about.png';
import loginIcon from '../media/navbaricons/enter.png';
import registerIcon from '../media/navbaricons/agregar-usuario.png';

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Español');

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleDropdown = (event) => {
        event.currentTarget.querySelector('.dropdown-menu').classList.toggle('show');
    };

    return (
        <header class={`header ${isExpanded ? 'expanded' : ''}`}>
            <nav class="navbar">
                <div class="navbar-logo">
                    <a href="@{/inicio}">
                        <img id="navbar-logo" src={logoHorizontal} alt="Logo" />
                    </a>
                    <hr />
                    <button class={`hamburger-menu ${isExpanded ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div class="navbar-links">
                    <div class="link language-dropdown" onClick={toggleDropdown}>
                        <img class="link-icon" src={idiomaIcon} alt="Language" />
                        <span class="dropdown-toggle">{selectedLanguage}</span>
                        <ul class="dropdown-menu">
                            <li><a href="#" onClick={() => setSelectedLanguage('Español')}>Español</a></li>
                            <li><a href="#" onClick={() => setSelectedLanguage('English')}>English</a></li>
                            <li><a href="#" onClick={() => setSelectedLanguage('Français')}>Français</a></li>
                        </ul>
                    </div>
                    <a href="@{/acercade}">
                        <div class="link">
                            <img class="link-icon" src={quienesSomosIcon} alt="About" />
                            <span>Quienes Somos</span>
                        </div>
                    </a>
                    <a href="@{/login}">
                        <div class="link">
                            <img class="link-icon" src={loginIcon} alt="Login" />
                            <span>Inicio Sesión</span>
                        </div>
                    </a>
                    <a href="@{/registro}">
                        <div class="link" id="link-register">
                            <img class="link-icon" src={registerIcon} alt="Register" />
                            <span>Crea Cuenta</span>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;