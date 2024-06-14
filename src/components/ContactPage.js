import React from 'react';

const ContactPage = () => {
    return (
        <div className="content">
            <h1>Contacto</h1>
            <p>
                Estamos aquí para ayudarte. Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros.
            </p>
            <div className="form-container">
                <img
                    src="\images\contact.jpg"
                    alt="Contacto"
                    style={{ width: '100%', height: 'auto', margin: '20px 0' }}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;