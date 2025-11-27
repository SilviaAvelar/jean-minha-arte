import React from 'react';

const AboutPage = () => {
    return (
        <div style={{ 
            marginTop: '80px', 
            padding: '40px 20px',
            minHeight: '100vh',
            background: '#1a1a1a',
            color: 'white'
        }}>
            <div style={{ 
                maxWidth: '1000px', 
                margin: '0 auto',
                lineHeight: '1.6'
            }}>
                <h1 style={{ 
                    color: '#e74c3c', 
                    textAlign: 'center',
                    marginBottom: '40px',
                    fontSize: '2.5rem'
                }}>
                    Sobre o Artista
                </h1>

                {/* Seção Principal */}
                <div style={{
                    background: '#2c3e50',
                    padding: '40px',
                    borderRadius: '15px',
                    marginBottom: '30px'
                }}>
                    <h2 style={{ color: '#f39c12', marginBottom: '20px' }}>
                        Jean Carlos Pereira
                    </h2>
                    <p style={{ marginBottom: '15px', color: '#bdc3c7' }}>
                        <strong>Localização:</strong> Viana do Castelo, Portugal
                    </p>
                    <p style={{ marginBottom: '15px', color: '#bdc3c7' }}>
                        <strong>Formação:</strong> Técnico em Informática | <strong>Experiência:</strong> +20 anos
                    </p>
                    
                    <p style={{ marginBottom: '15px', color: '#bdc3c7' }}>
                        "Minha paixão pela arte vai além de simplesmente produzir peças, adoro compartilhar meu conhecimento 
                        e ensinar as técnicas que desenvolvo ao criar minhas obras."
                    </p>
                </div>

                {/* Grid de Skills */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '40px'
                }}>
                    {/* Técnicas */}
                    <div style={{
                        background: '#34495e',
                        padding: '25px',
                        borderRadius: '10px'
                    }}>
                        <h3 style={{ color: '#e74c3c', marginBottom: '20px', textAlign: 'center' }}>
                            🎨 Técnicas Dominadas
                        </h3>
                        <div style={{ color: '#bdc3c7' }}>
                            {[
                                'Arte Digital', 'Pintura a óleo', 'Pintura a pastel Seco',
                                'Pintura acrílica', 'Pintura a lápis de cor', 'Desenho a lápis de grafite',
                                'Marcador', 'Carvão', 'Aguarela', 'Aerografia'
                            ].map((tech, index) => (
                                <div key={index} style={{ 
                                    padding: '8px 0',
                                    borderBottom: '1px solid #2c3e50'
                                }}>
                                    • {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Estilos */}
                    <div style={{
                        background: '#34495e',
                        padding: '25px',
                        borderRadius: '10px'
                    }}>
                        <h3 style={{ color: '#e74c3c', marginBottom: '20px', textAlign: 'center' }}>
                            ✨ Estilos Artísticos
                        </h3>
                        <div style={{ color: '#bdc3c7' }}>
                            {[
                                'Realismo', 'Cartoon', 'Chibi', 'Sketch', 'Caricatura',
                                'HQ', 'Hiper realismo', 'Ministrações'
                            ].map((style, index) => (
                                <div key={index} style={{ 
                                    padding: '8px 0',
                                    borderBottom: '1px solid #2c3e50'
                                }}>
                                    • {style}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filosofia Artística */}
                <div style={{
                    background: '#2c3e50',
                    padding: '30px',
                    borderRadius: '10px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{ color: '#f39c12', marginBottom: '15px' }}>
                        Expressão Individual e Coletiva
                    </h3>
                    <p style={{ color: '#bdc3c7', marginBottom: '15px' }}>
                        A arte é uma forma poderosa de expressão individual, permitindo que os artistas comuniquem 
                        suas visões de mundo pessoais e suas experiências únicas. Ao mesmo tempo, a arte também pode 
                        ser uma forma de expressão coletiva, refletindo as preocupações, aspirações e identidades 
                        de comunidades inteiras.
                    </p>
                </div>

                {/* Impacto Social */}
                <div style={{
                    background: '#2c3e50',
                    padding: '30px',
                    borderRadius: '10px'
                }}>
                    <h3 style={{ color: '#f39c12', marginBottom: '15px' }}>
                        O Impacto da Arte na Sociedade
                    </h3>
                    <p style={{ color: '#bdc3c7' }}>
                        Além de seu valor estético e emocional, a arte também desempenha um papel importante na sociedade. 
                        Ela pode ser uma ferramenta poderosa para promover a mudança social, aumentar a conscientização 
                        sobre questões importantes e inspirar a ação política.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;