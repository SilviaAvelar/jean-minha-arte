import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#000',
            padding: '40px 0',
            textAlign: 'center',
            color: '#bdc3c7',
            marginTop: 'auto'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Jean Minha Arte</h3>
                <p style={{ marginBottom: '10px' }}>Desenhos únicos e encomendas personalizadas</p>
                <p style={{ fontSize: '0.9rem', opacity: '0.7' }}>
                    &copy; 2025 Jean Minha Arte. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;