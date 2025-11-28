export const calculatePrice = (size, technique, urgency = false) => {
    const basePrices = {
        'A4': 40,
        'A3': 60, 
        'A2': 80,
        'A1': 120
    };

    const techniqueMultiplier = {
        'grafite': 1,
        'colorido': 1.5,
        'aquarela': 1.8,
        'digital': 2,
        'hidrocor': 1.3,  
        'carvao': 1.2     
    };

    // Valores padrão seguros 
    const safeSize = Object.keys(basePrices).includes(size) ? size : 'A4';
    const safeTechnique = Object.keys(techniqueMultiplier).includes(technique) ? technique : 'grafite';
    
    const urgencyFee = urgency ? 20 : 0;

    const basePrice = basePrices[safeSize];
    const multiplier = techniqueMultiplier[safeTechnique];
    const price = (basePrice * multiplier) + urgencyFee;

    // Garante que o preço nunca seja negativo
    const finalPrice = Math.max(0, price);

    return {
        price: finalPrice,
        base: basePrice,
        techniqueMultiplier: multiplier,
        urgencyFee,
        size: safeSize,
        technique: safeTechnique
    };
};