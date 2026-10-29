const CARD_VALUE = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
} as const;

const CARD_SIGN = {
    Heart: 1,
    Diamond: 2,
    Clover: 3,
    Spades: 4,
} as const;

type CardValue = (typeof CARD_VALUE)[keyof typeof CARD_VALUE];
type CardSign = (typeof CARD_SIGN)[keyof typeof CARD_SIGN];

type Card = {
    value: CardValue;
    sign: CardSign;
}

//objet main = { cards: Card[] }
type Hand = {
    cards: Card[];
}

// exemple de main brelan
export const handBrelan: Hand = {
    cards: [
        { value: 10, sign: 1 },
        { value: 10, sign: 2 },
        { value: 10, sign: 3 },
        { value: 11, sign: 1 },
        { value: 12, sign: 1 },
    ],
}

// exemple de main suite
export const handSuite: Hand = {
    cards: [
        { value: 10, sign: 1 },
        { value: 11, sign: 1 },
        { value: 12, sign: 1 },
        { value: 13, sign: 1 },
        { value: 14, sign: 1 },
    ],
}

// exemple de main color
export const handColor: Hand = {
    cards: [
        { value: 10, sign: 1 },
        { value: 11, sign: 1 },
        { value: 12, sign: 1 },
        { value: 13, sign: 1 },
        { value: 14, sign: 1 },
    ],
}

// fonction simple et detaillé pour determiner si une main est une paire
export const isPair = (hand: Hand): [boolean, number] => {
    const values = hand.cards.map(card => card.value);
    for (const value of values) {
        if (values.filter(v => v === value).length === 2) {
            return [true, 0];
        }
    }
    return [false, 0];
}

// fonction simple et detaillé pour determiner si une main est un brelan: 3 cartes de la même valeur et 2 cartes de valeurs différentes
export const isBrelan = (hand: Hand): [boolean, number] => {
    const values = hand.cards.map(card => card.value);
    for (const value of values) {
        if (values.filter(v => v === value).length === 3) {
            return [true, 30];
        }
    }
    return [false, 0];
}

// fonction simple et detaillé pour determiner si une main est une Suite : les 5 valeurs sont consécutives
export const isSuite = (hand: Hand): [boolean, number] => {
    const values = hand.cards.map(card => card.value);
    for (let i = 1; i < values.length; i++) {
        const previous = values[i - 1];
        const current = values[i];
        if (previous === undefined || current !== previous + 1) {
            return [false, 0];
        }
    }
    return [true, 40];
}

// fonction simple et detaillé pour determiner si une main est une Color : les 5 cartes sont de la même couleur
export const isColor = (hand: Hand): [boolean, number] => {
    const signs = hand.cards.map(card => card.sign);
    for (const sign of signs) {
        if (signs.filter(s => s === sign).length === 5) {
            return [true, 45];
        }
    }
    return [false, 0];
}

// fonction simple et detaillé pour determiner si une main est une quinte flush : les 5 cartes sont de la même couleur et les valeurs sont consécutives
export const isQuinteFlush = (hand: Hand): [boolean, number] => {
    return [true, 80];
}

// fonction simple et detaillé pour determiner si une main est un carré : 4 cartes de la même valeur
export const isCarre = (hand: Hand): [boolean, number] => {
    return [true, 60];
}

export default function pokerCardAnalyser(hands: Hand[]): Number {
    return 0;
}
