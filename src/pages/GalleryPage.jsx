import React, { useState } from 'react';

import ImageGallery from '../components/ImageGallery';

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('todos');

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'aguarela', name: 'Aguarela' },
        { id: 'arte-digital', name: 'Arte Digital' },
        { id: 'caricatura', name: 'Caricatura' },
        { id: 'carvao', name: 'Carvão' },
        { id: 'chibi', name: 'Chibi' },
        { id: 'lapis-grafite', name: 'Desenho - Grafite' },
        { id: 'hidrocor', name: 'Hidrocor' },
        { id: 'lapis-cor', name: 'Lápis de Cor' },
        { id: 'ministracoes', name: 'Ministrações' },
        { id: 'oleo', name: 'Óleo' },
        { id: 'pastel', name: 'Pastel' },
        { id: 'pedras', name: 'Pedras' },
        { id: 'realismo-grafite', name: 'Realismo - Grafite' }
    ];

    return (
        <div style={{
            marginTop: '80px',
            padding: '40px 20px',
            minHeight: '100vh',
            background: '#1a1a1a',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                width: '100%'
            }}>
                <h1 style={{
                    color: '#e74c3c',
                    marginBottom: '10px',
                    textAlign: 'center',
                    fontSize: '2.5rem'
                }}>
                    Galeria de Obras
                </h1>
                <p style={{
                    color: '#bdc3c7',
                    marginBottom: '40px',
                    textAlign: 'center',
                    fontSize: '1.1rem'
                }}>
                    Conheça alguns dos meus trabalhos.
                </p>

                {/* Filtros */}
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '40px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            style={{
                                padding: '12px 24px',
                                background: selectedCategory === category.id ? '#e74c3c' : '#34495e',
                                color: 'white',
                                border: 'none',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontWeight: 'bold',
                                fontSize: '1rem'
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <ImageGallery selectedCategory={selectedCategory} />
            </div>
        </div>
    );
};

export default GalleryPage;