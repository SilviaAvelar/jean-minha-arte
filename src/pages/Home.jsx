import React from 'react';
import { Link } from 'react-router-dom';

import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div style={{
                marginTop: '80px',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 20px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '50px',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <div>
                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '20px',
                            background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Arte que Conta Histórias
                        </h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#bdc3c7' }}>
                            Desenhos únicos feitos com paixão e técnica por Jean Carlos
                        </p>
                        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#bdc3c7', maxWidth: '600px' }}>
                            Artista profissional com 20+ anos de experiência especializado em
                            <strong> Realismo, Arte Digital, Óleo e técnicas tradicionais</strong>.
                            <p>De Portugal para o mundo.</p>
                        </p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <Link to="/galeria" style={{
                                padding: '12px 30px',
                                background: '#e74c3c',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontWeight: 'bold'
                            }}>
                                Ver Galeria
                            </Link>
                            <Link to="/encomendas" style={{
                                padding: '12px 30px',
                                border: '2px solid #e74c3c',
                                color: '#e74c3c',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontWeight: 'bold'
                            }}>
                                Fazer Encomenda
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '400px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        position: 'relative',
                        background: '#34495e',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/images/jean.jpg"
                            alt="Jean"
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'contain',
                                borderRadius: '10px',
                                background: '#34495e'
                            }}
                        />
                        {/* O texto só aparece se a imagem não carregar */}
                        <span style={{
                            color: '#7f8c8d',
                            fontSize: '1.5rem',
                            display: 'none'
                        }}>
                            🎨 Imagem de Destaque
                        </span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />
            <Testimonials />

        </div>
    );
};

export default Home;