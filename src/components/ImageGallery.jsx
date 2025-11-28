import React, { useState } from 'react';

import { artworksData } from '../data/artworksData';

const ImageGallery = ({ selectedCategory = 'todos' }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Função para voltar ao topo
    const scrollToTop = () => {
        console.log('Tentando voltar ao topo...');
        
        // Tenta diferentes métodos
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Backup se não funcionar
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 100);
    };

    // Filtrar obras baseado na categoria selecionada
    const filteredArtworks = selectedCategory === 'todos'
        ? artworksData
        : artworksData.filter(art => art.category === selectedCategory);

    return (
        <div style={{ position: 'relative' }}>
            
            {/* Botão Voltar ao Topo */}
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    padding: '15px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '20px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    zIndex: 9999,
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                }}
                title="Voltar ao topo"
            >
                ↑
            </button>

            {/* Modal para imagem ampliada */}
            {selectedImage && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '20px'
                }} onClick={() => setSelectedImage(null)}>
                    
                    <div style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        position: 'relative',
                        background: '#2c3e50',
                        borderRadius: '15px',
                        padding: '20px'
                    }}>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                maxHeight: '70vh'
                            }}
                        />
                        
                        <div style={{
                            color: 'white',
                            textAlign: 'center',
                            marginTop: '15px'
                        }}>
                            <h3 style={{ color: '#e74c3c', marginBottom: '10px' }}>
                                {selectedImage.title}
                            </h3>
                            <p style={{ color: '#bdc3c7', marginBottom: '5px' }}>
                                {selectedImage.description}
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '15px',
                                fontSize: '0.9rem'
                            }}>
                                <span style={{
                                    background: '#e74c3c',
                                    padding: '4px 12px',
                                    borderRadius: '12px'
                                }}>
                                    {selectedImage.category.replace('-', ' - ')}
                                </span>
                                <span style={{
                                    background: '#f39c12',
                                    padding: '4px 12px',
                                    borderRadius: '12px'
                                }}>
                                    {selectedImage.technique}
                                </span>
                            </div>
                        </div>
                        
                        <button
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '-15px',
                                right: '-15px',
                                background: '#e74c3c',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Mensagem se não houver obras */}
            {filteredArtworks.length === 0 && (
                <div style={{
                    textAlign: 'center',
                    color: '#bdc3c7',
                    padding: '60px 20px',
                    background: '#2c3e50',
                    borderRadius: '15px',
                    marginBottom: '30px'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎨</div>
                    <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>
                        {selectedCategory === 'todos' ? 'Galeria' : selectedCategory.replace('-', ' - ')}
                    </h3>
                    <p>Em breve teremos obras nesta categoria!</p>
                </div>
            )}

            {/* Grid de imagens */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                width: '100%'
            }}>
                {filteredArtworks.map(artwork => (
                    <div
                        key={artwork.id}
                        style={{
                            background: '#2c3e50',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            border: '2px solid #34495e'
                        }}
                        onClick={() => setSelectedImage(artwork)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            height: '280px',
                            background: '#1a1a1a',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={artwork.image}
                                alt={artwork.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        
                        <div style={{ padding: '20px' }}>
                            <h4 style={{
                                color: 'white',
                                marginBottom: '8px',
                                fontSize: '1.2rem'
                            }}>
                                {artwork.title}
                            </h4>
                            <p style={{
                                color: '#bdc3c7',
                                fontSize: '0.9rem',
                                marginBottom: '12px'
                            }}>
                                {artwork.description}
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{
                                    background: '#e74c3c',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {artwork.category.replace('-', ' - ')}
                                </span>
                                <span style={{
                                    color: '#f39c12',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {artwork.technique}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Espaço extra para garantir scroll */}
            <div style={{ height: '50px' }}></div>
        </div>
    );
};

export default ImageGallery;