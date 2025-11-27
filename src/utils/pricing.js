export const calculatePrice = (size, technique, urgency = false) => {
    const basePrices = {
        'A4': 40,   // Euros
        'A3': 60,   // Euros
        'A2': 80,   // Euros
        'A1': 120   // Euros
    };

    const techniqueMultiplier = {
        'grafite': 1,
        'colorido': 1.5,
        'aquarela': 1.8,
        'digital': 2
    };

    const urgencyFee = urgency ? 20 : 0; // Euros

    const price = (basePrices[size] * techniqueMultiplier[technique]) + urgencyFee;

    return {
        price,
        base: basePrices[size],
        techniqueMultiplier: techniqueMultiplier[technique],
        urgencyFee
    };
};