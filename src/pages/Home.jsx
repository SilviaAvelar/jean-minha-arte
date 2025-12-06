import React from "react";
import { Link } from "react-router-dom";

import About from "../components/About";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    marginTop: "80px",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        padding: "0 20px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "50px",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div>
                        <h1
                            style={{
                                fontSize: "3.5rem",
                                marginBottom: "20px",
                                background: "linear-gradient(45deg, #e74c3c, #f39c12)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Arte que Conta Histórias.
                        </h1>
                        <p
                            style={{
                                fontSize: "1.2rem",
                                marginBottom: "30px",
                                color: "#bdc3c7",
                            }}
                        >
                            Desenhos únicos feitos com paixão e técnica por Jean Pereira.
                        </p>

                        <div
                            style={{
                                fontSize: "1.2rem",
                                marginBottom: "30px",
                                color: "#bdc3c7",
                                maxWidth: "600px",
                            }}
                        >
                            Artista profissional com mais de 20 anos de experiência
                            especializado em
                            <strong>
                                {" "}
                                Realismo, Arte Digital, Óleo, Pastel, Pintura Acrílica, Carvão,
                                Lápis de Cor, Aquarela e técnicas tradicionais
                            </strong>
                            .<p style={{ marginTop: "10px" }}>De Portugal para o mundo.</p>
                        </div>

                        <div style={{ display: "flex", gap: "20px" }}>
                            <Link
                                to="/galeria"
                                style={{
                                    padding: "12px 30px",
                                    background: "#e74c3c",
                                    color: "white",
                                    textDecoration: "none",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Ver Galeria
                            </Link>
                            <Link
                                to="/encomendas"
                                style={{
                                    padding: "12px 30px",
                                    border: "2px solid #e74c3c",
                                    color: "#e74c3c",
                                    textDecoration: "none",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Fazer Encomenda
                            </Link>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: "400px",
                            borderRadius: "10px",
                            overflow: "hidden",
                            position: "relative",
                            background: "#34495e",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src="/images/jean.jpg"
                            alt="Jean"
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "contain",
                                borderRadius: "10px",
                                background: "#34495e",
                            }}
                        />
                        <span
                            style={{
                                color: "#7f8c8d",
                                fontSize: "1.5rem",
                                display: "none",
                            }}
                        >
                            🎨 Imagem de Destaque
                        </span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />
            
            {/* Avaliações */}
            <Testimonials />

            {/* --- INICIO DO CONJUNTO FLUTUANTE (TEXTO + BOTÃO) --- */}
            <div 
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column", // Coloca um em cima do outro
                    alignItems: "center",     // Centraliza
                    gap: "8px"                // Espaço entre o texto e o botão
                }}
            >
                {/* 1. O Texto "Siga-me" */}
                <span style={{
                    backgroundColor: "white",
                    color: "#d6249f", // Rosa do Instagram
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    whiteSpace: "nowrap",
                    animation: "bounce 2s infinite" // Pequena animação opcional
                }}>
                    Siga-me!
                </span>

                {/* 2. O Botão */}
                <a
                    href="https://www.instagram.com/jean_minha_arte/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        width: "60px",
                        height: "60px",
                        background:
                            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        cursor: "pointer",
                        transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    title="Ir para o Instagram"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Home;