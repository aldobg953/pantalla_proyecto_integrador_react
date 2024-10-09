import React from 'react';
import corazon from '../media/corazon-colorful.svg';

export default function Dedicatoria() {
    return (
        <div class="dedicatoria">
            <p>Con cariño</p>
          <h2 class="text-gradient">PathFinder Team</h2>
          <img src={corazon} alt="Heart" />
        </div>
    );
};