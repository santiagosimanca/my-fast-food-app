import React from 'react';

const AboutPage = () => {
    return (
        <div className="content">
            <h1>Sobre Nosotros</h1>
            <p>
                Desde nuestros inicios, nos hemos comprometido a brindar a nuestros clientes productos sabrosos y de calidad
                y un excelente servicio. Con más de 50 años en el mercado, hemos innovado y adaptado nuestras ofertas para
                satisfacer los gustos y preferencias de cada generación.
            </p>
            <img
                src="\images\nosotros.jpg"
                alt="Sobre Nosotros"
                style={{ width: '100%', height: 'auto', margin: '20px 0' }}
            />
            <h2>Nuestra Misión</h2>
            <p>
                Nuestra misión es ofrecer alimentos deliciosos y de calidad a nuestros clientes en todo el mundo, brindando
                experiencias memorables en cada visita.
            </p>
            <h2>Nuestros Valores</h2>
            <ul>
                <li>Calidad</li>
                <li>Servicio</li>
                <li>Responsabilidad</li>
                <li>Innovación</li>
            </ul>
            <img
                src="\images\valores.jpg"
                alt="Valores"
                style={{ width: '100%', height: 'auto', margin: '20px 0' }}
            />
        </div>
    );
};

export default AboutPage;