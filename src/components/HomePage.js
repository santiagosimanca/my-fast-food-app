import React from 'react';

const HomePage = () => {
    return (
        <div className="content">
            <h1>Bienvenido a nuestra Aplicación de Comida Rápida</h1>
            <p>
                Disfruta de los mejores platillos preparados con ingredientes frescos y de alta calidad.
                Ofrecemos una gran variedad de hamburguesas, papas fritas, bebidas y más.
            </p>
            <img
                src="\images\banner.png"
                alt="Promoción"
                style={{ width: '100%', height: 'auto', margin: '20px 0' }}
            />
            <div className="row">
                <div className="column">
                    <h2>Hamburguesas</h2>
                    <p>
                        Prueba nuestras deliciosas hamburguesas, hechas con carne 100% de res y pan recién horneado.
                    </p>
                    <img
                        src="\images\hamburguesa.png"
                        alt="Hamburguesas"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="column">
                    <h2>Papas Fritas</h2>
                    <p>
                        Nuestras crujientes papas fritas son el acompañamiento perfecto para cualquier comida.
                    </p>
                    <img
                        src="\images\papas.png"
                        alt="Papas Fritas"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="column">
                    <h2>Bebidas</h2>
                    <p>
                        Refresca tu día con nuestras variadas opciones de bebidas, desde refrescos hasta batidos.
                    </p>
                    <img
                        src="\images\bebidas.png"
                        alt="Bebidas"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;