import React from 'react';

const Caracteristica = ({ title, description, imageSrc }) => {
    return (
        <div id="diseño" className="caracteristica">
            <div className="caracteristica-text">
                <h1 className="text-gradient">{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="caracteristica-image">
                {imageSrc && <img src={imageSrc} alt="Design Preview" />}
            </div>
        </div>
    );
};

export default Caracteristica;