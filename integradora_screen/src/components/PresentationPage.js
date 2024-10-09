import React from 'react';
import wavingImage from '../media/waving-pathfinder.svg'

const PresentationPage = () => {
    return (
            <div class="presentation-text">
                <h1 class="text-dark">La única plataforma en <span class="text-blue">Chihuahua</span> que reúne toda la información universitaria que necesitas.</h1>
                <hr />
                <img src={wavingImage} alt="" />
            </div>
    );
};

export default PresentationPage;