import React from 'react';

export const Banner = () => {
  const sectionStyle = {
    backgroundImage: `url('/images/woman.jpg')`,
    backgroundSize: 'cover',
    /* otras propiedades de estilo para el fondo */
  };

  return (
    <section className="banner" id="banner" style={sectionStyle}>
      <div className="container">
        <div className="banner-wrapper">
          <div className="content">
            <p>New ideas</p>
            <h3>Woman</h3>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
