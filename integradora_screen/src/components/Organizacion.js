import React from 'react';
import universidadIcon from '../media/universidad-icon.png';
import areasIcon from '../media/areas-icon.png';
import carreraIcon from '../media/carrera-icon.png';

const Organizacion = () => {
    return (
        <div class="organizacion">
            <div class="organizacion-text">
                <h1 class="text-gradient">Organización eficiente</h1>
                <p>Descubre todo de forma sencilla con nuestras tres categorías principales:</p>
            </div>
            <div class="cards">
                <div class="card">
                    <img id="card_icon" src={universidadIcon} alt="Universidad icon"/>
                    <h2>Universidades</h2>
                    <p>Descubre las mejores universidades de Chihuahua. Información sobre programas, instalaciones y más, <span class="text-gradient">todo en un solo lugar</span>.</p>
                </div>
                <div class="card">
                    <img id="card_icon" src={areasIcon} alt="Areas icon"/>
                    <h2>Áreas</h2>
                    <p>Encuentra tu pasión entre una gran variedad de disciplinas. Desde ciencias hasta artes, siempre hay algo <span class="text-gradient">para ti</span>.</p>
                </div>
                <div class="card">
                    <img id="card_icon" src={carreraIcon} alt="Carrera icon"/>
                    <h2>Carreras</h2>
                    <p>Investiga tus opciones de carrera a fondo. Planes de estudio, oferta laboral y mucho más para ayudarte a tomar la <span class="text-gradient">mejor decisión</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default Organizacion;