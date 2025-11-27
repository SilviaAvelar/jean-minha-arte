import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Maria Silva",
            text: "Fiquei maravilhada com o retrato que o Jean fez da minha família! Capturou perfeitamente nossas personalidades.",
            rating: 5
        },
        {
            id: 2, 
            name: "João Santos",
            text: "Profissional incrível! O desenho do meu cachorro ficou tão real que parece que vai sair do papel.",
            rating: 5
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: '#2c3e50',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ color: '#e74c3c', marginBottom: '50px' }}>O que dizem os clientes</h2>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} style={{
                            background: '#34495e',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'left'
                        }}>
                            <div style={{ color: '#f39c12', marginBottom: '15px' }}>
                                {'★'.repeat(testimonial.rating)}
                            </div>
                            <p style={{ 
                                color: '#bdc3c7', 
                                fontStyle: 'italic',
                                marginBottom: '20px',
                                lineHeight: '1.6'
                            }}>
                                "{testimonial.text}"
                            </p>
                            <p style={{ 
                                color: '#e74c3c', 
                                fontWeight: 'bold',
                                margin: 0
                            }}>
                                - {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;