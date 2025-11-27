import React, { useState } from 'react';

import { calculatePrice } from '../utils/pricing';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'retrato',
        size: 'A4',
        technique: 'grafite',
        urgency: false,
        description: '',
        referenceImage: null
    });

    const priceInfo = calculatePrice(formData.size, formData.technique, formData.urgency);

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = '351911595194';

        const message = `
🖌️ *NOVA ENCOMENDA* 🖌️

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Tipo:* ${formData.type}
*Tamanho:* ${formData.size}
*Técnica:* ${formData.technique}
*Urgência:* ${formData.urgency ? 'Sim' : 'Não'}
*Preço:* R$ ${priceInfo.price}

*Descrição:*
${formData.description}
    `.trim();

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        alert(`Encomenda preparada!\\n\\nPreço: R$ ${priceInfo.price}\\n\\nVocê será redirecionado para o WhatsApp para finalizar.`);

        setFormData({
            name: '',
            email: '',
            type: 'retrato',
            size: 'A4',
            technique: 'grafite',
            urgency: false,
            description: ''
        });
    };

    return (
        <div style={{
            marginTop: '80px',
            padding: '40px',
            minHeight: '100vh',
            background: '#1a1a1a'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: '#e74c3c', marginBottom: '10px' }}>Fazer Encomenda</h1>
                <p style={{ color: '#bdc3c7', marginBottom: '30px' }}>
                    Preencha o formulário e receba um orçamento instantâneo
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px'
                }}>
                    {/* Formulário */}
                    <form onSubmit={handleSubmit} style={{
                        background: '#2c3e50',
                        padding: '30px',
                        borderRadius: '10px'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Seu Nome *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Seu Email *
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Tipo de Desenho
                            </label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            >
                                <option value="retrato">Retrato</option>
                                <option value="paisagem">Paisagem</option>
                                <option value="animal">Animal</option>
                                <option value="abstrato">Abstrato</option>
                                <option value="fantasia">Fantasia</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Tamanho
                            </label>
                            <select
                                value={formData.size}
                                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            >
                                <option value="A4">A4 (21x30cm)</option>
                                <option value="A3">A3 (30x42cm)</option>
                                <option value="A2">A2 (42x59cm)</option>
                                <option value="A1">A1 (59x84cm)</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Técnica
                            </label>
                            <select
                                value={formData.technique}
                                onChange={(e) => setFormData({ ...formData, technique: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            >
                                <option value="grafite">Grafite</option>
                                <option value="colorido">Lápis de Cor</option>
                                <option value="aquarela">Aquarela</option>
                                <option value="digital">Digital</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', color: '#bdc3c7', marginBottom: '20px' }}>
                                <input
                                    type="checkbox"
                                    checked={formData.urgency}
                                    onChange={(e) => setFormData({ ...formData, urgency: e.target.checked })}
                                    style={{ marginRight: '10px' }}
                                />
                                Encomenda urgente (+ €20)
                            </label>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Descrição da Encomenda
                            </label>
                            <textarea
                                rows="4"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Descreva sua ideia, referências, cores preferidas..."
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '5px' }}>
                                Imagem de Referência (opcional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFormData({ ...formData, referenceImage: e.target.files[0] })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #34495e',
                                    borderRadius: '5px',
                                    background: '#1a1a1a',
                                    color: 'white'
                                }}
                            />
                            {formData.referenceImage && (
                                <p style={{ color: '#27ae60', fontSize: '0.9rem', marginTop: '5px' }}>
                                    ✅ Imagem selecionada: {formData.referenceImage.name}
                                </p>
                            )}
                        </div>

                        <button type="submit" style={{
                            padding: '12px 30px',
                            background: '#25D366', // Verde do WhatsApp
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '100%',
                            fontWeight: 'bold',
                            fontSize: '16px'
                        }}>
                            📱 Enviar para WhatsApp - €{priceInfo.price}
                        </button>
                    </form>

                    {/* Card de Preço */}
                    <div style={{
                        background: 'linear-gradient(135deg, #e74c3c, #f39c12)',
                        padding: '30px',
                        borderRadius: '10px',
                        color: 'white',
                        height: 'fit-content'
                    }}>
                        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>💰 Orçamento</h3>

                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span>Base ({formData.size}):</span>
                                <span>€{priceInfo.base}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span>Técnica ({formData.technique}):</span>
                                <span>x{priceInfo.techniqueMultiplier}</span>
                            </div>
                            {formData.urgency && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Urgência:</span>
                                    <span>+ €{priceInfo.urgencyFee}</span>
                                </div>
                            )}
                            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.3)', margin: '15px 0' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <span>Total:</span>
                                <span>€{priceInfo.price}</span>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', opacity: '0.9', textAlign: 'center' }}>
                            <p>🎨 Preço inclui:</p>
                            <p>• Arte original e única</p>
                            <p>• Material de alta qualidade</p>
                            <p>• Revisões inclusas</p>
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>💶 Preços em Euros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;