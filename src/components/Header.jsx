import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{
            background: 'rgba(0,0,0,0.9)',
            padding: '20px 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    textDecoration: 'none'
                }}>
                    Jean Minha Arte
                </Link>
                <nav>
                    <Link
                        to="/"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '30px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#e74c3c';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'white';
                        }}
                    >
                        Início
                    </Link>
                    <Link
                        to="/galeria"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '30px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#e74c3c';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'white';
                        }}
                    >
                        Galeria
                    </Link>
                    <Link
                        to="/encomendas"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '30px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#e74c3c';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'white';
                        }}
                    >
                        Encomendas
                    </Link>
                    <Link
                        to="/sobre"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '30px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#e74c3c';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'white';
                        }}
                    >
                        Sobre
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;