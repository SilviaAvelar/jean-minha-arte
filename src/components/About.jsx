import React from 'react';

const About = () => {
    return (
        <section style={{
            padding: '80px 0',
            background: '#2c3e50',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '30px',
                    color: '#e74c3c'
                }}>
                    Sobre o Artista
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    marginBottom: '20px',
                    color: '#bdc3c7',
                    lineHeight: '1.6'
                }}>
                    Jean é um artista apaixonado por transformar emoções em traços.
                    Com anos de experiência em diversas técnicas, cada desenho é
                    uma peça única que conta uma história especial.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    marginTop: '40px'
                }}>
                    <div style={{ padding: '20px' }}>
                        <h4 style={{ color: '#f39c12', marginBottom: '10px' }}>🎨 Técnicas</h4>
                        <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>
                            Grafite, carvão, lápis de cor, aquarela
                        </p>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <h4 style={{ color: '#f39c12', marginBottom: '10px' }}>⏱️ Experiência</h4>
                        <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>
                            +5 anos criando arte
                        </p>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <h4 style={{ color: '#f39c12', marginBottom: '10px' }}>📍 Estilo</h4>
                        <p style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>
                            Realista, expressivo, emocional
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;