import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

// Importações necessárias para o Banco de Dados funcionar
import { db } from '../services/firebaseConfig';

// Componente de Estrelas (Mantido igual ao seu)
const StarRating = ({ rating, onRatingChange }) => {
    return (
        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#bdc3c7', marginBottom: '8px' }}>
                Avaliação:
            </label>
            <div style={{ display: 'flex', gap: '5px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => onRatingChange(star)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            color: star <= rating ? '#f39c12' : '#bdc3c7',
                            padding: '0'
                        }}
                    >
                        {star <= rating ? '★' : '☆'}
                    </button>
                ))}
            </div>
        </div>
    );
};

const Testimonials = () => {
    // Estado começa vazio (será preenchido pelo banco de dados)
    const [testimonials, setTestimonials] = useState([]);

    // Estado para saber se está carregando os dados
    const [loading, setLoading] = useState(true);

    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        text: '',
        rating: 5
    });

    const [showForm, setShowForm] = useState(false);

    // 1. LER DADOS DO FIREBASE (Carrega assim que abre a tela)
    useEffect(() => {
        // Pega a coleção 'avaliacoes' e ordena pela data de criação (mais novos primeiro)
        const q = query(collection(db, "avaliacoes"), orderBy("createdAt", "desc"));

        // Fica "ouvindo" o banco. Se alguém postar, atualiza na hora.
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const dadosDoBanco = snapshot.docs.map(doc => ({
                id: doc.id, // O ID vem do Firebase
                ...doc.data()
            }));
            setTestimonials(dadosDoBanco);
            setLoading(false);
        });

        // Limpa a conexão se mudar de página
        return () => unsubscribe();
    }, []);

    // 2. ENVIAR DADOS PARA O FIREBASE
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Salva no banco de dados
            await addDoc(collection(db, "avaliacoes"), {
                name: newTestimonial.name,
                text: newTestimonial.text,
                rating: newTestimonial.rating,
                // Salva a data formatada para exibir
                date: new Date().toLocaleDateString('pt-BR'),
                // Salva a data real para ordenar
                createdAt: new Date()
            });

            // Limpa o formulário e fecha
            setNewTestimonial({ name: '', text: '', rating: 5 });
            setShowForm(false);

            alert('✅ Avaliação enviada com sucesso!');
        } catch (error) {
            console.error("Erro ao salvar: ", error);
            alert("❌ Erro ao enviar. Verifique sua conexão.");
        }
    };

    return (
        <section style={{
            padding: '80px 0',
            background: '#2c3e50',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>O que dizem os clientes</h2>

                {/* Botão para abrir formulário */}
                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        style={{
                            padding: '12px 25px',
                            background: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            marginBottom: '40px'
                        }}
                    >
                        ✍️ Deixe sua avaliação
                    </button>
                )}

                {/* Formulário de Avaliação */}
                {showForm && (
                    <div style={{
                        background: '#34495e',
                        padding: '30px',
                        borderRadius: '15px',
                        marginBottom: '40px',
                        maxWidth: '600px',
                        margin: '0 auto 40px auto',
                        border: '2px solid #e74c3c'
                    }}>
                        <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>
                            Conte sua experiência
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <input
                                    type="text"
                                    placeholder="Seu nome *"
                                    value={newTestimonial.name}
                                    onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #bdc3c7',
                                        borderRadius: '8px',
                                        background: '#2c3e50',
                                        color: 'white',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>

                            <StarRating
                                rating={newTestimonial.rating}
                                onRatingChange={(rating) => setNewTestimonial({ ...newTestimonial, rating })}
                            />

                            <div style={{ marginBottom: '20px' }}>
                                <textarea
                                    placeholder="Conte como foi sua experiência... *"
                                    value={newTestimonial.text}
                                    onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
                                    required
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #bdc3c7',
                                        borderRadius: '8px',
                                        background: '#2c3e50',
                                        color: 'white',
                                        fontSize: '16px',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '12px 25px',
                                        background: '#27ae60',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}
                                >
                                    ✅ Enviar Avaliação
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    style={{
                                        padding: '12px 25px',
                                        background: '#95a5a6',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        fontSize: '16px'
                                    }}
                                >
                                    ❌ Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Carregando... */}
                {loading && (
                    <p style={{ color: '#bdc3c7' }}>Carregando avaliações...</p>
                )}

                {/* Lista de Avaliações */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} style={{
                            background: '#34495e',
                            padding: '25px',
                            borderRadius: '15px',
                            textAlign: 'left',
                            border: '1px solid #3c5063'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '15px'
                            }}>
                                <div style={{ color: '#f39c12', fontSize: '18px' }}>
                                    {'★'.repeat(testimonial.rating)}
                                    <span style={{ color: '#bdc3c7', fontSize: '14px', marginLeft: '8px' }}>
                                        ({testimonial.rating}/5)
                                    </span>
                                </div>
                                <span style={{
                                    color: '#95a5a6',
                                    fontSize: '12px',
                                    fontStyle: 'italic'
                                }}>
                                    {testimonial.date}
                                </span>
                            </div>

                            <p style={{
                                color: '#bdc3c7',
                                fontStyle: 'italic',
                                marginBottom: '20px',
                                lineHeight: '1.6',
                                fontSize: '15px'
                            }}>
                                "{testimonial.text}"
                            </p>

                            <p style={{
                                color: '#e74c3c',
                                fontWeight: 'bold',
                                margin: 0,
                                fontSize: '16px'
                            }}>
                                — {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mensagem se não houver avaliações */}
                {!loading && testimonials.length === 0 && (
                    <div style={{
                        color: '#bdc3c7',
                        fontStyle: 'italic',
                        padding: '40px'
                    }}>
                        Seja o primeiro a deixar uma avaliação! ✨
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;