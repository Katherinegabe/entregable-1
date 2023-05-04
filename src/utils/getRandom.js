export const getRandomNumber = (number) => {
    const random = Math.random();
    const roundedRandom = Math.floor(random * number);   
    return roundedRandom;
};